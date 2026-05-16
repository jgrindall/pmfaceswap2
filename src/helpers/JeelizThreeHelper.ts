import * as THREE from 'three';
import JEELIZFACEFILTER from '../lib/jeelizFaceFilter';

type DetectState = {
  detected: number;
  rx: number;
  ry: number;
  rz: number;
  s: number;
  x: number;
  y: number;
};

type HelperSettings = {
  rotationOffsetX: number;
  pivotOffsetYZ: [number, number];
  detectionThreshold: number;
  detectionHysteresis: number;
  cameraMinVideoDimFov: number;
};

type HelperInitSpec = {
  maxFacesDetected: number;
  videoTexture: WebGLTexture;
  videoTransformMat2: Float32Array;
  GL: WebGLRenderingContext;
  canvasElement: HTMLCanvasElement;
  videoElement: HTMLVideoElement;
  alpha?: boolean;
};

type InitResult = {
  videoMesh: THREE.Mesh;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  faceObject: THREE.Object3D;
};

class JeelizThreeHelperClass {
  private settings: HelperSettings = {
    rotationOffsetX: 0.0,
    pivotOffsetYZ: [0.2, 0.6],
    detectionThreshold: 0.6,
    detectionHysteresis: 0.08,
    cameraMinVideoDimFov: 35
  };

  private threeRenderer: THREE.WebGLRenderer | null = null;
  private threeScene: THREE.Scene | null = null;
  private threeVideoMesh: THREE.Mesh | null = null;
  private threeVideoTexture: THREE.Texture | null = null;
  private threeTranslation: THREE.Vector3 | null = null;

  private detectCallback: ((isDetected: boolean) => void) | null = null;
  private isVideoTextureReady = false;
  private faceFilterCanvas: HTMLCanvasElement | null = null;
  private videoElement: HTMLVideoElement | null = null;
  private isDetected = false;
  private scaleW = 1;
  private canvasAspectRatio = -1;

  private threeCompositeObjects: THREE.Object3D[] = [];

  private glVideoTexture: WebGLTexture | null = null;

  private videoTransformMat2: Float32Array | null = null;
  private videoBackgroundElement: HTMLVideoElement | null = null;
  private sanitizedGeometries = new WeakSet<THREE.BufferGeometry>();

  private ensureVideoBackgroundLayer() {
    if (!this.faceFilterCanvas || !this.videoElement) {
      return;
    }

    const canvas = this.faceFilterCanvas;
    const parent = canvas.parentElement;
    if (!parent) {
      return;
    }

    const layerId = `${canvas.id || 'jeeFaceFilterCanvas'}__video_bg`;
    const previous = parent.querySelector(`#${layerId}`);
    if (previous) {
      previous.remove();
    }

    const bgVideo = this.videoElement.cloneNode(true) as HTMLVideoElement;
    bgVideo.id = layerId;
    bgVideo.autoplay = true;
    bgVideo.muted = true;
    bgVideo.playsInline = true;
    bgVideo.srcObject = this.videoElement.srcObject;
    bgVideo.style.position = 'absolute';
    bgVideo.style.top = '0';
    bgVideo.style.left = '50%';
    bgVideo.style.transform = 'translateX(-50%) rotateY(180deg)';
    bgVideo.style.width = '100%';
    bgVideo.style.height = '100%';
    bgVideo.style.objectFit = 'cover';
    bgVideo.style.pointerEvents = 'none';
    bgVideo.style.zIndex = '1';

    if (!parent.style.position) {
      parent.style.position = 'relative';
    }

    canvas.style.position = 'relative';
    canvas.style.zIndex = '3';
    canvas.style.background = 'transparent';

    parent.insertBefore(bgVideo, canvas);
    this.videoBackgroundElement = bgVideo;
    bgVideo.play().catch(() => {
      // Ignore autoplay blocking; browser may require prior user gesture.
    });
  }

  private updateVideoFaceMask(detectStates: DetectState[]) {
    if (!this.videoBackgroundElement) {
      return;
    }

    const ds = detectStates[0];
    if (!ds || ds.detected < this.settings.detectionThreshold - this.settings.detectionHysteresis) {
      this.videoBackgroundElement.style.visibility = 'hidden';
      this.videoBackgroundElement.style.maskImage = 'none';
      this.videoBackgroundElement.style.setProperty('-webkit-mask-image', 'none');
      return;
    }

    this.videoBackgroundElement.style.visibility = 'visible';

    const xNorm = THREE.MathUtils.clamp(ds.x * this.scaleW, -1, 1);
    const yNorm = THREE.MathUtils.clamp(ds.y * this.scaleW, -1, 1);
    const centerX = 50 + xNorm * 50;
    const centerY = 50 - yNorm * 50 - 2;

    const faceSpan = THREE.MathUtils.clamp(ds.s * this.scaleW * 100, 12, 80);
    const radiusX = THREE.MathUtils.clamp(faceSpan * 0.98, 16, 60);
    const radiusY = THREE.MathUtils.clamp(faceSpan * 1.2, 20, 70);

    const mask = `radial-gradient(ellipse ${radiusX}% ${radiusY}% at ${centerX}% ${centerY}%, rgba(0, 0, 0, 1) 82%, rgba(0, 0, 0, 0) 100%)`;
    this.videoBackgroundElement.style.maskImage = mask;
    this.videoBackgroundElement.style.setProperty('-webkit-mask-image', mask);
    this.videoBackgroundElement.style.maskRepeat = 'no-repeat';
    this.videoBackgroundElement.style.setProperty('-webkit-mask-repeat', 'no-repeat');
  }

  private destroy() {
    this.isVideoTextureReady = false;
    this.sanitizedGeometries = new WeakSet<THREE.BufferGeometry>();
    this.threeCompositeObjects.splice(0);
    if (this.threeVideoTexture) {
      this.threeVideoTexture.dispose();
      this.threeVideoTexture = null;
    }
  }

  private hasInvalidPositionValues(
    position: THREE.BufferAttribute | THREE.InterleavedBufferAttribute
  ) {
    for (let i = 0; i < position.count; i++) {
      if (!Number.isFinite(position.getX(i)) || !Number.isFinite(position.getY(i)) || !Number.isFinite(position.getZ(i))) {
        return true;
      }
    }
    return false;
  }

  private sanitizeGeometryPositions(geometry: THREE.BufferGeometry) {
    const position = geometry.getAttribute('position') as THREE.BufferAttribute | THREE.InterleavedBufferAttribute | undefined;
    if (!position) {
      return;
    }

    let changed = false;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z = position.getZ(i);
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
        position.setXYZ(i, Number.isFinite(x) ? x : 0, Number.isFinite(y) ? y : 0, Number.isFinite(z) ? z : 0);
        changed = true;
      }
    }

    if (changed) {
      position.needsUpdate = true;
    }

    if (this.hasInvalidPositionValues(position)) {
      geometry.boundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1);
      return;
    }

    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
  }

  private sanitizeSceneGeometries() {
    if (!this.threeScene) {
      return;
    }

    this.threeScene.traverse((obj: THREE.Object3D) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh || !mesh.geometry) {
        return;
      }

      const geometry = mesh.geometry as THREE.BufferGeometry;
      if (this.sanitizedGeometries.has(geometry)) {
        return;
      }

      this.sanitizeGeometryPositions(geometry);
      this.sanitizedGeometries.add(geometry);
    });
  }

  private createThreeCompositeObjects() {
    if (!this.threeScene) {
      return;
    }

    const threeCompositeObject = new THREE.Object3D();
    threeCompositeObject.frustumCulled = false;
    threeCompositeObject.visible = false;

    this.threeCompositeObjects.push(threeCompositeObject);
    this.threeScene.add(threeCompositeObject);
  }

  private createVideoScreen() {
    const videoScreenVertexShaderSource = `attribute vec2 position;
      uniform mat2 videoTransformMat2;
      varying vec2 vUV;
      void main(void){
        gl_Position = vec4(position, 0., 1.);
        vUV = 0.5 + videoTransformMat2 * position;
      }`;

    const videoScreenFragmentShaderSource = `precision lowp float;
      uniform sampler2D samplerVideo;
      varying vec2 vUV;
      void main(void){
        gl_FragColor = texture2D(samplerVideo, vUV);
      }`;

    if (!this.threeScene) {
      return;
    }

    if (this.videoElement) {
      const videoTexture = new THREE.VideoTexture(this.videoElement);
      videoTexture.magFilter = THREE.LinearFilter;
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.generateMipmaps = false;
      this.threeVideoTexture = videoTexture;
      this.isVideoTextureReady = true;
    } else {
      this.threeVideoTexture = new THREE.DataTexture(new Uint8Array([255, 0, 0]), 1, 1, THREE.RGBFormat);
      this.threeVideoTexture.needsUpdate = true;
    }

    const videoMaterial = new THREE.RawShaderMaterial({
      depthWrite: false,
      depthTest: false,
      vertexShader: videoScreenVertexShaderSource,
      fragmentShader: videoScreenFragmentShaderSource,
      uniforms: {
        samplerVideo: { value: this.threeVideoTexture },
        videoTransformMat2: {
          value: this.videoTransformMat2
        }
      }
    });

    const videoGeometry = new THREE.BufferGeometry();
    const videoScreenCorners = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
    const setVideoGeomAttribute = ((videoGeometry as any).setAttribute || (videoGeometry as any).addAttribute).bind(videoGeometry);
    setVideoGeomAttribute('position', new THREE.BufferAttribute(videoScreenCorners, 2));
    videoGeometry.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 0, 2, 3]), 1));
    this.threeVideoMesh = new THREE.Mesh(videoGeometry, videoMaterial);
    if (!this.isVideoTextureReady) {
      this.applyVideoTexture(this.threeVideoMesh);
    }
    this.threeVideoMesh.renderOrder = -1000;
    this.threeVideoMesh.frustumCulled = false;
    // JEELIZ already draws the camera frame on the shared canvas.
    // Keep this mesh out of the scene to avoid black/invalid full-screen overlays.
    this.threeVideoMesh.visible = false;
  }

  private detectInternal(detectStates: DetectState[]) {
    this.threeCompositeObjects.forEach((threeCompositeObject, i) => {
      this.isDetected = threeCompositeObject.visible;
      const ds = detectStates[i];
      if (!ds) {
        return;
      }

      if (this.isDetected && ds.detected < this.settings.detectionThreshold - this.settings.detectionHysteresis) {
        // Keep visibility sticky to avoid flicker from rapid confidence drops.
        // We still report the confidence state through callbacks elsewhere.
        return;
      } else if (!this.isDetected && ds.detected > this.settings.detectionThreshold + this.settings.detectionHysteresis) {
        if (this.detectCallback) {
          this.detectCallback(true);
        }
        threeCompositeObject.visible = true;
      }
    });
  }

  private updatePoses(detectStates: DetectState[], threeCamera: THREE.PerspectiveCamera) {
    const halfTanFOVX = Math.tan((threeCamera.aspect * threeCamera.fov * Math.PI) / 360);

    this.threeCompositeObjects.forEach((threeCompositeObject, i) => {
      if (!threeCompositeObject.visible) {
        return;
      }

      const detectState = detectStates[i];
      if (!detectState || this.canvasAspectRatio <= 0 || !this.threeTranslation) {
        return;
      }

      const cz = Math.cos(detectState.rz);
      const sz = Math.sin(detectState.rz);
      const W = detectState.s * this.scaleW;
      const dFront = 1 / (2 * W * halfTanFOVX);
      const D = dFront + 0.5;
      const xv = detectState.x * this.scaleW;
      const yv = detectState.y * this.scaleW;

      const z = -D;
      const x = xv * D * halfTanFOVX;
      const y = (yv * D * halfTanFOVX) / this.canvasAspectRatio;

      threeCompositeObject.position.set(-sz * this.settings.pivotOffsetYZ[0], -cz * this.settings.pivotOffsetYZ[0], -this.settings.pivotOffsetYZ[1]);

      threeCompositeObject.rotation.set(
        detectState.rx + this.settings.rotationOffsetX,
        detectState.ry,
        detectState.rz,
        'ZYX'
      );
      threeCompositeObject.position.applyEuler(threeCompositeObject.rotation);

      this.threeTranslation.set(x, y + this.settings.pivotOffsetYZ[0], z + this.settings.pivotOffsetYZ[1]);
      threeCompositeObject.position.add(this.threeTranslation);
    });
  }

  public init(spec: HelperInitSpec, detectCallback?: (isDetected: boolean) => void): InitResult {
    this.destroy();

    this.glVideoTexture = spec.videoTexture;
    this.videoTransformMat2 = spec.videoTransformMat2;
    this.faceFilterCanvas = spec.canvasElement;
    this.videoElement = spec.videoElement;
    this.ensureVideoBackgroundLayer();

    if (detectCallback) {
      this.detectCallback = detectCallback;
    }

    this.threeRenderer = new THREE.WebGLRenderer({
      context: spec.GL,
      canvas: this.faceFilterCanvas || undefined,
      alpha: !!spec.alpha,
      preserveDrawingBuffer: true
    });
    this.threeRenderer.autoClear = false;

    this.threeScene = new THREE.Scene();
    this.threeTranslation = new THREE.Vector3();

    this.createThreeCompositeObjects();
    this.createVideoScreen();

    window.addEventListener(
      'orientationchange',
      () => {
        setTimeout(JEELIZFACEFILTER.resize, 1000);
      },
      false
    );

    const result: InitResult = {
      videoMesh: this.threeVideoMesh as THREE.Mesh,
      renderer: this.threeRenderer,
      scene: this.threeScene,
      faceObject: this.threeCompositeObjects[0]
    };

    return result;
  }

  public detect(detectState: DetectState | DetectState[]) {
    const detectStates = [detectState as DetectState];
    this.detectInternal(detectStates);
  }

  public getIsDetected() {
    return this.isDetected;
  }

  public render(detectState: DetectState | DetectState[], threeCamera: THREE.PerspectiveCamera) {
    const detectStates = [detectState as DetectState];

    this.detectInternal(detectStates);
    this.updateVideoFaceMask(detectStates);
    this.updatePoses(detectStates, threeCamera);
    this.sanitizeSceneGeometries();

    if (this.threeRenderer) {
      this.threeRenderer.state.reset();
      // Keep camera frame drawn by JEELIZ and only refresh depth for 3D overlay.
      this.threeRenderer.clearDepth();
    }

    if (this.threeRenderer && this.threeScene) {
      this.threeRenderer.render(this.threeScene, threeCamera);
    }
  }

  public sortFaces(bufferGeometry: THREE.BufferGeometry, axis: 'X' | 'Y' | 'Z', isInv: boolean) {
    const axisOffset = { X: 0, Y: 1, Z: 2 }[axis.toUpperCase() as 'X' | 'Y' | 'Z'];
    const sortWay = isInv ? -1 : 1;

    if (!bufferGeometry.index) {
      return;
    }

    const nFaces = bufferGeometry.index.count / 3;
    const faces: [number, number, number][] = new Array(nFaces);
    for (let i = 0; i < nFaces; ++i) {
      faces[i] = [
        bufferGeometry.index.array[3 * i] as number,
        bufferGeometry.index.array[3 * i + 1] as number,
        bufferGeometry.index.array[3 * i + 2] as number
      ];
    }

    const aPos = bufferGeometry.attributes.position.array as ArrayLike<number>;
    const centroids = faces.map((face) => {
      return [
        (aPos[3 * face[0]] + aPos[3 * face[1]] + aPos[3 * face[2]]) / 3,
        (aPos[3 * face[0] + 1] + aPos[3 * face[1] + 1] + aPos[3 * face[2] + 1]) / 3,
        (aPos[3 * face[0] + 2] + aPos[3 * face[1] + 2] + aPos[3 * face[2] + 2]) / 3,
        face
      ] as [number, number, number, [number, number, number]];
    });

    centroids.sort((ca, cb) => ((ca[axisOffset] as number) - (cb[axisOffset] as number)) * sortWay);

    centroids.forEach((centroid, centroidIndex) => {
      const face = centroid[3];
      bufferGeometry.index!.array[3 * centroidIndex] = face[0];
      bufferGeometry.index!.array[3 * centroidIndex + 1] = face[1];
      bufferGeometry.index!.array[3 * centroidIndex + 2] = face[2];
    });
  }

  public getThreeVideoTexture() {
    return this.threeVideoTexture;
  }

  public applyVideoTexture(threeMesh: THREE.Mesh) {
    if (this.isVideoTextureReady || !this.threeRenderer || !this.threeVideoTexture || !this.glVideoTexture) {
      return;
    }

    threeMesh.onAfterRender = () => {
      try {
        (this.threeRenderer!.properties as any).update(this.threeVideoTexture, '__webglTexture', this.glVideoTexture);
        this.threeVideoTexture!.magFilter = THREE.LinearFilter;
        this.threeVideoTexture!.minFilter = THREE.LinearFilter;
        this.isVideoTextureReady = true;
      } catch (e) {
        console.log('WARNING in JeelizThreeHelper: the glVideoTexture is not fully initialized');
      }
      delete threeMesh.onAfterRender;
    };
  }

  public createThreejsOccluder(occluderURL: string, callback?: (mesh: THREE.Mesh) => void) {
    const occluderMesh = new THREE.Mesh();
    new THREE.BufferGeometryLoader().load(occluderURL, (occluderGeometry: THREE.BufferGeometry) => {
      const mat = new THREE.ShaderMaterial({
        vertexShader: THREE.ShaderLib.basic.vertexShader,
        fragmentShader: 'precision lowp float;\n void main(void){\n gl_FragColor=vec4(1.,0.,0.,1.);\n }',
        uniforms: THREE.ShaderLib.basic.uniforms,
        colorWrite: false
      });

      occluderMesh.renderOrder = -1;
      occluderMesh.material = mat;
      occluderMesh.geometry = occluderGeometry;
      if (callback) {
        callback(occluderMesh);
      }
    });
    return occluderMesh;
  }

  public setPivotOffsetYZ(pivotOffset: [number, number]) {
    this.settings.pivotOffsetYZ = pivotOffset;
  }

  public createCamera(zNear?: number, zFar?: number) {
    const threeCamera = new THREE.PerspectiveCamera(1, 1, zNear || 0.1, zFar || 100);
    this.updateCamera(threeCamera);
    return threeCamera;
  }

  public updateCamera(threeCamera: THREE.PerspectiveCamera) {
    if (!this.threeRenderer || !this.videoElement) {
      return;
    }

    const canvasElement = this.threeRenderer.domElement;
    const cvw = canvasElement.width;
    const cvh = canvasElement.height;
    this.canvasAspectRatio = cvw / cvh;

    const vw = this.videoElement.videoWidth;
    const vh = this.videoElement.videoHeight;
    const videoAspectRatio = vw / vh;
    const fovFactor = vh > vw ? 1.0 / videoAspectRatio : 1.0;
    const fov = this.settings.cameraMinVideoDimFov * fovFactor;
    console.log('INFO in JeelizThreeHelper - updateCamera(): Estimated vertical video FoV is', fov);

    let scale = 1.0;
    if (this.canvasAspectRatio > videoAspectRatio) {
      scale = cvw / vw;
    } else {
      scale = cvh / vh;
    }
    const cvws = vw * scale;
    const cvhs = vh * scale;
    const offsetX = (cvws - cvw) / 2.0;
    const offsetY = (cvhs - cvh) / 2.0;
    this.scaleW = cvw / cvws;

    threeCamera.aspect = this.canvasAspectRatio;
    threeCamera.fov = fov;
    console.log('INFO in JeelizThreeHelper.updateCamera(): camera vertical estimated FoV is', fov, 'deg');
    threeCamera.setViewOffset(cvws, cvhs, offsetX, offsetY, cvw, cvh);
    threeCamera.updateProjectionMatrix();

    this.threeRenderer.setSize(cvw, cvh, false);
    this.threeRenderer.setViewport(0, 0, cvw, cvh);
  }

  public resize(w: number, h: number, threeCamera?: THREE.PerspectiveCamera) {
    if (!this.threeRenderer) {
      return;
    }

    this.threeRenderer.domElement.width = w;
    this.threeRenderer.domElement.height = h;
    JEELIZFACEFILTER.resize();
    if (threeCamera) {
      this.updateCamera(threeCamera);
    }
  }
}

const JeelizThreeHelper = new JeelizThreeHelperClass();

export default JeelizThreeHelper;
