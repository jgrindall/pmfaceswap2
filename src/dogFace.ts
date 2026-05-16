import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import JeelizThreeHelper from './helpers/JeelizThreeHelper';
import addDragEventListener from './helpers/addDragEventListener';
import { FaceFilterBase } from './faceFilterBase';
import avatarProfiles from './config/avatars.json';

const DOG_PROFILE = avatarProfiles.avatars.dog;
const GLB_ASSET_URLS: Record<string, string> = {
  '../Duck.glb': new URL('../Duck.glb', import.meta.url).href,
  '../tut.glb': new URL('../tut.glb', import.meta.url).href
};

const SLOT_POSITIONS: Record<string, [number, number, number]> = {
  // Coordinate system for all slots/offsets:
  // - origin = head center
  // - unit = head width (1.0 means one full head width)
  // Example: 0.02 means 2% of head width.
  leftEar: [-0.42, 0.34, 0.04],
  rightEar: [0.42, 0.34, 0.04],
  nose: [0.0, 0.0, 0.22],
  mouth: [0.0, -0.18, 0.2],
  hat: [0.0, 0.56, 0.04]
};

class DogFaceFilter extends FaceFilterBase {
  private attachmentMeshes: THREE.Object3D[] = [];

  private emitExpression(label: 'smile' | 'frown' | 'neutral', smileScore: number, frownScore: number, all: number[]) {
    window.dispatchEvent(
      new CustomEvent('face-expression', {
        detail: {
          label,
          smileScore,
          frownScore,
          all
        }
      })
    );
  }

  private createStableMaterial(material: THREE.Material) {
    const cloned = material.clone();
    cloned.visible = true;
    cloned.transparent = false;
    cloned.opacity = 1;
    cloned.depthTest = false;
    cloned.depthWrite = false;
    cloned.side = THREE.DoubleSide;
    cloned.needsUpdate = true;
    return cloned;
  }

  private createStableMaterialSet(material: THREE.Material | THREE.Material[]) {
    if (Array.isArray(material)) {
      return material.map((m) => this.createStableMaterial(m));
    }
    return this.createStableMaterial(material);
  }

  private buildStaticMeshGroupFromGLB(root: THREE.Object3D) {
    const group = new THREE.Group();
    root.updateMatrixWorld(true);
    const invRoot = new THREE.Matrix4().copy(root.matrixWorld).invert();

    root.traverse((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh || !mesh.geometry) {
        return;
      }

      const staticMesh = new THREE.Mesh(
        (mesh.geometry as THREE.BufferGeometry).clone(),
        this.createStableMaterialSet(mesh.material as THREE.Material | THREE.Material[])
      );

      const relativeMatrix = new THREE.Matrix4().copy(invRoot).multiply(mesh.matrixWorld);
      staticMesh.applyMatrix4(relativeMatrix);
      staticMesh.matrixAutoUpdate = false;
      staticMesh.frustumCulled = false;
      group.add(staticMesh);
    });

    return group;
  }

  protected afterReset(): void {
    this.attachmentMeshes = [];
  }

  private fitObjectToTargetSize(obj: THREE.Object3D, targetMaxDim: number) {
    const bbox = new THREE.Box3().setFromObject(obj);
    const size = new THREE.Vector3();
    bbox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    if (Number.isFinite(maxDim) && maxDim > 0) {
      obj.scale.multiplyScalar(targetMaxDim / maxDim);
    }
  }

  private configureLoadedObject(obj: THREE.Object3D, targetMaxDim: number, x: number, y: number, z: number) {
    this.sanitizeObjectGeometries(obj);
    this.fitObjectToTargetSize(obj, targetMaxDim);
    obj.visible = true;
    obj.position.setX(x);
    obj.position.setY(y);
    obj.position.setZ(z);
    obj.renderOrder = 10000;
    obj.traverse((child: THREE.Object3D) => {
      child.visible = true;
      child.frustumCulled = false;
      child.renderOrder = 10000;
    });
  }

  private sanitizeObjectGeometries(obj: THREE.Object3D) {
    obj.traverse((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh;
      const geometry = mesh.geometry as THREE.BufferGeometry | undefined;
      const posAttr = geometry?.getAttribute('position') as THREE.BufferAttribute | undefined;
      if (!posAttr) {
        return;
      }

      const arr = posAttr.array as ArrayLike<number>;
      let changed = false;
      for (let i = 0; i < arr.length; i++) {
        const v = arr[i] as number;
        if (!Number.isFinite(v)) {
          (posAttr.array as any)[i] = 0;
          changed = true;
        }
      }

      if (changed) {
        posAttr.needsUpdate = true;
      }

      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
    });
  }

  private getAttachmentAnchorPosition(slot: string, offset: number[]) {
    // `offset` uses the same head-width units as SLOT_POSITIONS.
    const base = SLOT_POSITIONS[slot] || SLOT_POSITIONS.nose;
    return {
      x: base[0] + (offset?.[0] || 0),
      y: base[1] + (offset?.[1] || 0),
      z: base[2] + (offset?.[2] || 0)
    };
  }

  protected initThreeScene(spec: any): void {
    const threeStuffs = JeelizThreeHelper.init(spec, this.detectCallback);
    this.videoGeometry = threeStuffs.videoMesh.geometry;

    const loadingManager = new THREE.LoadingManager();
    const gltfLoader = new GLTFLoader(loadingManager);
    let loadedAttachmentCount = 0;

    DOG_PROFILE.attachments.forEach((attachment) => {
      const attachmentPath = GLB_ASSET_URLS[attachment.glb] || attachment.glb;
      gltfLoader.load(
        attachmentPath,
        (gltf) => {
          const sourceRoot = gltf.scene || gltf.scenes[0];
          if (!sourceRoot) {
            return;
          }

          const attachmentObj = this.buildStaticMeshGroupFromGLB(sourceRoot);
          const anchor = this.getAttachmentAnchorPosition(attachment.slot, attachment.offset);
          this.configureLoadedObject(attachmentObj, attachment.size, anchor.x, anchor.y, anchor.z);
          attachmentObj.rotation.set(attachment.rotation[0], attachment.rotation[1], attachment.rotation[2]);

          if (DOG_PROFILE.debug.showAnchorCube) {
            const probeMesh = new THREE.Mesh(
              new THREE.BoxGeometry(
                DOG_PROFILE.debug.anchorCube.size,
                DOG_PROFILE.debug.anchorCube.size,
                DOG_PROFILE.debug.anchorCube.size
              ),
              new THREE.MeshBasicMaterial({
                color: DOG_PROFILE.debug.anchorCube.color,
                transparent: true,
                opacity: DOG_PROFILE.debug.anchorCube.opacity
              })
            );
            probeMesh.position.set(anchor.x, anchor.y, anchor.z);
            probeMesh.frustumCulled = false;
            probeMesh.add(attachmentObj);
            this.modelObj3D.add(probeMesh);
          } else {
            this.modelObj3D.add(attachmentObj);
          }

          this.attachmentMeshes.push(attachmentObj);
          loadedAttachmentCount += 1;
        },
        undefined,
        (err) => {
          console.error(`Failed to load attachment ${attachment.id}:`, err);
        }
      );
    });

    loadingManager.onLoad = () => {
      if (loadedAttachmentCount === 0) {
        const fallback = new THREE.Mesh(
          new THREE.BoxGeometry(0.35, 0.35, 0.35),
          new THREE.MeshNormalMaterial({ wireframe: true })
        );
        fallback.frustumCulled = false;
        this.modelObj3D.add(fallback);
      }

      addDragEventListener(this.modelObj3D, undefined, false, this.threeCamera);
      threeStuffs.faceObject.add(this.modelObj3D);
      this.isLoaded = true;
    };

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    threeStuffs.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(100, 1000, 1000);
    threeStuffs.scene.add(dirLight);

    this.threeCamera = JeelizThreeHelper.createCamera();
    threeStuffs.scene.add(this.frameObj3D);
  }

  protected onDetectedTrack(detectState: any): void {
    const expressions = Array.isArray(detectState?.expressions)
      ? detectState.expressions
      : detectState?.expressions
        ? Array.from(detectState.expressions as ArrayLike<number>)
        : [];

    if (!expressions.length) {
      this.emitExpression('neutral', 0, 0, []);
      return;
    }

    const smileScore = Number(expressions[0] ?? 0);
    const frownScore = Number(expressions[1] ?? 0);

    let label: 'smile' | 'frown' | 'neutral' = 'neutral';
    if (smileScore > 0.55 && smileScore > frownScore + 0.1) {
      label = 'smile';
    } else if (frownScore > 0.45 && frownScore > smileScore + 0.05) {
      label = 'frown';
    }

    this.emitExpression(label, smileScore, frownScore, expressions.map((value) => Number(value)));
  }
}

const dogFaceFilter = new DogFaceFilter();

export function initDogFace(canvasId = 'jeeFaceFilterCanvas') {
  dogFaceFilter.init(canvasId);
}
