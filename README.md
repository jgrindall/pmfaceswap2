# Dog Face Demo (Vue 3 + Vite)

This repo now runs the Jeeliz `dog_face` demo through a Vue 3 + Vite app (no HTML script-tag dependency chain for Three/Tween/helpers).

## Run locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`) and allow camera access.

## Build

```bash
npm run build
npm run preview
```

## Important paths

- `src/App.vue` Vue UI container with the camera canvas
- `src/dogFace.ts` Module-based dog filter bootstrap and tracking loop
- `src/lib/jeelizFaceFilter.runtime.js` Jeeliz runtime loaded by the TypeScript wrapper
- `src/helpers/*` Jeeliz helper scripts imported as modules
- `tut.glb` Temporary GLB asset currently used for ears/nose/tongue
- `neuralNets/NN_DEFAULT.json` Face tracking neural net
