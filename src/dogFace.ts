import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import TWEEN from '@tweenjs/tween.js';
import JeelizThreeHelper from './helpers/JeelizThreeHelper';
import addDragEventListener from './helpers/addDragEventListener';
import { FaceFilterBase } from './faceFilterBase';

const TUT_GLB_PATH = new URL('../tut.glb', import.meta.url).href;

class DogFaceFilter extends FaceFilterBase {
  private tongueMesh: THREE.Object3D | null = null;
  private noseMesh: THREE.Object3D | null = null;
  private earMesh: THREE.Object3D | null = null;

  protected afterReset(): void {
    this.tongueMesh = null;
    this.noseMesh = null;
    this.earMesh = null;
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

  private forceOpaqueMaterials(obj: THREE.Object3D) {
    obj.traverse((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh;
      const material = mesh.material;
      if (!material) {
        return;
      }
      if (Array.isArray(material)) {
        material.forEach((m) => {
          m.transparent = false;
          m.opacity = 1;
          m.needsUpdate = true;
        });
      } else {
        material.transparent = false;
        material.opacity = 1;
        material.needsUpdate = true;
      }
    });
  }

  private configureLoadedObject(obj: THREE.Object3D, targetMaxDim: number, y: number, z: number) {
    this.sanitizeObjectGeometries(obj);
    this.fitObjectToTargetSize(obj, targetMaxDim);
    obj.position.setY(y);
    obj.position.setZ(z);
    obj.renderOrder = 10000;
    obj.traverse((child: THREE.Object3D) => {
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

  private setObjectOpacity(obj: THREE.Object3D, opacity: number) {
    obj.traverse((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh;
      const material = mesh.material;
      if (!material) {
        return;
      }
      if (Array.isArray(material)) {
        material.forEach((m) => {
          m.transparent = true;
          m.opacity = opacity;
        });
      } else {
        material.transparent = true;
        material.opacity = opacity;
      }
    });
  }

  protected initThreeScene(spec: any): void {
    const threeStuffs = JeelizThreeHelper.init(spec, this.detectCallback);
    this.videoGeometry = threeStuffs.videoMesh.geometry;

    const debugMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0x00ff88 })
    );
    debugMarker.position.set(0, 0, 0.2);
    debugMarker.frustumCulled = false;
    this.modelObj3D.add(debugMarker);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      TUT_GLB_PATH,
      (gltf) => {
        const sourceRoot = gltf.scene || gltf.scenes[0];
        if (!sourceRoot) {
          console.error('GLB loaded but scene graph is empty:', TUT_GLB_PATH);
          return;
        }

        this.earMesh = sourceRoot.clone(true);
        this.configureLoadedObject(this.earMesh, 0.45, -0.3, 0);
        this.forceOpaqueMaterials(this.earMesh);

        this.noseMesh = sourceRoot.clone(true);
        this.configureLoadedObject(this.noseMesh, 0.28, -0.05, 0.15);
        this.forceOpaqueMaterials(this.noseMesh);

        this.tongueMesh = sourceRoot.clone(true);
        this.configureLoadedObject(this.tongueMesh, 0.35, -0.28, 0);
        this.tongueMesh.visible = false;
        this.setObjectOpacity(this.tongueMesh, 0);

        if (!this.mixer && gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(this.tongueMesh);
          this.action = this.mixer.clipAction(gltf.animations[0]);
          this.action.setLoop(THREE.LoopOnce, 1);
          this.action.clampWhenFinished = true;
          this.action.play();
          this.action.paused = true;
        }

        this.modelObj3D.add(this.earMesh);
        this.modelObj3D.add(this.noseMesh);
        this.modelObj3D.add(this.tongueMesh);

        addDragEventListener(this.modelObj3D, undefined, false, this.threeCamera);
        threeStuffs.faceObject.add(this.modelObj3D);
        this.isLoaded = true;
      },
      undefined,
      (err) => {
        console.error('Failed to load tut.glb:', err);
        const fallback = new THREE.Mesh(
          new THREE.BoxGeometry(0.35, 0.35, 0.35),
          new THREE.MeshNormalMaterial({ wireframe: true })
        );
        fallback.frustumCulled = false;
        this.modelObj3D.add(fallback);
        addDragEventListener(this.modelObj3D, undefined, false, this.threeCamera);
        threeStuffs.faceObject.add(this.modelObj3D);
        this.isLoaded = true;
      }
    );

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    threeStuffs.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(100, 1000, 1000);
    threeStuffs.scene.add(dirLight);

    this.threeCamera = JeelizThreeHelper.createCamera();
    threeStuffs.scene.add(this.frameObj3D);
  }

  private animateTongue(mesh: THREE.Object3D, isReverse = false) {
    if (!this.action) {
      return;
    }

    mesh.visible = true;

    if (isReverse) {
      this.action.timeScale = -1;
      this.action.paused = false;

      setTimeout(() => {
        if (!this.action) {
          return;
        }

        this.action.paused = true;
        this.isOpaque = false;
        this.isTongueOut = false;
        this.isAnimating = false;
        this.isAnimationOver = true;

        const tweenState = { opacity: 1 };
        new TWEEN.Tween(tweenState)
          .to({ opacity: 0 }, 150)
          .onUpdate(() => this.setObjectOpacity(mesh, tweenState.opacity))
          .start();
      }, 150);
    } else {
      this.action.timeScale = 1;
      this.action.reset();
      this.action.paused = false;

      const tweenState = { opacity: 0 };
      new TWEEN.Tween(tweenState)
        .to({ opacity: 1 }, 100)
        .onUpdate(() => this.setObjectOpacity(mesh, tweenState.opacity))
        .onComplete(() => {
          this.isOpaque = true;
          setTimeout(() => {
            if (!this.action) {
              return;
            }
            this.action.paused = true;
            this.isAnimating = false;
            this.isTongueOut = true;
            this.isAnimationOver = true;
          }, 150);
        })
        .start();
    }
  }

  protected onDetectedTrack(detectState: any): void {
    if (detectState.expressions[0] >= 0.85 && !this.isOverThreshold) {
      this.isOverThreshold = true;
      this.isUnderThreshold = false;
      this.isAnimationOver = false;
    }

    if (detectState.expressions[0] <= 0.1 && !this.isUnderThreshold) {
      this.isOverThreshold = false;
      this.isUnderThreshold = true;
      this.isAnimationOver = false;
    }

    if (this.isLoaded && this.isOverThreshold && !this.isAnimating && !this.isAnimationOver && this.tongueMesh) {
      this.isAnimating = true;
      this.animateTongue(this.tongueMesh, this.isTongueOut);
    }
  }
}

const dogFaceFilter = new DogFaceFilter();

export function initDogFace(canvasId = 'jeeFaceFilterCanvas') {
  dogFaceFilter.init(canvasId);
}
