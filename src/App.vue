<template>
  <main class="page">
    <h1 class="title">Mashcams v2</h1>
    <p class="expressionBadge">
      Expression: {{ expressionLabel }}
      (smile {{ smileScore.toFixed(2) }}, frown {{ frownScore.toFixed(2) }})
    </p>
    <div class="canvasContainer" :style="containerStyle">
      <div v-if="showBackground" class="sceneBackground" :style="backgroundStyle"></div>
      <img v-if="showBody" class="bodyOverlay" :src="bodyImage" :style="bodyStyle" alt="" />
      <canvas id="jeeFaceFilterCanvas" width="600" height="600"></canvas>
      <div id="filter"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { initDogFace } from './dogFace';
import avatarProfiles from './config/avatars.json';

const dogProfile = avatarProfiles.avatars.dog;
const showBackground = dogProfile.background.mode === 'image' && !!dogProfile.background.image;
const showBody = dogProfile.body.mode === 'image' && !!dogProfile.body.image;
const bodyImage = dogProfile.body.image;
const cameraOpacity = dogProfile.camera?.opacity ?? 1;

const containerStyle = {
  '--camera-opacity': `${cameraOpacity}`
} as Record<string, string>;

const backgroundStyle = {
  backgroundImage: `url(${dogProfile.background.image})`
};

const bodyStyle = {
  left: `${dogProfile.body.xPercent}%`,
  bottom: `${dogProfile.body.bottomPercent}%`,
  width: `${dogProfile.body.widthPercent}%`,
  opacity: `${dogProfile.body.opacity}`
};

const expressionLabel = ref('neutral');
const smileScore = ref(0);
const frownScore = ref(0);

const onExpression = (evt: Event) => {
  const customEvt = evt as CustomEvent<{
    label: string;
    smileScore: number;
    frownScore: number;
  }>;

  expressionLabel.value = customEvt.detail?.label || 'neutral';
  smileScore.value = Number(customEvt.detail?.smileScore ?? 0);
  frownScore.value = Number(customEvt.detail?.frownScore ?? 0);
};

onMounted(() => {
  console.log('Initializing dog face filter...');
  window.addEventListener('face-expression', onExpression);
  initDogFace('jeeFaceFilterCanvas');
});

onUnmounted(() => {
  window.removeEventListener('face-expression', onExpression);
});
</script>

<style>
html, body, #app{
  background: #222;
}
</style>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.5rem;
  margin: 0;
  padding: 1rem;
  background: #222;
}

.title {
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-family: Georgia, serif;
}

.expressionBadge {
  margin: 0;
  padding: 0.35rem 0.65rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 999px;
  font-size: 0.85rem;
  color: #222;
}

.subtitle {
  margin: 0 0 0.5rem;
  color: #5f4a36;
  font-size: 0.95rem;
}

.canvasContainer {
  position: relative;
  margin: 0 auto;
  text-align: center;
  width: min(92vw, 600px);
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.sceneBackground {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.bodyOverlay {
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
  pointer-events: none;
}

#jeeFaceFilterCanvas {
  z-index: 3;
  max-height: 100%;
  width: 100%;
  transform: translate(0, 0) rotateY(180deg);
  position: static;
}

#filter {
  position: absolute;
  z-index: 0;
  max-height: 100%;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  opacity: 0.15;
}

#filter canvas {
  width: 100%;
  height: 100%;
}

:deep(#jeeFaceFilterCanvas__video_bg) {
  opacity: var(--camera-opacity, 1);
}
</style>
