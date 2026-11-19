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
// Use the invoking package manager's JS entry point on Windows as well as Unix.
if (process.env.npm_execpath) {
  execFileSync(process.execPath,[process.env.npm_execpath,'run','build'],{stdio:'inherit',cwd:'prototypes/spatial-study'});
} else {
  execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm',['run','build','--prefix','prototypes/spatial-study'],{stdio:'inherit',shell:process.platform === 'win32'});
}
cpSync('prototypes/spatial-study/dist','dist',{recursive:true});
console.log('Published connected workshop assets alongside preserved original project pages.');

// Keep the reviewed 3D workshop available, then publish the 2D portfolio at the root.
mkdirSync('dist/immersive', {recursive: true});
cpSync('dist/index.html', 'dist/immersive/index.html');
cpSync('prototypes/simple-portfolio', 'dist/portfolio', {recursive: true,
  filter: path => !path.endsWith('README.md')});
// Release the selected notebook without overwriting legacy root scripts or project routes.
execFileSync(process.execPath,['build.mjs','--production'],{stdio:'inherit',cwd:'prototypes/notebook'});
cpSync('prototypes/notebook/dist','dist/notebook',{recursive:true});
cpSync('prototypes/notebook/dist/index.html','dist/index.html');
console.log('Built notebook homepage; original cases, /portfolio/ and /immersive/ remain available.');
