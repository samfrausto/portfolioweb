# Fable design brief — Samuel Frausto portfolio

Use this file as the single source of context when continuing design work in Claude with **Fable**. Do not treat older Cursor prototypes as final until this brief’s roadmap is agreed.

---

## ⭐ SESSION HANDOFF — READ THIS FIRST (last updated: 2026-07-27, end-of-session)

**Where we are:** Direction D — **“Sonar”** remains the active prototype direction. Desktop is stable and fully dot-rendered. Mobile has gone through a major fidelity and interaction pass and now uses dots selectively: crisp type and official identity artwork at rest, with a lightweight dot system that detaches from Samuel’s name and the current experience title during scroll and resolves into the threshold above Selected Work. The direction is **not locked** until Samuel explicitly approves it. Everything remains prototype-only; **live `index.html` and `style.css` have not been touched.**

### Files that matter now

1. Main responsive prototype:
   - `prototypes/mockup-d-sonar.html`
   - `http://localhost:4599/prototypes/mockup-d-sonar.html`
2. Desktop-accessible phone simulator, fixed at **390×844**:
   - `prototypes/mockup-d-sonar-phone.html`
   - `http://localhost:4599/prototypes/mockup-d-sonar-phone.html`

The phone simulator embeds the main responsive prototype, so edits to `mockup-d-sonar.html` automatically appear in both views.

Dev server command if needed:
`python3 .claude/devserver.py 4599`

Copy-ready continuation prompt:
- `CONTINUE_IN_CLAUDE.md`

### Non-negotiable working rules
1. **Everything goes through Samuel.** Nothing is locked without his approval.
2. **No drastic changes before he sees a mockup.** Show the change on localhost or by screenshot before continuing.
3. **Never edit live `index.html` / `style.css`** without Samuel's explicit approval.
4. Work only in `prototypes/mockup-d-sonar.html`, `prototypes/mockup-d-sonar-phone.html`, and related prototype assets unless Samuel says otherwise.
5. **Keep localhost running** on port 4599 so Samuel can watch iterations.
6. Do not commit unless Samuel explicitly asks. The 2026-07-27 checkpoint was explicitly requested so the next session can resume from it.

### Shared desktop/mobile hero state
- The hero now opens on **Edwards Lifesciences** while shuffle/auto mode remains active.
- Tagline beneath Samuel's name is:
  **“Looking to join a team designing what comes next.”**
- Main role label remains **XR ENGINEER & SPATIAL DESIGNER**.
- Tactical copy was softened:
  - `EXPERIENCE RECORD — CHAPTERS`
  - `ROLE // RESOLVED`
  - `RESOLVING DESIGNER UNDER HEADSET`
  - `VIEW SELECTED WORK ↓`
- The first selector control is a shuffle icon instead of `∞`.
- During auto mode, shuffle receives the main active style and the displayed record gets a secondary current-state style.
- Manual selection morphs and holds. Shuffle resumes auto-cycle without abruptly changing the current record.
- Headshot reveal works with hover on desktop and a class-driven tap transition on touch. Enter/Space also toggle it.
- Mobile tap feedback now includes a sonar ring kick, scan line, circular aperture, headset fade/blur, and uncovered-face resolve. The hint changes to `TAP HEADSHOT TO RESTORE HEADSET`.
- Reduced motion disables auto-cycle and morphing but preserves manual record switching.
- The first work proof remains **VR Baseball**, followed by IYH Digital Twin and Pavilia prototype cards.

### Desktop Sonar
- Desktop retains the full **9,000-particle dot-rendered identity system**.
- Company wordmarks/logos remain reconstructed from dots on the desktop.
- Edwards is the initial state.
- Selector is on the left and does not overlap the role/current-session card.
- Current records:
  1. UChicago Medicine
  2. Franklin Switzerland / FUS plus 14-country flag grid
  3. The Jel Sert Company plus Jel Sert, Otter Pops, Fla-Vor-Ice, and Pure Kick
  4. USC Iovine and Young Academy plus USC and Phi Delta Theta
  5. Edwards Lifesciences
- Desktop layout and desktop logo system should not be redesigned during the current mobile review unless Samuel asks.

### Mobile Sonar — latest state

The site automatically switches to mobile behavior at **900px wide or below**. Touch/hover capability detection also updates on resize/device changes.

Mobile uses a deliberate **hybrid resolved state**:
- Samuel’s name and the current experience title remain crisp, solid, legible type with a restrained dotted signal echo behind them.
- A **600-dot mobile-only transition** is sampled from those two type blocks: 360 dots from `SAMUEL FRAUSTO`, 240 from the active experience title.
- As the page scrolls, the two dot sources peel away as controlled curved ribbons, merge through the compressed descent, and settle into a dotted horizontal threshold immediately above `02 — SELECTED WORK`.
- The broad 2,800-particle ambient portrait cloud was removed from mobile. Dots now have a specific narrative job instead of contaminating the portrait, logos, and text.
- The portrait retains sonar rings, glow, crosshairs, and the new scan/reveal interaction, but not an ambient dot cloud.
- Official identity artwork inside the experience card uses a dedicated high-resolution mobile canvas. This replaced tiny dot-resampled mobile logos because they looked inaccurate and blurry.
- Desktop remains fully dot-rendered; the high-resolution identity renderer is mobile-only.

The mobile hero order is:
1. Samuel's role, name, and recruiting line
2. Compact headset portrait with tap-to-reveal
3. Unified experience card containing:
   - experience record number,
   - concise mobile title and context,
   - official resolved identity artwork,
   - role text
4. 44px record selector
5. `VIEW SELECTED WORK ↓`

Mobile identity arrangements:
- **UChicago:** official UChicago Medicine lockup.
- **Franklin:** official Franklin Switzerland lockup plus all 14 flags in a centered **5 / 5 / 4** layout. Each flag sits in a consistent slot while preserving its real aspect ratio. The flags are fully contained and no longer clipped or stretched into one strip.
- **Jel Sert:** weighted composition using official Jel Sert, Otter Pops, Fla-Vor-Ice, and Pure Kick artwork. Jel Sert and Fla-Vor-Ice were enlarged; Otter Pops remains prominent; Pure Kick is secondary.
- **USC:** IYA and USC were enlarged and given primary visual weight; Phi Delta Theta remains present as the secondary mark.
- **Edwards:** official Edwards mark.

Mobile-only concise titles are used where the artwork already carries the complete institution name:
- `FRANKLIN SWITZERLAND`
- `USC IOVINE & YOUNG`

### Mobile fit and performance
- At **390×844**, all five states fit the complete hero, experience card, official identities, role, selector, and work cue inside one screen.
- A special compact breakpoint also fits the full experience at **320×700**.
- Mobile scroll-transition particle budget is **600**, down from desktop’s 9,000.
- All mobile identity assets preload so a first tap does not show an empty identity panel.
- The portrait and experience card are layered above the mobile transition canvas so dots travel behind interactive/fidelity-critical content.
- Static dotted echoes fade as the canvas dots peel away, preventing a duplicated/noisy type treatment.
- The mobile descent is compressed before Selected Work.

### Verification completed
- `npm run build` passes.
- JavaScript syntax check passes.
- HTML parsing passes for both prototype files.
- Local asset-reference checks pass.
- `git diff --check` passes.
- Verified at:
  - 1440×900 desktop
  - 1280×800 short laptop
  - 390×844 phone
  - 320×700 small phone
  - reduced-motion mode
- Tested:
  - manual record selection and hold,
  - shuffle resume,
  - current-record state during auto mode,
  - real emulated touch on the portrait (headset → face → restore),
  - keyboard reveal,
  - Selected Work anchor,
  - all record assets preloaded.
- The dot transition was visually reviewed at real mobile scroll positions. It forms a visible signal band through the descent and resolves into the threshold above Selected Work.

### Important Chrome testing caveat

Do **not** repeatedly launch `/Applications/Google Chrome.app` as a child of Node for screenshots on this Mac. Those temporary automation launches triggered macOS Chrome crash reports in `HIServices` during `_RegisterApplication → TransformProcessType`; the crash reports showed `Parent Process: node`. This was a test-runner startup issue, not a prototype crash.

For the next session:
- Prefer the existing browser/in-app browser or Samuel’s manually opened localhost tab.
- Reuse one browser session when visual testing is necessary.
- Do not treat a `Parent Process: node` Chrome crash report as a site regression.
- The Python localhost server itself is safe and should remain running on port 4599.

### Prototype assets included in this checkpoint
These files are required by the current Sonar prototype. Do not delete them:
- `assets/logos/fus.png`
- `assets/logos/otter-pops.webp`
- `assets/logos/otter-pops-hi.png`
- `assets/logos/fla-vor-ice.png`
- `assets/logos/fla-vor-ice-hi.png`
- `assets/logos/pure-kick.svg`
- `assets/logos/pure-kick-hi.png`
- `assets/logos/phi-delta-theta-greek.png`
- `assets/logos/phi-delta-theta-sword-shield.png`
- `assets/logos/phi-delta-theta-horizontal.png`
- `assets/logos/phi-delta-theta-coa.png` — downloaded reference card, not useful artwork
- `prototypes/mockup-d-sonar-phone.html`

### Current approval gate / next task
**First:** Samuel should inspect the latest phone preview and review:
- **Resting typography:** solid, fully legible name/title with the restrained dotted echo behind it.
- **Scroll transition:** dots should leave the name and experience title, follow two controlled ribbons, and merge into the threshold above Selected Work.
- **Portrait tap:** the headset should visibly resolve into Samuel’s uncovered face with a satisfying sonar/scan effect, then reverse on the next tap.
- **Franklin:** all 14 flags should be visible, proportionally correct, and contained.
- **Jel Sert:** verify the larger Jel Sert and Fla-Vor-Ice weighting alongside Otter Pops and Pure Kick.
- **USC:** verify the enlarged IYA and USC marks, with Phi Delta Theta secondary.
- Confirm the complete hero still feels usable rather than over-compressed at 390×844 and 320×700.

Do not call this mobile treatment final without Samuel's approval.

If Samuel approves the hero/mobile system, the next development phase should be the responsive homepage below it:
1. Design a mobile-first **Selected Systems** section.
2. Lead with Edwards/current human-critical work.
3. Follow with VR Baseball/embodied performance.
4. Then show IYH Digital Twin or Pavilia/spatial experiences.
5. Continue prototype-first before any live merge.

### Roadmap — still gated
- **Phase 0 — Lock Sonar direction and responsive hero:** current phase.
- **Phase 1 — Responsive Selected Systems/homepage narrative:** after Samuel approves the hero.
- **Phase 2 — Reusable case-study system.**
- **Phase 3 — Production/performance/accessibility pass.**
- **Phase 4 — Live merge into `index.html` / `style.css`, one approved section at a time.**

### 📋 STARTER PROMPT for the next session
```text
You are design lead continuing Samuel Frausto's XR portfolio redesign.
Read FABLE_DESIGN_BRIEF.md and CONTINUE_IN_CLAUDE.md. Begin with the SESSION HANDOFF dated 2026-07-27.

We are iterating Direction D — “Sonar.”

Main responsive prototype:
http://localhost:4599/prototypes/mockup-d-sonar.html

Desktop phone simulator at a true 390×844 viewport:
http://localhost:4599/prototypes/mockup-d-sonar-phone.html

Dev server if needed:
python3 .claude/devserver.py 4599

RULES:
- Everything goes through me. Nothing is locked without my approval.
- Do not make drastic changes before showing me a mockup.
- Never touch live index.html or style.css without my explicit approval.
- Work only in prototypes/mockup-d-sonar.html, prototypes/mockup-d-sonar-phone.html, and related prototype assets unless I say otherwise.
- Keep localhost running.
- Do not commit unless I explicitly ask.

CURRENT STATE:
- Desktop Sonar remains fully dot-rendered and opens on Edwards with shuffle active.
- Mobile automatically activates at 900px or below.
- Mobile now fits the complete hero, experience card, identity artwork, selector, and work cue in 390×844; there is also a 320×700 compact breakpoint.
- Mobile no longer uses the broad ambient particle cloud. Name and experience title are crisp text with restrained dotted echoes.
- A 600-dot mobile canvas samples the name/title. On scroll, two curved ribbons detach and merge into a dotted threshold above Selected Work.
- The portrait uses sonar rings and a class-driven tap reveal with a scan line, ring kick, aperture, and headset-to-face transition.
- Franklin's 14 flags use a centered 5/5/4 proportion-aware grid.
- Jel Sert uses a weighted official-artwork composition with larger Jel Sert and Fla-Vor-Ice.
- USC uses larger IYA and USC marks with Phi Delta Theta secondary.
- The shared line beneath my name is: “Looking to join a team designing what comes next.”
- Manual selection holds and morphs; shuffle resumes auto-cycle; reduced motion and keyboard/touch controls have been tested.
- Live index.html/style.css have not been touched.
- Avoid spawning separate Node-launched Google Chrome instances for screenshots on this Mac; use the existing browser/manual localhost tab.

START HERE:
1. Review the latest desktop and phone previews without editing.
2. On the phone preview, test the resting dotted echoes, slow-scroll transition into Selected Work, and portrait tap/reverse.
3. Inspect all five records—especially Franklin flags, the four Jel Sert logos, and the USC/IYA/Phi Delta Theta composition.
4. Give me a concise visual/UX assessment. Do not edit until I respond.
5. Ask for my approval before treating the mobile hero as final or beginning the Selected Systems section.
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
