# Workshop portfolio release — September 21, 2026

Samuel approved the v16 workshop preview and explicitly requested publication to the live site.
The homepage now uses the approved winter workshop, separate personal library, Alma live heart,
and project media. The prior homepage is preserved in Git at fd57ee3.

The existing Vercel configuration builds this repository with `npm run build` and serves `dist`.
The build includes the new homepage runtime and retains all previous project pages, supporting
assets, and the CV PDF. Three.js and the five required add-on modules are vendored with their
existing license. There are no node_modules or local /reference dependencies in the homepage.

Production source is the repository root. Prototype sources remain separately preserved in
workshop-live-v16. Editable Alma source remains in its own repository; the homepage uses its
purchased 3D4SCI model and original simulation through the portfolio preview adapter.

Validation before publishing: modified JavaScript syntax, complete production build, recursive
browser-module resolution in dist, all current project/experience media paths, both GLB models,
CV path, and existing project routes. Existing project files and existing assets are unchanged.

To edit this version, start from current origin/main. Do not deploy the older dirty
immersive-evolution checkout. See the planning task's release receipt for deployment evidence.
