import React from 'react';
import {Button} from '@cloudflare/kumo/components/button';
import {skills,allSkills} from './content.js';
export function AboutContent({open}){
 return <div className="about-story">
 <div className="about-profile"><img src="/personal/portrait.jpg" alt="Samuel Frausto in Lugano"/><div><h3>Samuel “Frosty” Frausto</h3><p>I’m a designer and creative technologist from Illinois, studying in USC’s first Human-Technology Interaction cohort and developing XR + AI systems at Edwards Lifesciences.</p><p className="availability">Looking for Summer 2027.</p></div></div>
 <h3>A change of direction</h3>
 <p>One week after my 19th birthday, shortly after graduating high school, I moved by myself to Lugano, Switzerland, without much of a plan. I was on a premedical track and expected to spend at least nine more years in school. Four months somewhere completely unfamiliar changed that. Seeing different cultures and histories firsthand made me reconsider what I wanted to build, and how I wanted to make an impact.</p>
 <p>That brought me to USC’s Iovine and Young Academy and Viterbi School of Engineering. I’m part of the inaugural Human-Technology Interaction cohort, working across design, engineering and emerging technology. I’m drawn to the moment when a new tool becomes something people can actually use—and to the teams figuring out what should come next.</p>
 <h3>Designing, building, and testing</h3>
 <p>At Edwards Lifesciences, I lead experience design and prototype implementation for immersive clinical training. I turn workflows and communication goals into scenarios, interactions and feedback, and continued after my internship as a part-time contractor. I also earned a project-based Lean Six Sigma Yellow Belt there.</p>
 <p>For Alma, I directed the learning experience and interactive controls that help people without a cardiac background understand the heart. Development used extensive AI assistance, alongside purchased anatomy and heartbeat poses from 3D4SCI. In USC’s class-built Iovine and Young Hall digital twin, my three-person subteam developed delivery and waypoint navigation across Web, Quest and Vision Pro.</p>
 <p>I co-led modeling and animation for Cyberpunk Twin and built an Omniverse extension for material transfer. On Synesthesia, I was the technical lead only: I implemented the runtime, controls and visionOS delivery, and had no control over the design. My teammates owned its visual design and modeling. My current faculty-directed research explores autonomous traffic systems in NVIDIA Omniverse; implementation and experiments are still in progress.</p>
 <Button onClick={()=>open('project/1')}>Explore Alma</Button>
 <h3>Skills & tools</h3>
 <div className="about-skills">{skills.map(s=><button key={s.title} onClick={()=>open('project/'+s.project)}><strong>{s.title}</strong><span>{s.tools}</span></button>)}</div>
 <details className="complete-skills"><summary>Full skills, tools & certifications</summary>{allSkills.map(([title,items])=><section key={title}><h3>{title}</h3><p>{items}</p></section>)}</details>
 <Button onClick={()=>open('skills')}>Open the complete skills list</Button>
 <h3>Research, leadership, and life outside the lab</h3>
 <p>Before Edwards, I worked in research and development and in media and communications at Jel Sert. As a ResearcHStart fellow in UChicago’s Kron Lab, I completed more than 300 hours of wet-lab research on TET2 inhibition and presented my findings at the UIUC cancer research symposium.</p>
 <p>I’m also Programming Chair and Team Captain for USC Club Baseball. Outside school and work, I surf, hike, and play baseball. The shelf holds my own photos and favorite movies, music and games. Those parts of my life belong here as much as the projects do.</p>
 <Button onClick={()=>open('library')}>Look through my shelf</Button>
 <a className="reader-link" href="/Samuel_Frausto_Resume.pdf" target="_blank" rel="noreferrer">View full Experience + Project CV ↗</a>
 </div>;
}
