# Continue Samuel Frausto's Sonar portfolio redesign in Claude

Copy and paste the prompt below into a new Claude/Fable session.

```text
You are design lead FINISHING Samuel Frausto's XR portfolio redesign (Direction D — "Sonar").
Prefer Fable for design decisions. The exploration is over; this session is about closing
out the remaining items and shipping.

Before doing anything:
1. Read CLAUDE.md — especially "the governing technical insight" and the rejected-subjects list.
2. Skim the top handoff entry in FABLE_DESIGN_BRIEF.md (dated 2026-08-04,
   "RELAY v5 · PAGE BUILT · HEART SITE LIVE"). Everything below it is history.
3. Review the working tree on branch immersive-evolution. Do not commit or push unless I ask.

Previews (dev server: python3 .claude/devserver.py 4599):
- Main prototype (the page):  http://localhost:4599/prototypes/mockup-d-sonar.html
- Before-copy for A/B:        http://localhost:4599/prototypes/mockup-d-sonar-prepage.html
- 3D relay alone:             http://localhost:4599/prototypes/relay-3d-mock.html
- Phone (390x844):            http://localhost:4599/prototypes/mockup-d-sonar-phone.html
- Heart site (DONE, live):    http://localhost:4599/projects/heart-valve/app/

=== HARD CONSTRAINTS ===
- DEADLINE: Wednesday 2026-08-05.
- I am LOW ON USAGE CREDITS. This governs how you work:
  * Do NOT spawn subagents unless I ask for one.
  * Do NOT run screenshot -> tweak -> screenshot visual loops. I review on my own screen;
    you make changes in one pass from my written feedback.
  * Batch your questions. Ask everything you need in one message.
  * Verify headlessly. Recipe below.
  * The in-app browser pane drops canvas content after scrolling and wedges often.
    Do not fight it. Verify logic headlessly and let me look.
- Everything goes through me. Nothing is final without my approval.
- Do NOT rewrite live index.html / style.css without my explicit go-ahead in this session.
- Otherwise work in prototypes/ and related prototype assets.
- Keep localhost:4599 running. Do not commit or push unless I explicitly ask.
- Mobile (<=900px) hero/relay is approved and is currently BYTE-IDENTICAL to the
  before-copy. Do not redesign it.

=== WHAT IS DONE ===

THE RELAY. Geometry + render loop live in prototypes/relay-engine.js, mounted by BOTH
prototypes/relay-3d-mock.html and the page — one copy, they cannot drift. Do not re-inline it.
Relay.mount({pin, stage, canvas, chapters, hud, jump, meta, tog, swp, cx});
chapters[i].cloud is a key into Relay.CLOUDS = headset | heart | waypoints | gum.
Four chapters, 1500 dots, scroll scrubs both the morph and a bounded +/-32 degree rotation
around a 3/4 view.
  01 VR HEADSET        — APPROVED.
  02 ANATOMICAL HEART  — APPROVED.
  03 NAVIGATION PIN + ROUTE (v5) — rebuilt; ASK ME whether it is approved before touching it.
  04 GUMBALL MACHINE   — APPROVED. The flower is fine at 5 petals x 11 dots. DO NOT TOUCH IT.
SONAR SWEEP — STAYS. Settled, do not re-litigate.

THE PAGE, built in prototypes/mockup-d-sonar.html:
  01 HERO             dot identity system + headset/face reveal. The 1024x1024 pair must NOT
                      be swapped. Dots leave the hero and run straight into the relay.
  02 SELECTED SYSTEMS pinned 3D relay + a STICKY RAIL on the left carrying my portrait
                      (assets/portrait/about.jpg) and NOW / SCHOOL / BEFORE. Below the pin,
                      the same four projects as cards.
  03 ALL PROJECTS     full-width band that opens the rest of the pile inline (9 case files).
  04 PROFICIENCIES    screener-grade grid: Engines / 3D / XR platforms / Languages / Design.
  05 THE PATH         my chronological register. Context, not the argument.
  06 CONTACT

ONE PLACE TO EDIT. The last script block in the page defines SYSTEMS, BIO, PROF and ALL.
SYSTEMS drives the relay chapters, the relay HUD and the four cards — the cards are
GENERATED, so there is no third place to forget. Swapping a featured project is editing one
object. Keep it that way; that swappability is a requirement, not a nicety.

THE HEART SITE IS FINISHED and live at projects/heart-valve/app/, linked from the SYS 02
card. Do not rebuild it unless I say I have changed Alma.

=== WHAT IS LEFT — this is the session's work ===
1. Relay chapter 03. Ask me for the verdict first. If I approve it, it is closed. This is the
   fifth attempt at this icon — re-read the rejected list before you touch anything.
2. SUZCHEWS LOGO, ATTEMPT 4. Three rejected. Diagnosis: all were thin monoline icons with
   NO MASS. Real logos carry weight and need a proper mark + wordmark lockup. Must read
   unmistakably as GUM, must have mass, and should build on the YELLOW FLOWER that already
   appears on the chapter-04 gumball machine — keep the two consistent. Case study at
   projects/suzchews/ is the quality bar (cream #F7F2EC, text #2C1F1A, coral #C26070,
   amber #C08040, teal #4E8A7A; Syne + Instrument Serif + DM Mono). Show concepts side by
   side; do not commit to one without me.
3. MOBILE PASS on the sections added most recently — the bio rail, 03 ALL PROJECTS, 04
   PROFICIENCIES, 06 CONTACT. They have mobile CSS but I have not reviewed them on the phone
   sim. The hero and the <=900 relay above them are approved: leave those alone.
4. THREE BITS OF SURVIVING VOICE I may want cut — ask me: the descent line "Every chapter
   reorganizes into the next system he builds", the section title "Four systems. One signal,
   relayed.", and the card-grid label "THE SAME FOUR, ON THE RECORD."
5. GOING LIVE. The live site is still the OLD design; the prototype is a full replacement.
   Do not start this without my explicit go-ahead. When I give it, see the deploy notes below.
6. If there is time: the TET2 research page (projects/tet2-research.html) still needs a
   rebuild. Build it from the WRITTEN description only — do not analyse the poster image,
   it trips content filters.

=== DEPLOY NOTES — READ BEFORE GOING LIVE ===
Deploy is Vercel: vercel.json runs `npm run build`, and that script in package.json copies an
EXPLICIT WHITELIST of files into dist/. prototypes/ is not on it and neither is
relay-engine.js. If the prototype ships without that list being updated, the site deploys
missing its scripts — this has already happened once (commit 5269e52, "Include centerpiece.js
and path-dots.js in build output"). Whatever files the new index.html needs MUST be added to
that cp line. `cp -R projects dist/projects` already carries the heart site, so that is fine.
.gitignore excludes dist/ — never rename projects/heart-valve/app back to dist/.

=== READ THIS BEFORE YOU TOUCH ANY ICON ===
The renderer draws CURVATURE, NOT OBJECTS. A ring of dots around a curved surface produces a
silhouette that CHANGES as the form swings, and that change is what the eye reads as volume.
Anything flat or boxy merely SHEARS, which reads as jitter — that is why three separate
building icons all "looked weird," and why adding detail never helped. Every icon must be a
doubly-curved form with interior structure the rotation reveals. Separately: 1500 dots is a
hard fidelity floor; a human face is far below it and will read as a mask however well it is
modelled.

AND THE SECOND LESSON, from chapter 03: an icon can rotate perfectly and still fail. The
waypoint field (six viewpoint spheres) turned correctly but I could not tell it was a
waypoint/map — that failure was LEGIBILITY, not motion, and more detail would have made it
worse. Diagnose which of the two failures you have before you rebuild anything.

ALREADY REJECTED — do not propose again:
  Motion: spring/flocking physics, bouncy motion, cursor wake/hover repulsion, comet or
  tendril tails, constellation edges between dots, ping-only transitions where dots never
  leave the hero, fake depth gauges or invented data, unbounded rotation, vh-based scroll
  math. Bar: deterministic, scroll-scrubbed, eased, reversible. datacurve.ai is the reference.
  SYS 03 subjects: walled box; LiDAR scan-slice stack; exploded floor-plate axonometric;
  waypoint field (six viewpoint spheres).
  SYS 04 subjects: gum pouch + bitten disc; abstract chew + flavour curve; mouth blowing a
  bubble; tongue / papillae.
  THE CASE section, and the three-claim pitch. I had it built and then scrapped it. Do not
  re-propose claims or a positioning line.
  There is NO Coliseum project in this repo. Do not feature work I have not done.

COPY RULE — applies to everything on the page. State what the project IS, directly. No
storytelling, no origin stories; there is no space for it. Every "THE STAKES / THE BET /
THE POINT / ORIGIN" line has been deleted. Relay headlines are the plain identity of the
thing (SYS 04 is "Chewing Gum for Chemo-Induced Taste Loss", not "Gumball Machine").

Edwards line, LOCKED, use verbatim:
  IN DEVELOPMENT - Immersive clinical training that doubles efficiency and halves patient
  call time - built solo to absorb a growing business unit.

Featured four: (01) Edwards AI VR clinical training, (02) Heart Function Informational Site,
(03) IYH Digital Twin, (04) SuzChews.
IYH STAYS. Read projects/iyh-digital-twin.v2.html before you write a word about it: the
class modelled the building; my three-person sub-team owns the DELIVERY layer — one twin
walkable on Web, Meta Quest and Vision Pro, with Google-Maps-style waypoint navigation.

=== HEADLESS VERIFICATION (do this instead of screenshots) ===
Relay: run prototypes/relay-engine.js through node's vm module with a `window` stub, call
Relay.CLOUDS[k]() directly, and assert — syntax passes (node --check), no non-finite
coordinates, every cloud fit()s to exactly 1500, tag 3 (yellow) appears ONLY in `gum`, and
the diagonal extent + density-weighted vertical centre roughly match across all four
chapters (mismatched extents make one chapter render visibly bigger).
Last known-good: diagonals 2.26 / 2.26 / 2.30 / 2.20, centre spread 0.114.
Page: node --check each inline <script>, check for duplicate ids, confirm every link and
asset path resolves on disk, and diff the @media(max-width:900px) block and the hero markup
against prototypes/mockup-d-sonar-prepage.html — they must stay byte-identical.

=== TWO FIXES NOT TO UNDO ===
- body{overflow-x:clip}, NOT hidden. `hidden` makes <body> a scroll container and silently
  breaks every position:sticky descendant — the pinned relay and the bio rail both die.
- The pinned relay is display:none under 900px AND its render loop early-outs on
  stage.offsetParent === null, so phones pay nothing for it.

=== ALMA / HEART SITE (done — only if I say I have changed it) ===
Source of truth is github.com/samfrausto/Alma. The portfolio holds ONLY the built static
output, no nested .git or node_modules. Refresh:
  cd ~/Alma && git pull && npm install && npm run build -- --base=./
  rm -rf "<portfolio>/projects/heart-valve/app"
  mkdir -p "<portfolio>/projects/heart-valve/app"
  cp -R dist/. "<portfolio>/projects/heart-valve/app/"
GOTCHA, ALREADY HIT ONCE: any HARDCODED asset path in Alma source breaks in the portfolio
copy. Vite rewrites the URLs it generates when you build with --base, but it cannot rewrite
a string literal. src/scene/heartModel.ts used '/models/heart-base-v2.glb' (root-absolute),
correct on samfrausto.com and a 404 under /projects/heart-valve/app/ — the model silently
never loaded. Fixed to `${import.meta.env.BASE_URL}models/heart-base-v2.glb`. Route any new
runtime asset (texture, HDRI, audio) through BASE_URL the same way. This was NOT a gitignore
problem: the shipped .glb is tracked, and Final_Heart_3d_Models/ is gitignored on purpose
(licensed 3D4SCI source art — see CREDITS.md).

=== START HERE ===
Send me ONE message that asks for: my verdict on relay chapter 03, my call on the three bits
of surviving voice, and whether you have my go-ahead to merge the prototype into the live
index.html / style.css. Then start on the SuzChews logo concepts while you wait.
```
