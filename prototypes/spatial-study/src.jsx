import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Button} from '@cloudflare/kumo/components/button';
import {Dialog} from '@cloudflare/kumo/components/dialog';
import {PlayIcon,PauseIcon,ArrowUpRightIcon,ArrowRightIcon,ArrowLeftIcon,BookOpenIcon,SnowflakeIcon,FireIcon,TelevisionIcon,XIcon,EnvelopeSimpleIcon,CursorClickIcon} from '@phosphor-icons/react';
import '@cloudflare/kumo/styles/kumo-standalone';
import './style.css';
import {createStudy} from './scene-study.js';
import {featured,PORTFOLIO,rooms,roomKeys,roleDisplay,coursework,allSkills} from './content.js';
import {PERSONAL} from './personal.js';
import {AboutContent} from './about-content.jsx';
const icons=[TelevisionIcon,SnowflakeIcon,FireIcon];
const aboutTargets=[['about','Read about Samuel'],['skills','Skills & tools'],['favorites/movies','Favorite movies'],['favorites/songs','Favorite music'],['favorites/activities','Baseball, surfing & hiking'],['favorites/games','Favorite games'],['frosty','Frosty']];
function routeFromHash(){
 const [name,id]=location.hash.slice(1).split('/'),num=Number(id);
 if(name==='project')return{section:0,project:featured.some(p=>p.id===num)?num:1,reader:PORTFOLIO.projects.some(p=>p.id===num)?'project/'+num:''};
 if(name==='experience')return{section:2,project:1,reader:id&&PORTFOLIO.experiences.some(e=>e.id===num)?'experience/'+num:''};
 if(name==='library')return{section:1,project:1,reader:id&&PERSONAL[id]?'library/'+id:'library'};
 if(name==='objects')return{section:Math.max(0,roomKeys.indexOf(id)),project:1,reader:'objects'};
 if(name==='cv'){location.replace('/Samuel_Frausto_Resume.pdf');return{section:2,project:1,reader:''};}
 if(['skills','about-detail'].includes(name))return{section:name==='cv'?2:1,project:1,reader:name};
 return{section:name==='about'?1:0,project:featured.some(p=>p.id===num)?num:1,reader:''};
}
function Hotspot({target,label,selected,preview,pick,clear}){return <button className="world-anchor object-hotspot" data-anchor={target} aria-label={label} aria-pressed={selected} onPointerEnter={()=>preview(target)} onPointerLeave={clear} onFocus={()=>preview(target)} onBlur={clear} onClick={()=>pick(target)}><span className="hotspot-label">{label}</span></button>;}
function App(){
 const [route,setRoute]=useState(routeFromHash),[ready,setReady]=useState(false),[error,setError]=useState(''),[motion,setMotion]=useState(()=>!matchMedia('(prefers-reduced-motion: reduce)').matches),[playing,setPlaying]=useState(false),[media,setMedia]=useState({loading:true,error:''}),[frosty,setFrosty]=useState(false),[experienceId,setExperienceId]=useState(0);
 const host=useRef(null),runtime=useRef(null),action=useRef(null),hover=useRef(null),returnTo=useRef(route.section===0?'#work/'+route.project:'#'+roomKeys[route.section]),lastTrigger=useRef(null),lastTriggerText=useRef(''),lastTriggerLabel=useRef(''),lastWork=useRef(route.project),lastReader=useRef(route.reader);
 const {section,project,reader}=route;if(reader)lastReader.current=reader;const readerContent=reader||lastReader.current,p=featured.find(p=>p.id===project),experience=PORTFOLIO.experiences[experienceId],role=roleDisplay[experienceId];
 const currentProject=readerContent.startsWith('project/')?PORTFOLIO.projects.find(p=>p.id===Number(readerContent.split('/')[1])):null,currentExperience=readerContent.startsWith('experience/')?PORTFOLIO.experiences.find(e=>e.id===Number(readerContent.split('/')[1])):null;
 function readRoute(){const next=routeFromHash();if(next.section!==0)next.project=lastWork.current;else lastWork.current=next.project;return next;}
 function go(hash){if(location.hash!==hash)history.pushState(null,'',hash);setRoute(readRoute());setPlaying(false);}
 function base(){return section===0?'#work/'+project:'#'+roomKeys[section];}
 function open(key){if(key==='cv'){window.open('/Samuel_Frausto_Resume.pdf','_blank','noopener,noreferrer');return;}lastTrigger.current=document.activeElement;lastTriggerText.current=document.activeElement?.textContent||'';lastTriggerLabel.current=document.activeElement?.getAttribute('aria-label')||'';returnTo.current=base();go('#'+key);}
 function select(id){go('#work/'+id);}
 function preview(target){runtime.current?.focus(target);if(target?.startsWith('experience/'))setExperienceId(Number(target.split('/')[1]));}
 hover.current=target=>{if(target?.startsWith('experience/'))setExperienceId(Number(target.split('/')[1]));};
 function pick(target){
  if(target.startsWith('project/'))select(Number(target.split('/')[1]));
  else if(target==='screen')open('project/'+project);
  else if(target.startsWith('experience/'))preview(target);
  else if(['frosty','hat'].includes(target))setFrosty(runtime.current?.wake()||false);
  else if(target.startsWith('favorites/'))open(target.replace('favorites/','library/'));
  else if(target==='favorites'||target.startsWith('cover/')||target.startsWith('photo/'))open('library');
  else if(target==='cv'||target==='skills')open(target);
  else if(['about','portrait'].includes(target))open('about-detail');
 }
 action.current=pick;
 useEffect(()=>{let cancelled=false;createStudy(host.current,()=>{if(!cancelled)setReady(true);},t=>action.current(t),m=>{if(!cancelled)setMedia(m);},t=>hover.current(t)).then(s=>{if(cancelled)s.dispose();else runtime.current=s;}).catch(e=>setError(e.message));return()=>{cancelled=true;runtime.current?.dispose();};},[]);
 useEffect(()=>{runtime.current?.set({section,project,playing:playing&&!reader,motion});},[section,project,playing,motion,reader,ready]);
 useEffect(()=>{const back=()=>{setRoute(readRoute());setPlaying(false);};window.addEventListener('popstate',back);window.addEventListener('hashchange',back);const mq=matchMedia('(prefers-reduced-motion: reduce)'),change=()=>{setMotion(!mq.matches);setPlaying(false);};mq.addEventListener('change',change);return()=>{window.removeEventListener('popstate',back);window.removeEventListener('hashchange',back);mq.removeEventListener('change',change);};},[]);
 function close(){go(returnTo.current===location.hash?base():returnTo.current);requestAnimationFrame(()=>{const match=[...document.querySelectorAll('button')].find(b=>lastTriggerLabel.current?b.getAttribute('aria-label')===lastTriggerLabel.current:lastTriggerText.current&&b.textContent===lastTriggerText.current);if(lastTrigger.current?.isConnected)lastTrigger.current.focus();else if(match)match.focus();else document.querySelector('.room-nav button[aria-current]')?.focus();});}
 const hotspotHandlers={preview,pick,clear:()=>runtime.current?.focus(null)};
 const playable=p.id===1||p.video;
 const libraryCategory=readerContent.split('/')[1];
 const dialogTitle=currentProject?.title||currentExperience?.name||(readerContent.startsWith('library/')?PERSONAL[libraryCategory]?.title:({cv:'Full Experience + Project CV',skills:'Skills & tools',library:'My shelf','about-detail':'About Samuel',objects:'Explore this room'}[readerContent]))||'Workshop';

 return <div className="workshop">
 <a className="skip" href="#room-controls" onClick={e=>{e.preventDefault();document.getElementById('room-controls')?.focus();}}>Skip to room controls</a>
 <header className="workshop-header">
  <div className="identity"><button className="portrait-button" aria-label="About Samuel Frausto" onClick={()=>open('about-detail')}><img src="/personal/portrait.jpg" alt=""/></button><a href="#work/1" onClick={e=>{e.preventDefault();go('#work/1');}}><h1>Samuel’s workshop</h1><span className="identity-note">UX &amp; Advanced Tech Design</span></a></div>
  <nav aria-label="Choose a room" className="room-nav">{rooms.map((name,i)=>{const Icon=icons[i];return <Button key={name} aria-current={section===i?'page':undefined} onClick={()=>go(i===0?'#work/'+project:'#'+roomKeys[i])}><Icon size={18}/><span>{name}</span></Button>;})}</nav>
  <div className="header-actions"><a className="simple-portfolio-link" href="/">Simple portfolio</a><Button onClick={()=>open('cv')} aria-label="Open full Experience and Project CV PDF in a new tab"><BookOpenIcon size={18}/><span>Full CV</span></Button><a className="contact" href="mailto:samueljfrausto@gmail.com" aria-label="Contact Samuel"><EnvelopeSimpleIcon size={20}/><span>Contact</span></a></div>
 </header>
 <main>
 <section id="room-controls" tabIndex={-1} className={'room-stage room-'+roomKeys[section]} aria-label={rooms[section]}>
  <div className="scene" ref={host} role="img" aria-label={`${rooms[section]} in Samuel’s connected workshop. Interactive objects have matching keyboard controls.`}/>
  <div className="room-guide"><p><CursorClickIcon size={17}/>{['Click a model to choose a project.','Click my portrait, shelf, or skills notebook.','Hover or tap a logo to see my role.'][section]}</p></div>
  <Button className="motion-control" aria-label={motion?'Pause room motion':'Enable room motion'} aria-pressed={!motion} onClick={()=>{setMotion(!motion);setPlaying(false);}}>{motion?<PauseIcon size={17}/>:<PlayIcon size={17}/>}</Button>
  <div className="scene-ui">
   {section===0&&<>
    <div className={'world-anchor tv-ui '+(playing?'is-playing ':'')+(p.id===3?'suz-tv':'')} data-anchor="tv" aria-label={p.title+' TV controls'}>
     <div className="tv-heading"><h2>{p.title}</h2>{p.url&&<a className="tv-destination" href={p.url} target="_blank" rel="noreferrer">{p.id===1?'Open Alma':p.id===3?'Open SuzChews':'Open project'}<ArrowUpRightIcon size={16}/></a>}</div>
     {playable&&!playing&&<Button className="tv-play" disabled={media.loading||!ready} aria-label={'Play '+p.title+' preview'} onClick={()=>setPlaying(true)}><PlayIcon size={26} weight="fill"/><span>Play</span></Button>}
     {p.id===3&&<iframe className="suz-tv-frame" src="/suzchews-tv.html" title="SuzChews original patient simulation"/>}{p.id===7&&<p className="tv-credit">Technical lead only · Design and modeling by teammates</p>}
     <div className="tv-actions">{playing&&<Button aria-label={'Pause '+p.title+' preview'} onClick={()=>setPlaying(false)}><PauseIcon size={17}/>Pause</Button>}<Button className="tv-story" onClick={()=>open('project/'+project)}>{p.id===12?'Research notes':'About this project'}<ArrowUpRightIcon size={16}/></Button></div>
     {(media.loading||media.error)&&<p className="tv-status" role="status">{media.error||'Loading preview…'}</p>}
    </div>
    {featured.map(item=><Hotspot {...hotspotHandlers} key={item.id} target={'project/'+item.id} label={'Select '+item.short} selected={item.id===project}/>)}
   </>}
   {section===1&&aboutTargets.map(([target,label])=><Hotspot {...hotspotHandlers} key={target} target={target} label={target==='frosty'?(frosty?'Let Frosty rest':'Wake Frosty'):label}/>)}
   {section===2&&<>
    <div className="world-anchor role-screen" data-anchor="role-screen"><p className="role-company">{experienceId===1?'USC Iovine and Young Academy · Viterbi':experience.name}</p><div aria-live="polite"><h2>{role.title}</h2><p className="role-detail">{role.detail}</p></div><Button onClick={()=>open('experience/'+experienceId)} aria-label={'See more about '+experience.name}>See more <ArrowUpRightIcon size={16}/></Button></div>
    {PORTFOLIO.experiences.map(e=><Hotspot {...hotspotHandlers} key={e.id} target={'experience/'+e.id} label={'Preview '+e.name} selected={experienceId===e.id}/>)}
    <Hotspot {...hotspotHandlers} target="cv" label="Open CV from the desk"/>
   </>}
  </div>
  <nav className="room-travel" aria-label="Continue through the rooms">{section>0?<Button onClick={()=>go(section===1?'#work/'+project:'#about')}><ArrowLeftIcon size={18}/>{rooms[section-1]}</Button>:<span/>}<Button className="next-room" onClick={()=>section<2?go('#'+roomKeys[section+1]):open('cv')}>{section<2?'Next: '+rooms[section+1]:'Explore the full CV'}<ArrowRightIcon size={18}/></Button></nav>
  {!ready&&<div className="loading" role="status">{error?'The room could not load. Please refresh, or use the CV link above.':'Opening the workshop…'}</div>}
 </section>
 </main>
 <Dialog.Root open={Boolean(reader)} onOpenChange={value=>{if(!value)close();}}><Dialog className="workshop-reader"><div className="reader-top"><Dialog.Title>{dialogTitle}</Dialog.Title><Button aria-label="Close reader" onClick={close}><XIcon size={20}/></Button></div><Dialog.Description>{currentProject?.role||currentExperience?.role||({cv:'The complete collection: 13 projects and four experiences.',skills:'Selected strengths, grounded in projects you can explore.',library:'A few of my favorite movies, music, games, and ways to spend a day.','about-detail':'Human-Technology Interaction at USC Iovine & Young.'}[readerContent]||'')}</Dialog.Description>
 {currentProject&&<div className="project-story"><div className="story-destinations">{currentProject.url&&<a className="open-project" href={currentProject.url} target="_blank" rel="noreferrer">{currentProject.id===1?'Open Alma':currentProject.id===3?'Open SuzChews':'Open project'} <ArrowUpRightIcon size={17}/></a>}</div>{currentProject.video?<video key={currentProject.id} controls playsInline preload="metadata" poster={'/'+currentProject.poster} src={'/'+currentProject.video} aria-label={currentProject.title+' project demo'}/>:currentProject.poster&&currentProject.id!==3?<img className="story-image" src={'/'+currentProject.poster} alt={currentProject.title+' project image'}/>:null}<p className="reader-caption">{currentProject.mediaCaption|| (currentProject.id===1?'Anatomical model and original heartbeat poses by 3D4SCI.':'')}</p><h3>The project</h3><p>{currentProject.brief}</p><h3>My contribution</h3><ul>{currentProject.part.map(t=><li key={t}>{t}</li>)}</ul><h3>{currentProject.id===12?'Current work':'What came out of it'}</h3><p>{currentProject.outcome}</p>{currentProject.team&&<p className="attribution">{currentProject.team}</p>}<p>{currentProject.tools.join(' · ')}</p>{currentProject.gallery?.map((g,i)=>g.kind==='video'?<figure key={g.src}><video controls playsInline preload="none" poster={'/'+g.poster} src={'/'+g.src} aria-label={g.caption}/><figcaption>{g.caption}</figcaption></figure>:<figure key={g.src}><img src={'/'+g.src} alt={g.alt||g.caption}/><figcaption>{g.caption}</figcaption></figure>)}{currentProject.url&&<a className="reader-link" href={currentProject.url} target="_blank" rel="noreferrer">{currentProject.id===1?'Open the live Alma experience':'Open original project page'}<ArrowUpRightIcon size={18}/></a>}</div>}
 {currentExperience&&<div className="experience-story"><p>{currentExperience.intro}</p><ul>{currentExperience.part.map(t=><li key={t}>{t}</li>)}</ul><p className="attribution">{currentExperience.note}</p>{currentExperience.id===1&&<><h3>Related coursework</h3><ul>{coursework.map(c=><li key={c}>{c}</li>)}</ul></>}<h3>Related projects</h3><div className="reader-list">{currentExperience.projects.map(id=><Button key={id} onClick={()=>go('#project/'+id)}>{PORTFOLIO.projects.find(p=>p.id===id)?.title}<ArrowUpRightIcon size={17}/></Button>)}</div></div>}
 {readerContent==='cv'&&<div className="cv-reader"><h3>Experience</h3><div className="reader-list">{PORTFOLIO.experiences.map(e=><Button key={e.id} onClick={()=>go('#experience/'+e.id)}><span>{e.name}<small>{e.role}</small></span><ArrowUpRightIcon size={18}/></Button>)}</div><h3>Projects</h3><div className="reader-list">{PORTFOLIO.projects.map(p=><Button key={p.id} onClick={()=>go('#project/'+p.id)}><span>{p.title}<small>{p.role}</small></span><ArrowUpRightIcon size={18}/></Button>)}</div><a className="reader-link" href="/Samuel_Frausto_Resume.pdf" target="_blank" rel="noreferrer">Download résumé PDF <ArrowUpRightIcon size={18}/></a></div>}
 {readerContent==='skills'&&<div className="capabilities">{allSkills.map(([title,items])=><section key={title}><h3>{title}</h3><p>{items}</p></section>)}</div>}
 {readerContent==='about-detail'&&<AboutContent open={key=>go('#'+key)}/>}
 {(readerContent==='library'||readerContent.startsWith('library/'))&&<div className="library">{Object.entries(PERSONAL).filter(([key])=>readerContent==='library'||readerContent==='library/'+key).map(([key,v])=><section key={key}><h3>{v.title}</h3><div>{v.items.map(i=><a key={i.key} href={i.url||'/'+i.image.replace('assets/','')} target="_blank" rel="noreferrer"><img src={'/'+i.image.replace('assets/','')} alt={i.alt||''}/><span>{i.title}</span>{i.by&&<small>{i.by}</small>}</a>)}</div></section>)}</div>}
 {readerContent==='objects'&&<div className="reader-list">{(section===0?featured.map(p=>({name:p.title,key:'project/'+p.id})):section===1?aboutTargets.map(([key,name])=>({key,name})):PORTFOLIO.experiences.map(e=>({name:e.name,key:'experience/'+e.id}))).map(item=><Button key={item.key} onClick={()=>{if(item.key.startsWith('project/'))go('#'+item.key);else if(item.key.startsWith('experience/'))go('#'+item.key);else if(item.key==='frosty'){setFrosty(runtime.current?.wake()||false);close();}else go('#'+(item.key==='about'?'about-detail':item.key.startsWith('favorites/')?item.key.replace('favorites/','library/'):item.key));}}>{item.name}<ArrowUpRightIcon size={17}/></Button>)}</div>}
 <div className="reader-bottom"><Button onClick={close}>Return to {returnTo.current.startsWith('#about')?'about me':returnTo.current.startsWith('#experience')?'experience':'featured work'}</Button><a href="mailto:samueljfrausto@gmail.com">Contact Samuel <EnvelopeSimpleIcon size={16}/></a></div>
 </Dialog></Dialog.Root>
 </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
