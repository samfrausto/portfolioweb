import {skillGroups} from './skills-data.js';
import {escape as e,caseLink} from './render.js';
const marks={
 design:'M8 30 30 8l5 5-22 22-7 2 2-7Z M26 12l5 5 M8 30l5 5',
 spatial:'m21 4 16 9v18l-16 9-16-9V13l16-9Z M5 13l16 9 16-9 M21 22v18',
 web:'m14 12-9 10 9 10 M28 12l9 10-9 10 M24 7l-6 30',
 physical:'M6 8h30v28H6V8Z M6 22h30 M21 8v28 M11 13h5 M26 31h5',
 product:'M7 8h28v28H7V8Z M13 16h16 M13 23h16 M13 30h9 M30 5v6 M13 5v6',
 lab:'M16 5h10 M18 5v13L7 33q-3 5 3 5h22q6 0 3-5L24 18V5 M13 27h16 M19 32h1',
 tools:'M6 7h30v29H6V7Z M6 17h30 M16 17v19 M26 17v19 M6 27h30',
 foundations:'m5 9 16 4 16-4v26l-16 4-16-4V9Z M21 13v26 M10 18l6 2 M26 20l6-2'
};
export const skillEmblem=id=>`<svg class="skill-emblem" viewBox="0 0 42 44" fill="none" aria-hidden="true"><path d="${marks[id]}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
export function skillsPage(){return `<header class="skills-intro"><h2 id="skills-heading" tabindex="-1">Skills</h2></header><div class="skill-groups">${skillGroups.map(g=>{
 const rest=g.parts.map(p=>({...p,items:p.items.filter(x=>!g.highlights.includes(x))})).filter(p=>p.items.length);
 const count=rest.reduce((n,p)=>n+p.items.length,0);
 return `<details class="skill-group" name="skill-category" id="skills-${g.id}"><summary>${skillEmblem(g.icon)}<span class="skill-title">${e(g.title)}</span><svg class="skill-expand" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 8 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></summary><div class="skill-body"><ul class="skill-highlights">${g.highlights.map(x=>`<li>${e(x)}</li>`).join('')}</ul><p class="skill-context">${e(g.note)}</p>${count?`<details class="skill-more" id="skills-${g.id}-more"><summary>More tools & methods <span>(${count})</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M10 4v12" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></summary><div>${rest.map(p=>`<section class="skill-part"><h3>${e(p.title)}</h3>${p.note?`<p class="skill-qualification">${e(p.note)}</p>`:''}<ul>${p.items.map(x=>`<li>${e(x)}</li>`).join('')}</ul></section>`).join('')}</div></details>`:''}${g.evidence.length?`<nav class="skill-evidence" aria-label="Projects showing ${e(g.title)}">${g.evidence.map(id=>caseLink(id).replace('<a ',`<a id="skills-${g.id}-case-${id}" `)).join('')}</nav>`:''}</div></details>`;
 }).join('')}</div>`;}
