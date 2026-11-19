# Alma portfolio preview

Compact entry into Alma’s actual “The four valves” lesson. Uses the existing
anatomy, engine, morph binding, picking and valve switch. No anatomy or physiology
changes; the adapter supplies responsive framing, keyboard orbit, reduced motion,
zoom/reset, focus return, load recovery and visibility-controlled rendering.

## Source and ownership

- Alma checkout: `/Users/sjfraust/Alma`, source commit
  `d9a252254c8c58b0e48d6527104e09e73c058379` (clean when built).
- Anatomy and poses: 3D4SCI. Existing model is reused at
  `/projects/heart-valve/app/models/heart-base-v2.glb`; no duplicate asset.
- Three.js 0.169, GSAP and Vite use Alma’s installed dependencies.
- Original Alma entry, bundle, styles and model remain unchanged.

## Rebuild

```sh
ALMA_SOURCE=/path/to/Alma node prototypes/alma-embed/build.mjs
npm run build
```

The first command type-checks the adapter and its source imports, then emits
`projects/heart-valve/app/portfolio/scene.js` and `scene.css`. Normal portfolio
builds use these checked-in public artifacts; they do not require another checkout.
Entry: `/projects/heart-valve/app/portfolio-embed.html?intro=0`.

The notebook mounts it only for selected, visible Alma. Same-origin postMessages
control renderer pause/resume and ready/error/focus state. Leaving the project
unmounts the frame. The idle lesson is parked until the visitor rotates, zooms,
selects a valve or switches phases. Reduced motion settles phase changes directly.

## Source provenance (SHA-256)

- `src/sections/section3.ts`: `b7f088c70b6c0195552d7869ec229816f12278d2ab6820feac5860401652e9c7`
- `src/scene/heartRig.ts`: `f487d088f015fee5c24c3807b058310f99fc16a73f243cb7e458a5bb4d5f57e2`
- `src/scene/index.ts`: `987fe955243320215062527cf36243b9e8eb08aff89f4c2d722e37ed72e018b0`

Verification is retained locally under
`prototypes/notebook/verification/alma-live-preview/`.
