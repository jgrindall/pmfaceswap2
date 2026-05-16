<template>
  <main class="page">
    <h1 class="title">Mashcams v2</h1>
    <div class="canvasContainer">
      <canvas id="jeeFaceFilterCanvas" width="600" height="600"></canvas>
      <div id="filter"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { initDogFace } from './dogFace';

onMounted(() => {
  console.log('Initializing dog face filter...');
  initDogFace('jeeFaceFilterCanvas');
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
}

#jeeFaceFilterCanvas {
  z-index: 0;
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
</style>
