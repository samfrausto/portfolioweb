# Continue Samuel Frausto's Sonar portfolio redesign in Claude

Copy and paste the prompt below into a new Claude/Fable session.

```text
You are design lead FINISHING Samuel Frausto's XR portfolio redesign (Direction D — "Sonar").
Prefer Fable for design decisions. The exploration is over; this session is about closing
out the remaining items and shipping.

Before doing anything:
1. Read CLAUDE.md.
2. Read this whole prompt. It supersedes the top handoff entry in FABLE_DESIGN_BRIEF.md,
   which is now out of date (it predates relay v6, the copy rewrite and the page changes).
3. Review the working tree on branch immersive-evolution. Do not commit or push unless I ask.

Previews (dev server: python3 .claude/devserver.py 4599):
- Main prototype (the page):  http://localhost:4599/prototypes/mockup-d-sonar.html
- Before-copy for A/B:        http://localhost:4599/prototypes/mockup-d-sonar-prepage.html
- 3D relay alone:             http://localhost:4599/prototypes/relay-3d-mock.html
- Phone (390x844):            http://localhost:4599/prototypes/mockup-d-sonar-phone.html
- Heart site (DONE, live):    http://localhost:4599/projects/heart-valve/app/
- SuzChews logo sheet:        http://localhost:4599/prototypes/suzchews-logo-v4.html

=== HARD CONSTRAINTS ===
- DEADLINE: ask me. The old one was 2026-08-05 and has passed.
- I am LOW ON USAGE CREDITS. This governs how you work:
  * Do NOT spawn subagents unless I ask for one.
  * Do NOT run screenshot -> tweak -> screenshot visual loops. I review on my own screen;
    you make changes in one pass from my written feedback.
  * Batch your questions. Ask everything you need in one message.
  * Verify headlessly. Recipes at the bottom.
  * The in-app browser pane drops canvas content after scrolling and wedges often.
    Do not fight it. Verify logic headlessly and let me look.
- Everything goes through me. Nothing is final without my approval.
- Do NOT rewrite live index.html / style.css without my explicit go-ahead in this session.
- Otherwise work in prototypes/ and related prototype assets.
- Keep localhost:4599 running. Do not commit or push unless I explicitly ask.
- The <=900px hero and relay are approved. Leave them alone.

=== WHAT IS DONE — do not redo ===

THE RELAY. Geometry + render loop live in prototypes/relay-engine.js, mounted by BOTH
prototypes/relay-3d-mock.html and the page — one copy, they cannot drift. Do not re-inline it.
Relay.mount({pin, stage, canvas, chapters, hud, jump, meta, tog, swp, cx});
chapters[i].cloud is a key into Relay.CLOUDS = headset | heart | waypoints | gum.
1500 dots; scroll scrubs both the morph and a bounded +/-32 degree rotation.
  01 VR HEADSET                                   — APPROVED
  02 ANATOMICAL HEART                             — APPROVED
  03 TWO CURVED DECKS + WAYPOINT PINS + ROUTE (v6)— APPROVED
  04 GUMBALL MACHINE                              — APPROVED. The flower is fine at
                                                    5 petals x 11 dots. DO NOT TOUCH IT.
SONAR SWEEP — STAYS. Settled, do not re-litigate.

THE PAGE, built in prototypes/mockup-d-sonar.html:
  01 HERO / 02 SELECTED WORK / 03 ALL PROJECTS / 04 SKILLS / 05 BACKGROUND / 06 CONTACT
- The descent section is gone; the hero runs straight into SELECTED WORK.
- Hero dots resolve into the same form the relay draws, then fade out as the relay fades in.
- The four repeated project cards are SCRAPPED. The featured four now lead ALL PROJECTS,
  flagged FEATURED, with IYH de-duplicated. 12 entries, open by default.
- A phone-only compact list (.sys-mobile) carries the four systems, because the relay is
  display:none under 900px and the section would otherwise be an empty heading.
- Resume buttons in the status bar and in CONTACT -> assets/Samuel_Frausto_Resume.pdf.

ONE PLACE TO EDIT. The last script block defines SYSTEMS, BIO, PROF and ALL. SYSTEMS drives
the relay chapters, the relay HUD, the phone list AND the featured rows of the index.
Swapping a featured project is editing one object. Keep it that way — that swappability is a
requirement, not a nicety.

THE HEART SITE IS FINISHED and live at projects/heart-valve/app/. Do not rebuild it unless I
say I have changed Alma.

=== WHAT IS LEFT ===
1. SUZCHEWS LOGO — FINALISE. I picked the plain gumball-machine mark with the SuzChews
   wordmark directly underneath it. Three proportions are already built and waiting on
   prototypes/suzchews-logo-v4.html under "The lockup":
     A - Matched  (wordmark tracked to the width of the machine's foot; the recommendation)
     B - Wide     (wordmark overhangs, machine reads as a crown)
     C - Matched + descriptor
   ASK ME which. Letters INSIDE the mark (seal / glass label / pedestal plate) were rejected
   and are kept on that page only as a record. Once I pick: produce standalone SVG files, the
   favicon set (mark alone — a stacked lockup smears at 16px), and wire the header lockup into
   projects/suzchews/.
2. MOBILE DOTS. I want the phone dots doing the same thing on scroll as the desktop ones.
   There is a real fork here and you must ASK ME: desktop's behaviour is dots dissolving into
   the relay, but the relay is display:none under 900px AND its render loop early-outs on
   stage.offsetParent === null so phones pay nothing for it. Matching it means either showing
   the relay on mobile, or giving the mobile dots a relay-SHAPED landing without the relay.
3. MOBILE REVIEW of the bio rail, ALL PROJECTS, SKILLS and CONTACT. The CSS is written and
   audited but I have not looked at it on the phone sim.
4. GOING LIVE. The live site is still the OLD design; the prototype is a full replacement.
   Do not start this without my explicit go-ahead. See deploy notes below.
5. TET2 research page (projects/tet2-research.html) still needs a rebuild. Build it from the
   WRITTEN description only — do not analyse the poster image, it trips content filters.
6. Dead code I have not ruled on: benchHTML() and the media/metrics fields in SYSTEMS are
   unused since the cards were scrapped, kept so the cards are one line away. Prototype chrome
   ("SONAR — MOCKUP D", "MOCKUP D — SONAR · NOT LIVE") is also still there and disappears on
   merge. Ask before stripping either.

=== THE FOUR THINGS THAT WILL BITE YOU ===

1. THE RENDERER DRAWS CURVATURE, NOT OBJECTS. A ring of dots around a curved surface produces
   a silhouette that CHANGES as the form swings, and that change is what the eye reads as
   volume. Anything flat or boxy merely SHEARS, which reads as jitter — that is why three
   separate building icons all "looked weird", and why adding detail never helped. Every icon
   must be a doubly-curved form with interior structure the rotation reveals. Separately,
   1500 dots is a hard fidelity floor: a human face is far below it and will read as a mask
   however well it is modelled.

2. AN ICON CAN ROTATE PERFECTLY AND STILL FAIL. Chapter 03's waypoint field turned correctly
   but I could not tell it was a waypoint/map. That failure was LEGIBILITY, not motion, and
   more detail would have made it worse. Diagnose which of the two failures you have before
   you rebuild anything.

3. THE RELAY FRAME IS A THREE-WAY GEOMETRIC BUDGET — text panel + dot cloud + jump index must
   fit the stage width. Side by side this works down to about a 980px stage; below that the
   arithmetic fails (a 340px panel + a 400px cloud + the index is more than 747px), which is
   why the panel used to sit on top of the dots on smaller screens. So the frame has TWO MODES:
     side by side (stage >= 980): cx 0.645, S = min(W,H) * 0.278,
                                  panel 33% (36%, cap 430px, above a 1400px viewport)
     stacked     (stage <  980): cx 0.50, cy 0.655H, S = min(W*0.28, H*0.225),
                                  panel across the top at min(620px, 88%)
   NARROW_W = 980 is defined ONCE in relay-engine.js and exported. layout() mirrors the
   decision onto the stage as .is-narrow and the CSS keys off that class, so CSS and canvas
   cannot disagree at a boundary. window.__relayCX and these same factors ALSO appear in the
   page's hero-dot handoff (layout() in the dots script). Change one without the others and
   the handoff falls out of register and the overlap comes back. Verified clear at 15 viewport
   sizes; worst clearance 7px at 901x650.

4. THERE ARE TWO STREAM BUILDERS. buildStream() (desktop) and buildMobileStream(). The mobile
   one OVERWRITES tB from inside buildRecord()'s if(W<=900){...return;} branch. Edit the dots
   without knowing this and you will change desktop and wonder why the phone did not move.

   Also: tag 2 — "the glide" — was only ever a COLOUR. Nothing in the render loop ever moved
   it. Chapter 03's traveller is tag 5 plus an arc-length in SLOT 6 of each point, and the
   render loop runs a scrubbed bead along it (behind = travelled and warm, ahead = faint). It
   is driven by the same scroll as the morph — deterministic, eased, reversible. No timers.

=== ALREADY REJECTED — do not propose again ===
  Motion: spring/flocking physics, bouncy motion, cursor wake/hover repulsion, comet or
  tendril tails, constellation edges between dots, ping-only transitions where dots never
  leave the hero, fake depth gauges or invented data, unbounded rotation, vh-based scroll
  math. Bar: deterministic, scroll-scrubbed, eased, reversible. datacurve.ai is the reference.
  SYS 03 subjects: walled box; LiDAR scan-slice stack; exploded floor-plate axonometric;
  waypoint field (six viewpoint spheres); a pin standing on a shallow flat plate.
  SYS 04 subjects: gum pouch + bitten disc; abstract chew + flavour curve; mouth blowing a
  bubble; tongue / papillae.
  SuzChews marks: three thin monoline papilla marks (no mass, and papillae are themselves on
  the rejected list); seal, glass label and pedestal plate (letters inside the mark).
  THE CASE section, and the three-claim pitch. I had it built and then scrapped it. Do not
  re-propose claims or a positioning line.
  There is NO Coliseum project in this repo. Do not feature work I have not done.

=== VOICE — this changed late and it matters ===
State what things ARE, directly. FIRST PERSON. No storytelling, no origin stories, no flavour
text. I cut every "sonar ping", "experience record — chapters", "one signal relayed", "the
toolkit, plainly stated", "open the channel" — they read as corny and trite, and the mechanics
of the site work well enough on their own. Section titles are now "My four latest projects.",
"What I work with.", "How I got here.", "Get in touch."

Two type rules learned the hard way, both from Syne:
- Letter-spacing on headings is 0, NEVER negative. Syne's lowercase j has almost no left side
  bearing, so negative tracking makes "projects" read as "proiects".
- Long titles need text-wrap: balance and real leading (1.3+), or they read as squished.

Edwards line, LOCKED, use verbatim:
  IN DEVELOPMENT - Immersive clinical training that doubles efficiency and halves patient
  call time - built solo to absorb a growing business unit.

Featured four: (01) Edwards — "AI Adaptive Immersive Training for Patient Facing Employees"
(no case file yet; its button reads RELEASING SOON and is inert), (02) Heart Function
Informational Site, (03) IYH Digital Twin, (04) SuzChews.

IYH STAYS. Read projects/iyh-digital-twin.v2.html before you write a word about it: the class
modelled the building; my three-person sub-team owns the DELIVERY layer — one twin walkable on
Web, Meta Quest and Vision Pro, with Google-Maps-style waypoint navigation.

The SuzChews cancer origin (both my parents had cancer; the yellow flower was my mother's
favourite colour) is DELIBERATELY NOT on the page. It governs the flower and nothing else.

=== THREE FIXES NOT TO UNDO ===
- body{overflow-x:clip}, NOT hidden. `hidden` makes <body> a scroll container and silently
  breaks every position:sticky descendant — the pinned relay and the bio rail both die.
- The pinned relay is display:none under 900px AND its render loop early-outs on
  stage.offsetParent === null, so phones pay nothing for it.
- The hero record block RESERVES its tallest state (min-height on .rec-title and .rec-sub) so
  its height is constant, and the record picker below is placed relative to that. Remove the
  reserve and long records (Jel Sert, USC) overrun the picker again. Verified clear at 10
  viewport sizes.

=== DEPLOY NOTES — READ BEFORE GOING LIVE ===
Deploy is Vercel: vercel.json runs `npm run build`, and that script in package.json copies an
EXPLICIT WHITELIST of files into dist/. prototypes/ is not on it and neither is
relay-engine.js. If the prototype ships without that list being updated, the site deploys
missing its scripts — this has already happened once (commit 5269e52, "Include centerpiece.js
and path-dots.js in build output"). Whatever files the new index.html needs MUST be added to
that cp line. `cp -R projects dist/projects` already carries the heart site, and
assets/Samuel_Frausto_Resume.pdf is already in the build output.
.gitignore excludes dist/ — never rename projects/heart-valve/app back to dist/.

=== ALMA / HEART SITE (done — only if I say I have changed it) ===
Source of truth is github.com/samfrausto/Alma. The portfolio holds ONLY the built static
output, no nested .git or node_modules. Refresh:
  cd ~/Alma && git pull && npm install && npm run build -- --base=./
  rm -rf "<portfolio>/projects/heart-valve/app"
  mkdir -p "<portfolio>/projects/heart-valve/app"
  cp -R dist/. "<portfolio>/projects/heart-valve/app/"
GOTCHA, ALREADY HIT ONCE: any HARDCODED asset path in Alma source breaks in the portfolio
copy. Vite rewrites the URLs it generates when you build with --base, but it cannot rewrite a
string literal. src/scene/heartModel.ts used '/models/heart-base-v2.glb' (root-absolute),
correct on samfrausto.com and a 404 under /projects/heart-valve/app/ — the model silently
never loaded. Fixed to `${import.meta.env.BASE_URL}models/heart-base-v2.glb`. Route any new
runtime asset (texture, HDRI, audio) through BASE_URL the same way. This was NOT a gitignore
problem: the shipped .glb is tracked, and Final_Heart_3d_Models/ is gitignored on purpose
(licensed 3D4SCI source art — see CREDITS.md).

=== HEADLESS VERIFICATION (do this instead of screenshots) ===
RELAY GEOMETRY. Run prototypes/relay-engine.js through node's vm module with a `window` stub,
call Relay.CLOUDS[k]() directly, and assert — node --check passes, no non-finite coordinates,
every cloud fit()s to exactly 1500, tag 3 (yellow) appears ONLY in `gum`, tag 5 (route) only
in `waypoints`, and the diagonal extent + density-weighted vertical centre roughly match
across all four chapters (mismatched extents make one chapter render visibly bigger).
Last known-good, fitted to 1500: diagonals 2.498 / 2.398 / 2.464 / 2.508, centres
-0.015 / -0.151 / -0.084 / -0.103. Chapter 03 carries about 258 route dots.

RELAY BEHAVIOUR. Mount it against a stub DOM with a fake getBoundingClientRect and drive
requestAnimationFrame through a full forward-and-back scrub (82 frames). Assert zero errors,
and that the HUD link is a real link only on chapters that have one — SYS 01 must stay
RELEASING SOON and inert even after visiting SYS 02. Test both stage widths (>980 and <980)
so both frame modes are exercised.

PAGE. node --check each inline <script>; parse the HTML for unclosed tags and duplicate ids
with html.parser, NOT a regex (a naive one is fooled by `i<N` inside scripts); check the
<style> braces balance; confirm every href/src resolves on disk; run the last script block
against a DOM stub and assert the rendered counts (4 phone rows, 12 index entries, 4 FEATURED).

GEOMETRY THAT MUST NOT COLLIDE. Both the relay frame and the hero record/picker stack were
verified by COMPUTING clearances across a grid of viewport sizes, not by eye. If you touch
either, redo that — it catches what a single screenshot cannot.

CONTROL TEST. The dots-engine script errors under a DOM stub because it needs a real .hero
element. Run the same stub against `git show HEAD:prototypes/mockup-d-sonar.html` to confirm
the error is the harness and not your change.

=== RULES I SET ===
- Prototype first; show before/after; one merge at a time.
- Do not commit or push unless I explicitly ask.
- projects/suzchews/ is the quality bar for case studies.
- Prefer Fable over other models for important design decisions.
- READ THE CASE STUDY BEFORE DRAWING THE ICON. Three SYS 03 icons were wasted drawing a
  building because the project is *titled* "IYH Digital Twin".
- When I request a specific thing and then reject the result, the request was a SYMPTOM, not
  the fix — re-derive the underlying constraint before building again.
- Avoid repeatedly spawning Google Chrome from Node for screenshots on this Mac; those child
  processes caused macOS Chrome crash dialogs. Prefer an existing browser session.

=== START HERE ===
Send me ONE message asking: the current deadline; which SuzChews lockup (A, B or C); and which
way I want the mobile dots to go (relay on mobile, or a relay-shaped landing without it).
Then wait — do not start building until I answer.
```
