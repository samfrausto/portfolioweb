# Continue Samuel Frausto’s Sonar portfolio redesign in Claude

Copy and paste the prompt below into a new Claude/Fable session.

```text
You are design lead continuing Samuel Frausto’s XR portfolio redesign.

Before doing anything:
1. Read FABLE_DESIGN_BRIEF.md.
2. Begin with the SESSION HANDOFF dated 2026-07-27.
3. Read CLAUDE.md.
4. Review the current git branch and working tree, but do not commit unless I explicitly ask.

We are iterating Direction D — “Sonar.”

Main responsive prototype:
http://localhost:4599/prototypes/mockup-d-sonar.html

Desktop phone simulator at a true 390×844 viewport:
http://localhost:4599/prototypes/mockup-d-sonar-phone.html

Dev server if needed:
python3 .claude/devserver.py 4599

NON-NEGOTIABLE RULES:
- Everything goes through me. Nothing is locked without my approval.
- Do not make drastic changes before showing me a mockup.
- Never touch live index.html or style.css without my explicit approval.
- Work only in prototypes/mockup-d-sonar.html, prototypes/mockup-d-sonar-phone.html, and related prototype assets unless I say otherwise.
- Keep localhost running.
- Do not commit or push unless I explicitly ask.
- Avoid repeatedly spawning separate Google Chrome processes from Node for screenshots on this Mac. They caused macOS Chrome crash dialogs during application registration. Prefer the existing browser/manual localhost tab.

CURRENT CHECKPOINT:
- Desktop Sonar remains fully dot-rendered with 9,000 particles and opens on Edwards Lifesciences with shuffle active.
- Desktop composition and desktop identity marks should not be redesigned during this mobile approval pass.
- Mobile activates at 900px or below and fits at both 390×844 and 320×700.
- Mobile removed the noisy broad ambient particle cloud.
- Samuel’s name and the active experience title are crisp solid type with restrained dotted signal echoes.
- A lightweight 600-dot mobile canvas samples those two text blocks: 360 dots from SAMUEL FRAUSTO and 240 from the active experience title.
- When scrolling, the two dot groups leave the type as controlled curved ribbons, travel behind the portrait/card, merge through the compressed descent, and settle into a dotted horizontal threshold immediately above “02 — SELECTED WORK.”
- The portrait tap effect is class-driven and visibly switches the headset image to Samuel’s uncovered face using a ring kick, scan line, expanding aperture, fade/blur, and updated restore hint. The next tap reverses it.
- Official mobile identities remain high-resolution canvas artwork rather than tiny dot-resampled logos.
- Franklin uses the official lockup plus all 14 flags in a centered, proportion-aware 5/5/4 slot grid.
- Jel Sert uses official Jel Sert, Otter Pops, Fla-Vor-Ice, and Pure Kick artwork in a weighted composition; Jel Sert and Fla-Vor-Ice were enlarged.
- USC uses larger IYA and USC marks with Phi Delta Theta secondary.
- Manual record selection holds; shuffle resumes auto-cycle; current-state styling remains distinct.
- Reduced motion, keyboard/touch controls, Selected Work anchor, and asset preloading have been addressed.
- Shared recruiting line: “Looking to join a team designing what comes next.”
- Live index.html and style.css have not been touched.

START HERE — REVIEW BEFORE EDITING:
1. Open the latest desktop and phone previews.
2. On mobile, inspect the resting dotted echoes around the name and active experience title.
3. Slowly scroll from the hero into Selected Work. Judge whether the two-source dot ribbons feel intentional, stay behind the important content, and resolve cleanly into the threshold above the section heading.
4. Tap the portrait, confirm the headset-to-face effect is visible and satisfying, then tap again to restore it.
5. Switch through all five records.
6. Pay special attention to:
   - Franklin: all 14 flags, proportions, spacing, and containment.
   - Jel Sert: larger Jel Sert and Fla-Vor-Ice, plus Otter Pops and Pure Kick.
   - USC: larger IYA and USC, with Phi Delta Theta secondary.
7. Give me a concise visual/UX assessment. Do not edit until I respond.
8. Ask for my approval before calling the mobile hero final or beginning the Selected Systems section.

IF I APPROVE THE HERO:
- Begin a mobile-first Selected Systems prototype below it.
- Lead with Edwards/current human-critical work.
- Follow with VR Baseball/embodied performance.
- Then IYH Digital Twin or Pavilia/spatial experiences.
- Continue prototype-first; do not merge into live files.
```

## Files in the checkpoint

- `prototypes/mockup-d-sonar.html`
- `prototypes/mockup-d-sonar-phone.html`
- `FABLE_DESIGN_BRIEF.md`
- `CLAUDE.md`
- Mobile identity assets under `assets/logos/`

## Expected branch

`immersive-evolution`

## Last known validation

- `npm run build`
- Inline JavaScript syntax check
- HTML parsing for both prototype files
- `git diff --check`
- Localhost listening on port 4599
- Real-scroll mobile review confirmed the dot band resolves above Selected Work
- Real touch-emulation review confirmed portrait headset → face → restore
