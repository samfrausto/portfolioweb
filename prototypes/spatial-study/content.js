import {PORTFOLIO as SOURCE} from '../../portfolio.js';
export const PORTFOLIO=structuredClone(SOURCE);
PORTFOLIO.projects.find(p=>p.id===7).team='I was the technical lead only. I implemented the runtime, controls and platform delivery; I had no control over the design. My teammates owned the visual design and modeling.';
PORTFOLIO.experiences[1].name='USC Iovine and Young Academy for the Arts, Technology, and Business of Innovation & Viterbi School of Engineering';
PORTFOLIO.experiences[1].part=['Delivery and waypoint navigation for the class-built IYH Digital Twin','Technical implementation and platform delivery for Synesthesia; design owned by teammates','Modeling, animation and pipeline tooling for Cyberpunk Twin'];
PORTFOLIO.experiences[1].projects=[12,2,7,6,3,4];
export const coursework=['Object-Oriented Programming','Introduction to Programming (CSCI 103 · C++)','Constructing Digital Worlds (ACAD 288)','Extended Reality Development (ACAD 217)','Collaborative Prototyping for Healthcare Innovation (ACAD 432)'];
export const rooms=['Featured work','About me','Experience'];
export const roomKeys=['work','about','experience'];
const additions={
 1:{short:'Alma',medium:'Live heart',caption:'Original interactive heart from Alma. Anatomy and heartbeat poses by 3D4SCI.'},
 6:{short:'Cyberpunk',medium:'Project film'},
 4:{short:'VR Baseball',medium:'Prototype demo'},
 7:{short:'Synesthesia',medium:'visionOS demo',caption:'Technical lead only. I had no control over the design; teammates owned visual design and modeling.'},
 3:{short:'SuzChews',medium:'Patient scenarios',caption:'Five authored patient personas from the SuzChews research concept. Not real patients or validated treatment outcomes.'},
 12:{short:'Traffic twin',medium:'Research in progress',caption:'USC faculty-directed research. A project capture and experimental results are not available yet.'}
};
export const featured=[1,6,4,7,3,12].map(id=>({...PORTFOLIO.projects.find(p=>p.id===id),...additions[id]}));
export const skills=[
 {title:'Interaction & learning design',tools:'Learning sequences, spatial controls, UX prototyping',project:1},
 {title:'Real-time worlds',tools:'Blender, Omniverse, OpenUSD, digital twins',project:6},
 {title:'Spatial & XR development',tools:'Unity, C#, visionOS, Meta Quest',project:4},
 {title:'Shaders & creative tools',tools:'HLSL, render textures, Python, Swift',project:7}
];

export const roleDisplay=[
 {title:'XR Learning Design',detail:'Contractor · Previously intern'},
 {title:'Human-Technology Interaction',detail:'B.S. student · Class of 2028'},
 {title:'R&D Research Lab Intern',detail:'Communications & Media Intern'},
 {title:'ResearcHStart Fellowship Awardee',detail:'Kron Lab · UChicago'}
];

export const allSkills=[
 ['Design & research','Interaction design, Systems design, Learning design, UX research, Prototyping, Human factors, Experiment design, Data analysis'],
 ['Prototype implementation','C# scripting, JavaScript, HTML/CSS, HLSL, TypeScript'],
 ['3D & simulation','Blender, Character rigging, Character animation, USD / OpenUSD, Digital twins, Shader programming, Render textures, Physics simulation, Real-time materials'],
 ['Engines & runtimes','Unity, NVIDIA Omniverse, visionOS, WebGL, Canvas 2D, Unreal Engine'],
 ['XR & human interface devices','Meta Quest, Apple Vision Pro, Web-delivered XR, Waypoint navigation, Kinect, Haptics, Gesture interaction'],
 ['Creative tools','Figma, Photoshop, DaVinci Resolve, Canva, Framer, Adobe Creative Suite'],
 ['Development tools','VS Code, PowerShell'],
 ['Frontend project experience','React'],
 ['AI-assisted coding tools','Claude, Codex, Sakana AI, Cursor, Claude Code'],
 ['Foundational exposure','Python, C++, Swift'],
 ['Additional technical exposure','C, MATLAB, Circuits'],
 ['Certification','Lean Six Sigma Yellow Belt — project-based certification earned at Edwards Lifesciences, 2026'],
 ['Certification plans','SolidWorks CSWA planned for November 2026; CSWP planned for January 2027']
];
