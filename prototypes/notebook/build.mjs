import {cp,mkdir,writeFile,readFile,readdir,rm} from 'node:fs/promises';
import {projects,about,home} from './content.js';
import {skillsPage} from './skills.js';
import {article,directory,utilityBar,escape} from './render.js';
const readable=markup=>markup.replace(/href="\?path=[^"]*&project=([^&]+)&view=case#case-[^"]+"/g,(_,id)=>`href="read.html#case-${id}"`).replace(/href="(?:\?path=[^"]*)?#map"/g,'href="read.html#all-work-heading"');
const shell=(title,body,base='./')=>`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${escape(title)} — Samuel Frausto</title><base href="${base}"><link rel="stylesheet" href="style.css"><link rel="icon" href="assets/favicon.svg"></head><body><main class="reader static-reader">${utilityBar().replace(/href="#map"/g,'href="read.html#all-work-heading"').replace(/href="\?view=all#all-work-heading"/g,'href="read.html#all-work-heading"')}${body}</main></body></html>`;
await writeFile('read.html',shell('Readable notebook',readable(directory()+skillsPage()+'<p class="fallback-about"><a class="text-link" href="read.html#about">About Samuel</a></p>'+Object.keys(projects).concat('about').map(id=>`<div class="static-case">${article(id,{native:true})}</div>`).join(''))));
// Local compatibility entries use the same records, while the production routes are untouched.
const aliases={};for(const [id,p] of Object.entries(projects))if(p.route)aliases[p.route]=id;
Object.assign(aliases,{'synesthesia.html':'synesthesia','pavilia.html':'pavilia','vr-baseball.html':'baseball','iyh-digital-twin.html':'iyh','cyberpunk-twin.html':'cyberpunk','jelsert-jamba.html':'jamba'});
const suzSections={'background.html':'problem','biomarkers.html':'role','solution.html':'decisions','algorithm.html':'decisions','simulation.html':'decisions','process.html':'result','team.html':'result','references.html':'credits'};
for(const page of Object.keys(suzSections))aliases['suzchews/'+page]='suzchews';
for(const [route,id] of Object.entries(aliases)){const section=suzSections[route.split('/').pop()];const target=`?path=${home(id)}&project=${id}&view=case#${section?id+'-'+section:'case-'+id}`;const depth=route.split('/').length;await mkdir('projects/'+route.slice(0,route.lastIndexOf('/')+1),{recursive:true});await writeFile('projects/'+route,shell(projects[id].title,`<div class="compatibility"><a class="action" href="${target}">Open this case in the notebook</a></div><div class="static-case">${readable(article(id,{native:true}))}</div>`,'../'.repeat(depth)));}
// Only runtime files and referenced public assets enter the release. Design studies,
// source photographs, verification captures and local provenance stay in the workspace.
export const runtimeFiles=['index.html','read.html','style.css','reader.css','project-motion.css','app.js','content.js','render.js','discovery.js','skills.js','skills-data.js','binding.js','project-motion.js','alma-preview.js'];
const production=process.argv.includes('--production');
const sourceText=(await Promise.all(runtimeFiles.map(f=>readFile(f,'utf8')))).join('\n')+JSON.stringify({projects,about});
async function filesUnder(dir){const found=[];for(const entry of await readdir(dir,{withFileTypes:true})){const path=dir+'/'+entry.name;found.push(...(entry.isDirectory()?await filesUnder(path):[path]));}return found;}
const assetFiles=(await filesUnder('assets')).filter(f=>sourceText.includes(f)||/assets\/fonts\/.*(?:LICENSE|OFL|COPYING)/i.test(f));
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const file of runtimeFiles){let text=await readFile(file,'utf8');
 if(production){
  // Module-generated media paths need the same namespace as the HTML assets.
  if(file.endsWith('.js'))text=text.replace(/(['"`])assets\//g,'$1/notebook/assets/');
  if(file==='index.html')text=text.replace('<html lang="en">','<html lang="en" data-release="notebook">').replace('<meta name="robots" content="noindex,nofollow">','<meta name="description" content="Samuel Frausto’s work in interaction design, XR and emerging technology. Explore working demos, project stories and contributions."><meta name="theme-color" content="#f4eee3"><link rel="canonical" href="https://www.samfrausto.com/">').replace(/((?:src|href)=")(?=assets\/|style\.css|project-motion\.css|app\.js|read\.html)/g,'$1/notebook/');
 }
 await writeFile('dist/'+file,text);
}
for(const file of assetFiles){await mkdir('dist/'+file.slice(0,file.lastIndexOf('/')),{recursive:true});await cp(file,'dist/'+file);}
console.log(`Built notebook: ${runtimeFiles.length} runtime files, ${assetFiles.length} referenced public assets (${production?'production namespace':'local paths'}).`);
