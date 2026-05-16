import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import JeelizResizer from './helpers/JeelizResizer.js';
import JeelizThreeHelper from './helpers/JeelizThreeHelper';
import JEELIZFACEFILTER from './lib/jeelizFaceFilter';

export abstract class FaceFilterBase {
  protected threeCamera: THREE.PerspectiveCamera | null = null;
  protected isDetected = false;
  protected modelObj3D = new THREE.Object3D();
  protected frameObj3D = new THREE.Object3D();
  protected isOverThreshold = false;
  protected isUnderThreshold = true;
  protected isLoaded = false;
  protected mixer: THREE.AnimationMixer | null = null;
  protected action: THREE.AnimationAction | null = null;
  protected isAnimating = false;
  protected isOpaque = false;
  protected isTongueOut = false;
  protected isAnimationOver = false;
  protected videoGeometry: THREE.BufferGeometry | null = null;

  protected detectCallback = (isDetected: boolean) => {
    if (isDetected) {
      console.log('INFO in detect_callback(): DETECTED');
    } else {
      console.log('INFO in detect_callback(): LOST');
    }
  };

  protected abstract initThreeScene(spec: any): void;
  protected abstract onDetectedTrack(detectState: any): void;
  protected afterReset(): void {
    // Subclasses can override for custom state resets.
  }

  private initFaceFilter(canvasId: string, videoSettings: unknown) {
    JEELIZFACEFILTER.init({
      canvasId,
      NNCPath: '/neuralNets/',
      videoSettings,
      callbackReady: (errCode: unknown, spec: any) => {
        if (errCode) {
          console.log('AN ERROR HAPPENS. SORRY BRO :( . ERR =', errCode);
          return;
        }

        console.log('INFO: JEELIZFACEFILTER IS READY');
        this.initThreeScene(spec);
      },

      callbackTrack: (detectState: any) => {
        this.isDetected = JeelizThreeHelper.getIsDetected();

        if (this.isDetected) {
          this.onDetectedTrack(detectState);
        }

        TWEEN.update();

        if (this.isOpaque && this.mixer) {
          this.mixer.update(0.16);
        }

        if (this.threeCamera) {
          JeelizThreeHelper.render(detectState, this.threeCamera);
        }
      }
    });
  }

  protected resetState() {
    this.threeCamera = null;
    this.isDetected = false;
    this.modelObj3D = new THREE.Object3D();
    this.frameObj3D = new THREE.Object3D();
    this.isOverThreshold = false;
    this.isUnderThreshold = true;
    this.isLoaded = false;
    this.mixer = null;
    this.action = null;
    this.isAnimating = false;
    this.isOpaque = false;
    this.isTongueOut = false;
    this.isAnimationOver = false;
    this.videoGeometry = null;
    this.afterReset();
  }

  public init(canvasId = 'jeeFaceFilterCanvas') {
    this.resetState();

    JeelizResizer.size_canvas({
      canvasId,
      callback: (_isError, bestVideoSettings) => {
        this.initFaceFilter(canvasId, bestVideoSettings);
      }
    });
  }
}
