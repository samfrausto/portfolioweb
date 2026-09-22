import {execFileSync} from 'node:child_process';
import {cpSync, existsSync, mkdirSync, rmSync} from 'node:fs';
const files = ['index.html','workshop.css','app.js','scene.js','display.js','portfolio.js','personal.js','project-views.js','heart-media.js','heart-engine.js','firewood.js','surfaces.json','style.css','shared.js','centerpiece.js','path-dots.js','path-dots-morph.js','hero-depth.js','scroll-travel.js','now-system.js','prototypes.html','prototype-immersive.html','prototype-hero-depth.html'];
const directories = ['projects','assets','models','media','fonts','vendor'];
for (const path of [...files, ...directories, 'prototypes/relay-engine.js']) {
  if (!existsSync(path)) throw new Error(`Required production input is missing: ${path}`);
}
rmSync('dist', {recursive: true, force: true});
mkdirSync('dist/prototypes', {recursive: true});
for (const path of [...files, ...directories, 'prototypes/relay-engine.js']) cpSync(path, `dist/${path}`, {recursive: true});
console.log('Built workshop homepage and preserved existing public project pages.');

// Publish the reviewed connected workshop while retaining every original project route.
execFileSync('npm',['run','build','--prefix','prototypes/spatial-study'],{stdio:'inherit'});
cpSync('prototypes/spatial-study/dist','dist',{recursive:true});
console.log('Published connected workshop assets alongside preserved original project pages.');
