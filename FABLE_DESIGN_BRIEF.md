# Fable design brief — Samuel Frausto portfolio

Use this file as the single source of context when continuing design work in Claude with **Fable**. Do not treat older Cursor prototypes as final until this brief’s roadmap is agreed.

---

## ⭐ SESSION HANDOFF — READ THIS FIRST (last updated: current session)

**Where we are:** A creative direction has emerged and is being iterated. It is **Direction D — "Sonar"**, a fully custom hero built from Samuel's feedback across several rounds. It is **not yet locked** — Samuel is still refining it. All work lives in `prototypes/` and **nothing live has been touched.**

**The one file that matters right now:**
`prototypes/mockup-d-sonar.html` — the current hero mockup. Open at:
`http://localhost:4599/prototypes/mockup-d-sonar.html`
(Dev server should already be running — see command below. If not: `python3 .claude/devserver.py 4599`)

### Non-negotiable working rules (Samuel set these — honor them exactly)
1. **Everything goes through Samuel.** No decisions locked without his say-so.
2. **No drastic changes before he sees a mockup.** Always show the change (screenshot / live localhost) before merging anything or moving on.
3. **Never edit live `index.html` / `style.css`** without explicit approval. Prototype-first, one merge at a time.
4. **Keep localhost running** so he can watch iterations. Don't kill the dev server on port 4599.
5. Prefer Fable for important design decisions.

### What "Sonar" is (the agreed hero concept)
A submarine/sonar-instrument themed hero. Elements currently implemented in `mockup-d-sonar.html`:
- **Instrument shell:** hairline frame, top status bar (SIGNAL LOCKED, live FPS, DEPTH readout that climbs on scroll, clock), "DIVE ↓" scroll cue, depth-tick markers.
- **Big hero portrait, centered:** uses `assets/portrait/headset.png` (Samuel wearing an XR headset). The face underneath (`assets/portrait/face.png`) is revealed two ways: (a) a **sonar "ping"** ring that expands from the portrait and resolves the face inside the traveling ring, and (b) a **cursor reveal** — a soft circle following the pointer. The ping + reveal now fire **once per record shift** (not on a loop).
- **"Service record" dots:** a particle field (~2400 dots) that reorganizes per contact into a **wordmark on the left** and the **company insignia/logo on the right**, plus a **half-transparent background motif** behind the portrait, plus orbiting dots. Each contact re-tints the whole page (glow, sonar ring, crosshairs, chip, dots) to that brand's accent color, with a smooth color transition.
- **Scroll handoff:** on scroll, the dots peel off the orbit, stream down an arc through the "descent" zone, and land as a dotted underline beneath the "02 — SELECTED WORK" header — literally delivering the viewer into the work section (bench report + project cards below).

### The five contacts (chronological), their accent colors + background motifs
1. **UCHICAGO** — `#8A1F35` maroon — motif: Chicago skyline — insignia: maroon shield (cropped from `assets/logos/uchicago.png`) — caption "KRON LAB · CANCER IMMUNOLOGY"
2. **FRANKLIN SWITZERLAND** — `#4A90D9` alpine blue (Swiss red would collide with Edwards) — motif: 14-node travel route (the 14 countries from his gap semester) — insignia: **procedurally-drawn Swiss cross** (no Franklin logo file exists) — caption "FRANKLIN UNIVERSITY SWITZERLAND · GAP SEMESTER — 14 COUNTRIES"
3. **THE JEL SERT COMPANY** — `#E4572E` orange — motif: three tilted freezer pops — insignia: blue circle badge (`assets/logos/jelsert.png`) — caption "R&D + BRAND FILMS — CRAYOLA · HARLEY · JAMBA"
4. **USC IYA** — `#FFC72C` gold (cardinal collides with Edwards red; gold reads more distinct) — motif: Trojan "Fight On" V — insignia: cardinal "USC" (cropped from `assets/logos/usc.png`) **plus ΦΔΘ (Phi Delta Theta) in gold dots below it** — caption "HUMAN TECHNOLOGY INTERACTION · FIRST IN DEGREE · ΦΔΘ"
5. **EDWARDS LIFESCIENCES** — `#C8102E` red — motif: heart outline + valve ring at its inlet — insignia: Edwards "E" silhouette (samples `assets/logos/mono/edwards.png`, a white-on-alpha silhouette, tinted red) — caption "AI×XR TRAINING SYSTEMS · NOW"

### 🔧 OPEN TODOS (what Samuel wants fixed next — DO THESE, showing mockups each step)
1. **Background motifs still don't look good** — they read as vague dot-clouds, not clearly like a skyline / route / heart-valve / etc. Needs rework so each motif is recognizable but still subtle (~15% opacity, brand-tinted, behind the portrait). Don't over-clutter.
2. **Logos/insignias still look weird** — pixel-sampling PNGs is the root problem; fine linework (Edwards circle logo, UChicago full lockup, Jel Sert badge) turns to mush as dots. **Recommended fix: sample from the SVG path files instead** — `assets/logos/*.svg` already exist (edwards.svg, iya.svg, jelsert.svg, uchicago.svg, usc.svg). Rendering clean vector marks to a canvas and sampling those (or simplifying to iconic marks only) will make every insignia crisp at any size. This is the biggest quality lever.
3. **Show more of the headshot** — the portrait mask currently crops tightly (`radial-gradient(ellipse 42% 54% at 50% 44%, #000 36%, transparent 62%)` on `.layer`). Loosen the mask / enlarge the visible portrait so more of Samuel's face and shoulders show.
4. Keep tuning color so it stays creative/not gloomy (already moved from near-black to a blue-teal base with aurora — Samuel likes the aurora but wanted it off his face; it's now a rim glow at 68% of the stage).

### Key technical notes for whoever picks this up
- **Dot engine** is vanilla JS + 2D canvas in `mockup-d-sonar.html` (no libraries). Budgets: `WORD` (33%) / `LOGO` (24%) / `MOTIF` (22%) / rest = orbit. Morphs run on **wall-clock time** (`morphStart`), so they converge even if rAF throttles.
- **`window.__D`** debug hooks exist: `__D.setCi(n)`, `__D.rebuild()`, `__D.step()`, `__D.info()` — used to freeze/step states for screenshots.
- **Logo sampling** has two paths: colored PNGs (edge-detect + sparse fill) and `mono:true` white-silhouette PNGs (shape sample + brand tint). The SVG-path approach in TODO #2 would replace/augment these.
- **Motifs** are procedural point generators in the `motifs = {...}` object (skyline/route/pops/victory/valve). This is where TODO #1 work happens.
- **Verifying visuals:** the in-app browser preview throttles animation; to capture true frames, freeze the cycle (`for(i=1;i<99999;i++)clearInterval(i)`), call `__D.setCi(n)` + `__D.rebuild()`, wait ~2s, screenshot. A Playwright script (`shoot_sonar.py`) was used for this and works headless.

### The other three mockups (reference only — Sonar supersedes them, but the ideas feed it)
- `prototypes/mockup-a-instrument.html` — "The Instrument": submarine/HUD shell, boot log, reticle portrait, Path as calibration stages, bench-report case cards, hiring-manager signal strip. **Sonar inherited this shell + bench reports.** Samuel liked this one's vibe most, which is why D is built on it.
- `prototypes/mockup-b-one-signal.html` — "One Signal": one particle field morphing through 7 biography chapters (face → baseball seams → cell colony → scatter → alps → film → cube → valve). **Sonar inherited the dots**, but repurposed them to companies instead of the 7 abstract chapters (Samuel didn't love those 7).
- `prototypes/mockup-c-dossier.html` — "The Dossier": warm editorial archive, real photography, figure-numbered evidence spreads, text-only TET2 lab card. Warmest/most personal; hold its evidence-spread language for interior case-study pages later.

### Job target this is all aimed at
Neuralink **UI Design Engineer, BCI Applications** (and similar immersive/spatial internships). They explicitly want: Three.js/WebGPU proficiency (so the site itself is a work sample), end-to-end iteration shown (not just finals), systems thinking, and "obsessive attention to design detail and fluidity" (motion quality is graded). Edwards is intentionally demoted to ONE contact among five — **the focus is Samuel, not Edwards.** He'll be a student contractor there this year building AI-powered XR training for engineers to practice talking patients through device troubleshooting.

### Agreed roadmap (gated — nothing proceeds without Samuel's OK at each gate)
- **Phase 0 — Lock direction** (we're here; Sonar is the candidate, still being refined). Gate: Samuel says "lock D".
- **Phase 1 — Full-fidelity hero prototype** (SVG-path insignias, reworked motifs, more headshot, 60fps verified, reduced-motion stills, mobile layout). Prototype-only. Gate: Samuel approves the feel.
- **Phase 2 — Path + section system** on the prototype. Gate: side-by-side vs live.
- **Phase 3 — Case-study template** (one page, e.g. VR Baseball, judged vs SuzChews quality bar). Gate: approve → roll out one page at a time.
- **Phase 4 — Live merges**, section by section into `index.html`, before/after screenshots + rollback each time. Project-page deep content parked until overall design lands.

### 📋 STARTER PROMPT for the next session (copy-paste this)
```
You are design lead continuing Samuel Frausto's XR portfolio redesign.
Read FABLE_DESIGN_BRIEF.md — start with the "SESSION HANDOFF" section at the top.

We are iterating Direction D — "Sonar": prototypes/mockup-d-sonar.html
(view at http://localhost:4599/prototypes/mockup-d-sonar.html — dev server:
python3 .claude/devserver.py 4599)

RULES (do not break):
- Everything goes through me. Nothing is locked without my approval.
- No drastic changes before I see a mockup. Show me the change (screenshot or
  point me at localhost) before moving on.
- Never touch live index.html / style.css without my explicit OK. Prototype-first.
- Keep the localhost dev server running so I can watch iterations.

What I want to work on next (see OPEN TODOS in the handoff):
1. Fix the background motifs — they look like vague dot-clouds, not recognizable
   (skyline / travel route / heart+valve / etc). Make each subtle but readable.
2. Fix the logos/insignias — pixel-sampling PNGs looks mushy. Try sampling the
   SVG paths in assets/logos/*.svg instead, or simplify to clean iconic marks.
3. Show more of my headshot — loosen the portrait mask so more of my face/shoulders show.

Work only in prototypes/mockup-d-sonar.html unless I say otherwise. Show me
each iteration before continuing.
```

---

## How to continue here (Claude + Fable)

1. Open this repo in Claude Code, or paste this whole file into a Claude Project / chat.
2. Select **Fable** as the model.
3. Send the **Starter prompt** at the bottom of this file (copy-paste as-is).
4. Do **not** edit live `index.html` / `style.css` until Samuel explicitly approves a direction.
5. Prefer prototype pages + before/after screenshots before any merge to live.

Dev server (if needed): `python3 .claude/devserver.py 4599` → `http://localhost:4599`

Review queue already on disk: `http://localhost:4599/prototypes.html`

---

## Who Samuel is

- **Name:** Samuel Frausto  
- **Positioning:** XR Engineer & Spatial Designer  
- **School:** Human Technology Interaction @ USC Iovine & Young Academy (on track to be first to earn the degree)  
- **Flagship now:** Solo at Edwards Lifesciences building AI-powered VR training for clinicians (end-to-end: UX, 3D, code, adaptive AI)  
- **Path (chronological):** baseball + premed → UChicago cancer-immunology wetlab (TET2 / Kron Lab, symposium award) → injury + family health crisis → gap semester / Franklin University Switzerland / backpacking → Jel Sert internships (R&D + brand films: Crayola, Harley, Jamba) → USC IYA / spatial (VR baseball, IYH digital twin, Pavilia portals, SuzChews, Cyberpunk twin) → Edwards  
- **Toolkit:** Unity, Blender, Omniverse, visionOS, Meta Quest, Figma, C# / C++ / Python / Swift  
- **Contact:** samueljfrausto@gmail.com · [LinkedIn](https://www.linkedin.com/in/samuel-frausto/)

---

## Job target (design for this bar)

Primary internship target class: immersive / spatial / systems roles like  
https://neuralink.com/careers/apply/?gh_jid=6057476003&gh_src=c356a2533us  

Hiring managers in this class care about:

1. Systems thinking (loops, constraints, feedback)  
2. Spatial interaction literacy (designed for headset, not flat UI bolted into 3D)  
3. Technical authorship (shaders, physics, twins, pipelines he can explain)  
4. Human stakes (medicine / body / cognition — his path already has this)  
5. Craft under load (60fps, reduced-motion, mobile fallbacks)

Site job in 90 seconds: prove he thinks like someone who could build interfaces between people and machines — not just a pretty student portfolio.

---

## Inspiration sites (what he likes)

### 1. https://landonorris.com/
- Hero as living identity system  
- Exceptionally flowy / high-tech scroll  
- Accomplishments feel like moments in a race, not a résumé grid  
- Overall “vertical drive” polish  

### 2. https://www.ousmaneballondor.fr/
- Career told as chapters with proof objects  
- 3D jerseys + match clips = hold the artifact, don’t just read bio  
- Story of everything he’s done with emotional pacing  

### 3. https://datacurve.ai/
- Dots as narrative art that morph and tell stories without stock photos  
- Samuel has personal photos in `Pics_of_me/` that could become point clouds  

**Constraint:** Transfer the *mechanics and standards*, don’t costume-copy F1/football branding or vertical-only gimmicks.

---

## Current site state (what exists)

### Live (do not casually overwrite)
- `index.html` — homepage: Three.js portrait blob-reveal (`centerpiece.js`), logo stream, marquee, Now/Edwards section, Path story + `path-dots.js`, About, Contact  
- `style.css` — Syne + Instrument Serif + DM Mono; coral/teal accents; dark hero + warm About  
- `projects/suzchews/` — polished multi-page case study (gold standard for project pages)  
- Most other `projects/*.html` — unfinished templates with “ADD MEDIA” placeholders  
- Real images already in `assets/projects/` (vr-baseball, iyh-digital-twin, pavilia, cyberpunk-twin, jelsert-internship, etc.)  
- Portrait assets: `assets/portrait/headset.png`, `face.png`  
- Personal photos: `Pics_of_me/`  

### Branch / prototypes (Cursor work — reference only)
Branch: `immersive-evolution`

| File | What it is |
|------|------------|
| `prototypes.html` | Review queue index |
| `prototype-immersive.html` | Combined Phase 1 experiments |
| `prototype-hero-depth.html` | Hero parallax only |
| `hero-depth.js` | Cursor parallax layers |
| `scroll-travel.js` | Dolly / scroll-as-travel |
| `path-dots-morph.js` | Procedural glyph morphs per Path chapter |
| `now-system.js` | Animated training-loop diagram |
| `projects/*.v2.html` + `projects/case.css` | Case-study rebuilds (SuzChews-like) |
| | Done: VR Baseball, IYH Twin, Pavilia, Cyberpunk, Synesthesia, Pure Kick×Harley, Fla-Vor-Ice×Crayola, Jel Sert×Jamba |
| | **Parked:** TET2 research page — Anthropic content filter false-positive on poster imagery; rebuild later from written description only |

**Working agreement Samuel already set:**
1. Nothing edits live pages without approval  
2. Show what changes will look like beforehand  
3. One change at a time when merging  
4. Willing to drastically change the site if creativity + identity are strong enough  

---

## Earlier (non-Fable) brainstorm — not final

A previous Cursor pass suggested three directions:

1. **Narrative instrument** — Path + dots + proof objects (Dembele × Datacurve)  
2. **Demo-first lab** — live WebGL demos first, story secondary  
3. **Hybrid session** — Lando flow + Datacurve dots + Dembele proof objects  

It recommended (1) with pieces of (3) phased. **Treat that as a draft only.** Fable should critique and replace or refine it.

Suggested mechanics from that pass (re-evaluate):
- Headset-session scroll metaphor  
- Proof objects per Path chapter  
- Dot biography from `Pics_of_me`  
- Work vault instead of empty media templates  
- Hiring-manager “signal strip” near contact  
- Avoid: purple glow soup, cream+terracotta AI defaults, emoji cards, rotate-phone gimmicks  

---

## Open questions for Samuel (ask / resolve in Fable chat)

1. Direction: narrative instrument / demo-first / hybrid / something Fable invents?  
2. Sacred pieces: keep portrait reveal + Path copy, or full layout rebuild keeping content only?  
3. Media: Quest/Unity/Omniverse clips available soon, or stills + dots first?  
4. Tone: athlete-brand energy (Lando) vs research instrument (Datacurve / Neuralink)?  
5. Edwards: diagram-only vs any public footage allowed?  
6. How drastic a visual identity change vs evolving coral/teal + Syne/Instrument Serif?  

---

## Starter prompt (copy into Claude with Fable)

```
Read FABLE_DESIGN_BRIEF.md in this repo (or the pasted brief). You are design lead for my portfolio redesign.

Do NOT write or edit production code yet. Produce a creative strategy + phased roadmap only.

Requirements:
1. Critique landonorris.com, ousmaneballondor.fr, and datacurve.ai — what transfers vs what would be costume if copied onto my XR/medical/spatial story.
2. Propose 3 distinct creative directions for MY portfolio (named). For each: first viewport, scroll metaphor, how projects are proven, risk.
3. Recommend ONE direction for Neuralink-class immersive internship hiring, with rationale.
4. Propose 5–8 concrete signature mechanics tailored to my Path chapters and projects (specific proof objects).
5. List media I must gather.
6. Phased roadmap with approval gates (no big-bang rewrite of live index.html).
7. Ask me 4–6 clarifying questions before anything is locked.
8. Be opinionated. Kill AI-slop patterns.

I already have Cursor prototypes on branch immersive-evolution — treat them as optional reference, not sacred.

End with 3 short bullets I can reply to to lock the plan.
```

---

## After Fable locks a plan

Bring the agreed roadmap back to Cursor and say something like:

> “Fable plan agreed — implement Phase X only, prototype first, don’t touch live index until I approve.”

Paste Fable’s final direction summary into the chat (or save as `FABLE_PLAN_LOCKED.md`) so Cursor doesn’t re-litigate the creative call.

---

## File map (quick)

```
index.html              ← LIVE homepage (protect)
style.css               ← LIVE styles
centerpiece.js          ← portrait shader
path-dots.js            ← current path particles
projects/suzchews/      ← case-study quality bar
Pics_of_me/             ← candidate point-cloud sources
assets/projects/        ← project stills already on disk
prototypes.html         ← review queue
prototype-immersive.html
projects/*.v2.html      ← case study drafts (not live-linked)
FABLE_DESIGN_BRIEF.md   ← this file
```
