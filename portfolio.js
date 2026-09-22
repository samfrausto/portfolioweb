export const PORTFOLIO={
  "projects": [
    {
      "id": 0,
      "title": "XR clinical learning",
      "role": "Current contractor · XR Learning Design",
      "summary": "Immersive practice for engineers who handle clinical conversations.",
      "brief": "Build immersive learning tools for clinical education.",
      "part": [
        "Owned learning goals, scenario structure and interaction design",
        "Built the prototype training experience",
        "Translated communication goals into repeatable practice and feedback"
      ],
      "outcome": "The work is in development. Public project details are not available yet.",
      "tools": [
        "XR",
        "Clinical learning"
      ],
      "category": "Health & research",
      "poster": null,
      "featured": false,
      "url": null,
      "live": false,
      "team": null
    },
    {
      "id": 1,
      "title": "Alma",
      "role": "Learning experience & interaction design · AI-assisted development",
      "summary": "An interactive guide to how the heart works, created for Edwards employees without a cardiac background.",
      "brief": "Make the cardiac cycle understandable to employees whose everyday work does not involve the heart.",
      "part": [
        "Directed the learning sequence: what each section teaches, shows, and lets someone control.",
        "Refined the experience through live reviews, simplifying explanations and making interactions easier to understand.",
        "Used Claude Code extensively to implement the site, integrating a purchased heart model and heartbeat poses with an interactive simulation."
      ],
      "outcome": "A working browser experience that connects an animated heart, hands-on controls, and a synchronized cardiac-cycle diagram. Early viewers responded positively; learning outcomes have not been formally measured.",
      "tools": [
        "Claude Code",
        "TypeScript",
        "Three.js",
        "GSAP",
        "Blender",
        "Vite"
      ],
      "category": "Health & research",
      "poster": "assets/heart-live.png",
      "featured": true,
      "url": "https://www.samfrausto.com/projects/heart-valve/app/index.html",
      "live": true,
      "team": "I directed the content, interactions, and visual presentation. Claude Code supported implementation and debugging. The anatomical model and original heartbeat poses are purchased 3D4SCI assets; the app controls their motion through its simulation."
    },
    {
      "id": 2,
      "title": "IYH Digital Twin",
      "role": "Delivery layer · Three-person subteam",
      "summary": "A shared building model, delivered across Web, Meta Quest and Apple Vision Pro.",
      "brief": "Help people navigate the class-built twin of Iovine and Young Hall.",
      "part": [
        "Waypoint navigation between viewpoints",
        "Delivery across Web, Quest and Vision Pro",
        "Integration with the architecture modeled by the class"
      ],
      "outcome": "The authored case reports the building and navigation running across all three platforms.",
      "tools": [
        "Omniverse",
        "JavaScript",
        "Meta Quest",
        "visionOS"
      ],
      "category": "Spatial & XR",
      "poster": "assets/usc.jpg",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/iyh-digital-twin.v2.html",
      "live": false,
      "team": "The class built the architecture and interiors. My three-person subteam owned delivery and waypoint navigation.",
      "mediaCaption": "Iovine and Young Hall · Campus reference photograph; the digital twin is not pictured."
    },
    {
      "id": 3,
      "title": "SuzChews",
      "role": "Research + product concept",
      "summary": "A personalized chewing-gum concept explored through authored patient scenarios and formulation logic.",
      "brief": "Explore how a product could respond to differences in chemotherapy-related taste changes.",
      "part": [
        "Literature-informed formulation logic",
        "Deterministic, authored patient scenarios",
        "Interactive formulation calculator"
      ],
      "outcome": "A research concept and interactive model, not a clinically validated treatment.",
      "tools": [
        "UX research",
        "Systems architecture",
        "JavaScript"
      ],
      "category": "Health & research",
      "poster": "assets/suzchews-patients.png",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/suzchews/index.html",
      "live": true,
      "team": null,
      "mediaCaption": "Authored patient scenarios in the SuzChews interactive research concept."
    },
    {
      "id": 4,
      "title": "VR Baseball",
      "role": "Design & prototyping · Unity",
      "summary": "A pitch simulator exploring repeatable baseball practice in a virtual environment.",
      "brief": "Explore how repeatable simulated pitches could support receiving practice without a live pitcher.",
      "part": [
        "Developed fastball, curveball, and slider behavior.",
        "Built pitch selection, trajectory visualization, and strike-zone detection.",
        "Assembled the field and equipment in Blender and Unity."
      ],
      "outcome": "A working pitch-selection and trajectory prototype. The desktop demo shows selecting pitch types and skill levels, then watching each pitch travel toward the plate.",
      "tools": [
        "Unity",
        "Blender",
        "C#",
        "Meta Quest"
      ],
      "category": "Spatial & XR",
      "poster": "assets/projects/baseball-pitch.jpg",
      "featured": true,
      "url": "https://www.samfrausto.com/projects/vr-baseball.v2.html",
      "live": false,
      "team": null,
      "mediaCaption": "Pitch selection and ball flight · Desktop recording of the Unity prototype.",
      "video": "media/baseball-pitch-demo.mp4"
    },
    {
      "id": 5,
      "title": "Pavilia",
      "role": "Technical lead · Portal system",
      "summary": "A perspective-correct portal connecting two student-built worlds.",
      "brief": "Make movement between the blossom world and island world feel continuous.",
      "part": [
        "A mirrored destination camera",
        "Live render textures and custom HLSL projection",
        "Player transfer through the portal plane"
      ],
      "outcome": "The completed mechanic combines camera transforms, shaders, render textures and player transfer.",
      "tools": [
        "Unity",
        "C#",
        "Shader programming"
      ],
      "category": "Spatial & XR",
      "poster": "assets/projects/pavilia-01.png",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/pavilia.v2.html",
      "live": false,
      "team": "My partner built the tree and island worlds. I owned the portal system and visual integration.",
      "mediaCaption": "The blossom world in Unity · Environment by my teammate; portal system and visual integration by me.",
      "gallery": [
        {
          "src": "assets/projects/pavilia-02.png",
          "caption": "A live view through the portal into the other world.",
          "alt": "A live view through the portal into the other world."
        }
      ]
    },
    {
      "id": 6,
      "title": "Cyberpunk Twin",
      "role": "Co-lead · Modeling, animation and skybox",
      "summary": "A real bedroom rebuilt in 3D, with a custom tool to simplify material transfer.",
      "brief": "Rebuild the source room with accurate placement, materials, scale and lighting.",
      "part": [
        "Co-led modeling, animation and the skybox",
        "Built an Omniverse extension for material transfer into USD",
        "Added motion to screens, signage and ambient elements"
      ],
      "outcome": "Completed the room twin and an Omniverse extension that removed a repetitive material-transfer step from the team’s workflow.",
      "tools": [
        "Blender",
        "NVIDIA Omniverse",
        "Digital twins",
        "Real-time materials"
      ],
      "category": "Spatial & XR",
      "poster": "assets/cyberpunk.png",
      "featured": true,
      "url": "https://www.samfrausto.com/projects/cyberpunk-twin.v2.html",
      "live": false,
      "team": "This was a co-led team project. My contributions span modeling, animation, the skybox and the material-transfer extension.",
      "mediaCaption": "Original project demo · A real room recreated in Blender and NVIDIA Omniverse.",
      "video": "media/cyberpunk-twin-demo.mp4"
    },
    {
      "id": 7,
      "title": "Synesthesia",
      "role": "Technical lead · Three-person team",
      "summary": "An adjustable ambient visionOS experience that sits behind a workspace.",
      "brief": "Let people tune the world around their work without replacing their open windows.",
      "part": [
        "Scene-switching and runtime interaction",
        "Live color, music and opacity controls",
        "Unity-to-visionOS delivery with custom gradient shaders"
      ],
      "outcome": "The completed prototype combines environments, audio, live controls and custom shaders.",
      "tools": [
        "Unity",
        "Swift",
        "visionOS",
        "Shader programming"
      ],
      "category": "Spatial & XR",
      "poster": "assets/projects/synesthesia-controls.jpg",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/synesthesia.v2.html",
      "live": false,
      "team": "I was the technical lead only and had no control over the design. My teammates owned modeling and visual design; I implemented interaction and runtime mechanics.",
      "mediaCaption": "Scene switching and color controls · Recorded in the Apple Vision Pro simulator.",
      "video": "media/synesthesia-controls.mp4",
      "gallery": [
        {
          "src": "assets/projects/synesthesia-color-controls.png",
          "caption": "The color and scene controls in the running prototype.",
          "alt": "The color and scene controls in the running prototype."
        },
        {
          "src": "media/synesthesia-immersion.mp4",
          "poster": "assets/projects/synesthesia-immersion.jpg",
          "kind": "video",
          "caption": "Earlier immersion-slider prototype · Adjusting how much of the surrounding room stays visible."
        }
      ]
    },
    {
      "id": 8,
      "title": "Pure Kick × Harley-Davidson",
      "role": "Marketing intern · Jel Sert",
      "summary": "Campaign media, consumer research and positioning for a custom motorcycle giveaway.",
      "brief": "Connect creative production to the partnership’s audience and brand story.",
      "part": [
        "Produced and edited the promotional film",
        "Researched consumer insights and product awards",
        "Contributed to campaign positioning"
      ],
      "outcome": "Delivered promotional media, audience research, award research and positioning support.",
      "tools": [
        "Video production",
        "Consumer research",
        "Brand strategy"
      ],
      "category": "Brand & communication",
      "poster": "assets/projects/purekick-harley-02.png",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/purekick-harley.v2.html",
      "live": false,
      "team": null,
      "mediaCaption": "The custom Pure Kick motorcycle · Still from the promotional film.",
      "gallery": [
        {
          "src": "assets/projects/purekick-harley-01.png",
          "caption": "Pure Kick campaign film · Branded set detail.",
          "alt": "Pure Kick campaign film · Branded set detail."
        }
      ],
      "mediaFit": "contain"
    },
    {
      "id": 9,
      "title": "Fla-Vor-Ice × Crayola",
      "role": "Marketing intern · Jel Sert",
      "summary": "Launch communications, promotional creative and influencer outreach.",
      "brief": "Bring a limited collaboration to press, creators and consumer channels.",
      "part": [
        "Wrote the release published on PR Newswire",
        "Produced graphics and video published by Crayola",
        "Creator seeding and an internal performance newsletter"
      ],
      "outcome": "Delivered launch copy, promotional media, influencer outreach and internal reporting.",
      "tools": [
        "PR writing",
        "Graphic design",
        "Video editing",
        "Creator outreach"
      ],
      "category": "Brand & communication",
      "poster": "assets/projects/crayola-02.jpg",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/flavoice-crayola.v2.html",
      "live": false,
      "team": null,
      "mediaCaption": "Fla-Vor-Ice × Crayola · Product launch creative.",
      "gallery": [
        {
          "src": "assets/projects/jelsert-internship-03.png",
          "caption": "Collaboration event imagery from the project materials.",
          "alt": "Collaboration event imagery from the project materials."
        }
      ],
      "mediaFit": "contain"
    },
    {
      "id": 10,
      "title": "Jel Sert × Jamba",
      "role": "Marketing intern · Jel Sert",
      "summary": "Partnership outreach, press writing and field representation for Jamba Singles To Go.",
      "brief": "Support a product launch through relationships, clear communication and field work.",
      "part": [
        "Managed 30+ partnership and influencer contacts",
        "Authored the official press release and company blog post",
        "Represented Jel Sert at a Bakersfield road show"
      ],
      "outcome": "Launch coverage appeared on the Jel Sert site and PR Newswire.",
      "tools": [
        "Partnerships",
        "PR writing",
        "Field representation"
      ],
      "category": "Brand & communication",
      "poster": "assets/projects/jamba-01.png",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/jelsert-jamba.v2.html",
      "live": false,
      "team": null,
      "mediaCaption": "Jamba Singles To Go · Product launch imagery.",
      "mediaFit": "contain"
    },
    {
      "id": 11,
      "title": "TET2 research",
      "role": "ResearcHStart Fellow · Kron Lab",
      "summary": "Cancer-immunology research into small-molecule TET2 inhibition.",
      "brief": "Evaluate TET2 inhibition in CT-26 cell cultures.",
      "part": [
        "Evaluated small-molecule inhibition in cell cultures",
        "Presented the work at the UIUC cancer research symposium"
      ],
      "outcome": "The original research poster documents the study and presentation.",
      "tools": [
        "Cell-culture research",
        "Scientific communication"
      ],
      "category": "Health & research",
      "poster": "assets/projects/tet2-research-poster.png",
      "featured": false,
      "url": "https://www.samfrausto.com/projects/tet2-research.html",
      "live": false,
      "team": null,
      "mediaCaption": "Original TET2 research poster · Presented at the UIUC cancer research symposium.",
      "mediaFit": "contain"
    },
    {
      "id": 12,
      "title": "Autonomous Traffic Digital Twin",
      "role": "USC faculty-directed research · In progress",
      "summary": "An interactive Omniverse traffic sandbox for studying coordinated autonomous vehicles.",
      "brief": "Build a controllable traffic environment for exploring how coordinated vehicles affect traffic flow.",
      "part": [
        "Building the OpenUSD traffic environment and live parameter controls",
        "Developing virtual instrumentation for raycast lidar, time-to-collision and flow",
        "Planning reinforcement-learning experiments across fleet participation rates"
      ],
      "outcome": "Research is in progress. The interactive demo, dataset and paper draft are planned semester deliverables; no completed experimental results are claimed.",
      "tools": [
        "NVIDIA Omniverse",
        "OpenUSD",
        "Python",
        "Simulation",
        "Research"
      ],
      "category": "Spatial & XR",
      "poster": null,
      "featured": true,
      "url": null,
      "live": false,
      "team": "USC faculty-directed research advised by a lecturer who is an NVIDIA senior workflow specialist. This is not an NVIDIA-sponsored project or employment."
    }
  ],
  "experiences": [
    {
      "id": 0,
      "name": "Edwards Lifesciences",
      "role": "XR Learning Design · Intern / Contractor",
      "status": "Current",
      "context": "Clinical learning",
      "intro": "Designing and prototyping immersive clinical-learning experiences, from the learning goals to the interactions.",
      "part": [
        "Directed learning goals, scenario structure, and prototype development for immersive clinical learning.",
        "Translated clinical communication goals into repeatable training interactions.",
        "Created Alma, a separate interactive learning site for employees without a cardiac background."
      ],
      "note": "Current contractor; previously an intern. The clinical training work is in development. Alma is a related public learning project, not footage of private training work.",
      "projects": [
        0,
        1
      ],
      "logo": "assets/logo-edwards.png",
      "accent": "#346452",
      "poster": "assets/heart-live.png",
      "mediaCaption": "Alma · Related public learning project."
    },
    {
      "id": 1,
      "name": "USC Iovine & Young",
      "role": "Student · B.S. Human-Technology Interaction ’28",
      "status": "Education & project work",
      "context": "Spatial systems + interaction",
      "intro": "Connecting technical systems, design and interaction through work built for Web, Quest and Vision Pro.",
      "part": [
        "Delivery and waypoint navigation for the IYH Digital Twin",
        "Technical leadership on portal and ambient visionOS mechanics",
        "Modeling, animation and pipeline tooling for a digital twin"
      ],
      "note": "The project stories distinguish my responsibilities from the work of my teammates and the class.",
      "projects": [
        12,
        2,
        7,
        6,
        5,
        4
      ],
      "logo": "assets/logo-iya.png",
      "accent": "#842f43",
      "poster": "assets/projects/synesthesia-controls.jpg",
      "mediaCaption": "Synesthesia · A student project at USC Iovine & Young."
    },
    {
      "id": 2,
      "name": "The Jel Sert Company",
      "role": "R&D Research Lab Intern + Communications & Media Intern",
      "status": "Internships",
      "context": "Research + brand launches",
      "intro": "Work across a research lab and the communication needed to bring products and collaborations into the world.",
      "part": [
        "Research and development lab internship",
        "Campaign video, graphics, press writing and brand-positioning work",
        "Partnership outreach, creator seeding and field representation"
      ],
      "note": "The strongest public evidence is in the Pure Kick × Harley-Davidson, Fla-Vor-Ice × Crayola and Jamba launch work.",
      "projects": [
        8,
        9,
        10
      ],
      "logo": "assets/logo-jelsert.png",
      "accent": "#247185",
      "poster": "assets/projects/jamba-01.png",
      "mediaCaption": "Jamba Singles To Go · Launch communication work at Jel Sert."
    },
    {
      "id": 3,
      "name": "UChicago · Kron Lab",
      "role": "ResearcHStart Fellowship Awardee",
      "status": "Research fellowship",
      "context": "Cancer immunology",
      "intro": "Studying small-molecule TET2 inhibition in CT-26 cell cultures, then communicating the work through a research presentation.",
      "part": [
        "Evaluated small-molecule TET2 inhibition in cell cultures",
        "Presented the work at the UIUC cancer research symposium"
      ],
      "note": "Open the original research page to inspect the poster and project context.",
      "projects": [
        11
      ],
      "logo": "assets/logo-uchicago.png",
      "accent": "#842f43",
      "poster": "assets/projects/tet2-research-poster.png",
      "mediaCaption": "TET2 research · Original symposium poster."
    }
  ],
  "capabilities": [
    {
      "title": "Build interactive systems",
      "summary": "Connect engines and runtimes to the experience someone actually uses.",
      "skills": [
        "Unity",
        "NVIDIA Omniverse",
        "visionOS",
        "WebGL / Canvas 2D"
      ],
      "projects": [
        1,
        4,
        5
      ],
      "example": "Interactive heart learning, pitch simulation, and a perspective-correct portal."
    },
    {
      "title": "Make worlds feel real",
      "summary": "Model, light and simulate spaces that hold together in real time.",
      "skills": [
        "Blender",
        "Shader programming",
        "Digital twins",
        "Real-time materials",
        "Point-cloud systems"
      ],
      "projects": [
        6,
        12,
        2
      ],
      "example": "Digital twins, animation and an Omniverse material-transfer extension."
    },
    {
      "title": "Deliver across XR",
      "summary": "Carry an experience from its source environment into the platforms people use.",
      "skills": [
        "Meta Quest",
        "Apple Vision Pro",
        "Web-delivered XR",
        "Waypoint navigation"
      ],
      "projects": [
        2,
        7,
        4
      ],
      "example": "Web, Meta Quest and Apple Vision Pro delivery with familiar navigation."
    },
    {
      "title": "Build the missing tool",
      "summary": "Use code to implement the mechanics and remove friction from the workflow.",
      "skills": [
        "C#",
        "C++",
        "Python",
        "Swift",
        "JavaScript",
        "HTML / CSS"
      ],
      "projects": [
        5,
        6,
        3
      ],
      "example": "Custom shaders, pipeline tooling and explainable interactive logic."
    },
    {
      "title": "Connect research and design",
      "summary": "Turn a question into a structured model, prototype or communication people can inspect.",
      "skills": [
        "Figma",
        "UX research",
        "AI-adaptive assessment",
        "Systems architecture",
        "Motion & interaction"
      ],
      "projects": [
        3,
        11,
        9,
        10
      ],
      "example": "An authored patient simulation, research presentation and published launch communication."
    }
  ],
  "books": [
    [
      "The Last Lecture",
      "Randy Pausch with Jeffrey Zaslow",
      "https://www.hbglibrary.com/titles/randy-pausch/the-last-lecture/9780316335614/"
    ],
    [
      "When Breath Becomes Air",
      "Paul Kalanithi",
      "https://www.penguinrandomhouse.com/books/258507/when-breath-becomes-air-by-paul-kalanithi/"
    ],
    [
      "Diary of an Apprentice Astronaut",
      "Samantha Cristoforetti",
      "https://www.penguin.co.uk/books/311874/diary-of-an-apprentice-astronaut-by-cristoforetti-samantha/9780241467381"
    ]
  ]
};
