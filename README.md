# mac-gsap — Apple MacBook Landing Page

Interactive React + Vite landing page showcasing 3D MacBook models with GSAP-powered animations and scroll interactions.

---

## Overview

This project is a visually rich product-landing prototype built with React, Vite, Three.js (react-three/fiber), and GSAP. It features interactive 3D MacBook models (14" and 16") that support color and size switching, video-textured screens, and scroll-synced animations.

## Tech stack

- React (v19)
- Vite
- three / @react-three/fiber / @react-three/drei
- GSAP (+ @gsap/react)
- TailwindCSS
- Zustand (state)
- clsx

## Key features

- Interactive 3D product viewer (14" & 16")
- Color and size controls
- GSAP-driven animations and scroll triggers
- Video texture support for the laptop screen
- Responsive layout powered by TailwindCSS
- Preloaded feature videos for smooth playback

## Quick start

Prerequisites: Node 18+ (recommended), npm

1. Install dependencies

   npm install

2. Start dev server (Vite)

   npm run dev

   The dev server is configured to run on 127.0.0.1:3000 (see vite.config.js).

3. Build for production

   npm run build

## Project structure (high level)

- public/
  - models/ — glTF model files (macbook-transformed.glb, macbook-16-transformed.glb)
  - videos/ — feature screen videos used as textures
  - assets (fonts, images, icons)
- src/
  - App.jsx — app entry (mounts sections and components)
  - main.jsx — React entry
  - index.css — global styles + Tailwind utilities
  - Components/
    - models/ — generated glTF React components (Macbook, Macbook-16)
    - three/ — three.js composition components (StudioLights, ModelSwitcher, Features)
    - ProductViewer, Showcase, NavBar, etc.
  - store/ — Zustand global state (color, scale, texture)
  - constants/ — nav links, features, model config
- vite.config.js — Vite configuration (port 3000)

## Assets & attribution

Many 3D models were converted with `gltfjsx`. Original model attribution is preserved in the generated files:

- Author: jackbaeten (Sketchfab)
- License: CC-BY-4.0
- Source: https://sketchfab.com/3d-models/macbook-pro-m3-16-inch-2024-8e34fc2b303144f78490007d91ff57c4

Do not remove or re-license third-party assets. Keep attribution where required.

## Development notes & tips

- The 3D canvas and model behavior live under `src/Components/three/` and `src/Components/models/`.
- State is managed by `src/store/index.js` (Zustand) — color, scale and texture defaults are defined there.
- If models or textures fail to load in dev, verify that `public/models` and `public/videos` exist and the paths match (Vite serves `public` at `/`).
- Port and host are configured in `vite.config.js` (127.0.0.1:3000).

## Troubleshooting

- If build or dev fails, check your Node version and reinstall dependencies.
- If the 3D model shows a white/black screen, ensure the video textures are present and have correct CORS/preload attributes.

## Contributing

1. Fork the repo
2. Create a topic branch
3. Open a PR with a clear description and changelog

## License

This repository does not include a top-level license file. Third-party assets (3D models) are licensed under CC-BY-4.0 — attribution is maintained in the generated model files.

## Acknowledgements

- Model author: jackbaeten (Sketchfab)
- Built with react-three/fiber, Drei, and GSAP


