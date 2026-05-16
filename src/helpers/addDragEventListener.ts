import * as THREE from 'three';

const _states = {
  idle     : 0,
  loading  : 1,
  dragging : 2
}
let _state = _states.idle;

let _dP = new THREE.Vector3();
let _x0 = -1; let _y0 = -1;
let _scenes: THREE.Object3D[] = [];
let _boundFunction: ((evt: Event) => void) | null = null;
let _camera: THREE.Camera | null = null;

type DragInputEvent = MouseEvent | TouchEvent;


function updateMeshPosition(canvas: HTMLCanvasElement, event: Event) {
  const dragEvent = event as DragInputEvent;
  const MOUSEVECTOR = new THREE.Vector3();
  const DIRECTIONVECTOR = new THREE.Vector3();
  const VIEWPORTVECTOR = new THREE.Vector3();
  const _headCenterZ = -1;

  if (_state !== _states.dragging) return; // MT217

  const isTouch = !!(('touches' in dragEvent) && dragEvent.touches && dragEvent.touches.length);

  const xPx = (isTouch)
    ? (dragEvent as TouchEvent).touches[0].clientX
    : (dragEvent as MouseEvent).clientX;
  const yPx = (isTouch)
    ? (dragEvent as TouchEvent).touches[0].clientY
    : (dragEvent as MouseEvent).clientY;

  const dxPx = xPx - _x0; // in pixels
  const dyPx = yPx - _y0; // in pixels too

  _x0 = xPx;
  _y0 = yPx;

  // calcul des coo de dxPx, dyPx dans le viewport
  // les offsets du canvas s'annulent -> que facteur d'échelle a appliquer
  const dx = -dxPx / canvas.offsetWidth;
  const dy = -dyPx / canvas.offsetHeight;

  // Only check intersects if object is visible
  // If there is only 1 object, we don't check intersections too
  const mesh = (_scenes.length === 1) ? _scenes[0] : _scenes.find(function(scene){
    if (!scene.parent.visible) {
      return false;
    }
    // TODO: Check if a child geometry is an occlusion object. If so remove it from the intersection list
    MOUSEVECTOR.set(-(xPx / canvas.offsetWidth) * 2 + 1, -(yPx / canvas.offsetHeight) * 2 + 1, 0.5);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(MOUSEVECTOR, _camera as THREE.Camera);

    const intersects = raycaster.intersectObjects(scene.children);
    return (intersects.length > 0);
  });

  if (!mesh) {
    return;
  }

  VIEWPORTVECTOR.set(dx, dy, 1);

  DIRECTIONVECTOR.copy(VIEWPORTVECTOR);
  if (!_camera){
    throw new Error('Cannot find the THREE.js camera. Pass the scene camera to addDragEventListener().');
  }
  DIRECTIONVECTOR.unproject(_camera);
  DIRECTIONVECTOR.sub(_camera.position);
  DIRECTIONVECTOR.normalize();

  // we calculate the coefficient that will allow us to find our mesh's position
  const k = _headCenterZ / DIRECTIONVECTOR.z;

  // _dP = displacement in the scene (=world) ref :
  _dP.copy(DIRECTIONVECTOR).multiplyScalar(k);
  _dP.setZ(0); // bcoz we only want to displace in the (0xy) plane

  const _quat = new THREE.Quaternion();
  const _eul = new THREE.Euler();
  _eul.setFromQuaternion(_quat);

  // convert _dP to mesh ref to apply it directly to mesh.position :
  // _dP is a vector so apply only the rotation part (not the translation)
  _dP.applyEuler(mesh.getWorldQuaternion(_eul));

  // Boost movement to follow better the mouse/touch
  _dP.multiplyScalar(10);

  // apply _dP
  mesh.position.add(_dP);
}


function setMousePosition0(event: DragInputEvent) { // save initial position of the mouse
  const isTouch = !!(('touches' in event) && event.touches && event.touches.length);// MT217 is touch or mouse event ?

  if (isTouch && event.touches.length > 1) return; // MT217 if the user put a second finger while dragging

  _x0 = (isTouch) ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX; // MT217
  _y0 = (isTouch) ? (event as TouchEvent).touches[0].clientY : (event as MouseEvent).clientY;
}


function mouseDown(event: Event) {
  setMousePosition0(event as DragInputEvent); // MANTIS201
  _state = _states.dragging;
}


function mouseUp() {
  _state = _states.idle;
}


function addDragEventListener(
  scenes: THREE.Object3D | THREE.Object3D[],
  canvasId?: string,
  remove?: boolean,
  camera?: THREE.Camera | null
) {
  _scenes = Array.isArray(scenes) ? scenes : [scenes];
  _camera = camera || null;
  const canvas = document.getElementById((typeof(canvasId) === 'undefined') ? 'jeeFaceFilterCanvas' : canvasId) as HTMLCanvasElement | null;

  if (!canvas) {
    return;
  }

  _state = _states.idle; // MT217 : initialize your state always (even with a loading value)

  _dP = new THREE.Vector3();
  _x0 = undefined; _y0 = undefined;
  if (remove) {
    // REMOVE OUR LISTENERS
    canvas.removeEventListener('mousemove', _boundFunction, true);
    canvas.removeEventListener('touchmove', _boundFunction, true);

    // BEGINNING OF THE INTERACTION
    canvas.removeEventListener('mousedown', mouseDown);
    canvas.removeEventListener('touchstart', mouseDown);

    // END OF THE INTERACTION
    canvas.removeEventListener('mouseup', mouseUp);
    canvas.removeEventListener('touchend', mouseUp);

    // ALSO END BUT IN CASE LEAVING CANVAS OR ALERT BOX ECT...
    canvas.removeEventListener('mouseout', mouseUp);
    canvas.removeEventListener('touchcancel', mouseUp);
  } else {
    // SET OUR LISTENERS
    _boundFunction = updateMeshPosition.bind(undefined, canvas);
    canvas.addEventListener('mousemove', _boundFunction, true);
    // canvas.addEventListener('touchmove', createTouchEvent, true)
    canvas.addEventListener('touchmove', _boundFunction, true); // MT217

    // BEGINNING OF THE INTERACTION
    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('touchstart', mouseDown);

    // END OF THE INTERACTION
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('touchend', mouseUp);

    // ALSO END BUT IN CASE LEAVING CANVAS OR ALERT BOX ECT...
    canvas.addEventListener('mouseout', mouseUp);
    canvas.addEventListener('touchcancel', mouseUp);
  }
}

export default addDragEventListener;
