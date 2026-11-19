import {readFile,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const here=dirname(fileURLToPath(import.meta.url));
const source=process.env.ALMA_SOURCE;
if(!source)throw new Error('Set ALMA_SOURCE to the existing Alma checkout. The portfolio uses its checked-in compiled preview in normal builds.');
const {default:ts}=await import(pathToFileURL(resolve(source,'node_modules/typescript/lib/typescript.js')));
const config=ts.convertCompilerOptionsFromJson({target:'ES2022',module:'ESNext',lib:['ES2022','DOM','DOM.Iterable'],moduleResolution:'bundler',allowImportingTsExtensions:true,noEmit:true,strict:true,skipLibCheck:true,baseUrl:here,paths:{'@alma/*':[resolve(source,'src/*')],'three':[resolve(source,'node_modules/@types/three/index.d.ts')],'three/addons/*':[resolve(source,'node_modules/@types/three/examples/jsm/*')],'gsap':[resolve(source,'node_modules/gsap/types/index.d.ts')]}},here);
const program=ts.createProgram([resolve(here,'scene.ts'),resolve(source,'node_modules/vite/client.d.ts')],config.options);
const errors=[...config.errors,...ts.getPreEmitDiagnostics(program)];
if(errors.length){console.error(ts.formatDiagnosticsWithColorAndContext(errors,{getCurrentDirectory:()=>here,getCanonicalFileName:f=>f,getNewLine:()=> '\n'}));process.exit(1);}
const {build}=await import(pathToFileURL(resolve(source,'node_modules/vite/dist/node/index.js')));
await build({configFile:false,root:here,publicDir:false,base:'/projects/heart-valve/app/',resolve:{alias:[{find:'@alma',replacement:resolve(source,'src')},{find:/^three$/,replacement:resolve(source,'node_modules/three/build/three.module.js')},{find:'three/addons',replacement:resolve(source,'node_modules/three/examples/jsm')},{find:'gsap',replacement:resolve(source,'node_modules/gsap')}]},build:{outDir:resolve(here,'../../projects/heart-valve/app/portfolio'),emptyOutDir:false,lib:{entry:resolve(here,'scene.ts'),formats:['es'],fileName:()=> 'scene.js'},rollupOptions:{output:{assetFileNames:'scene.[ext]'}},chunkSizeWarningLimit:1200}});
// Normalize vendor shader/comment whitespace in the checked-in generated artifact.
const bundle=resolve(here,'../../projects/heart-valve/app/portfolio/scene.js');
await writeFile(bundle,(await readFile(bundle,'utf8')).replace(/^[ \t]+/gm,indent=>indent.replace(/\t/g,'  ')).replace(/[ \t]+$/gm,''));
