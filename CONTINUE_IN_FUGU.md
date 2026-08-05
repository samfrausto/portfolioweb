# Starter prompt — continuing the Sonar portfolio in fugu

Copy everything below the line into the new session.

---

You are design lead FINISHING Samuel Frausto's XR portfolio redesign (Direction D — "Sonar").
The exploration is over. This session closes out what is left and ships.

Repo: `/Users/sjfraust/Downloads/portfolio 3`, branch `immersive-evolution`.
Read `CLAUDE.md` first. **Nothing is committed** — the whole of the last session is in the
working tree as modified + untracked files. Do NOT run `git stash`, `git checkout .`,
`git clean` or anything else destructive without asking; it would delete the work.

Dev server is already running on port 4599 (a `codex -p fugu` child, PID 18398). Keep it up.
If it dies: `python3 .claude/devserver.py 4599`

- Page:        http://localhost:4599/prototypes/mockup-d-sonar.html
- Phone sim:   http://localhost:4599/prototypes/mockup-d-sonar-phone.html
- Relay alone: http://localhost:4599/prototypes/relay-3d-mock.html
- SuzChews:    http://localhost:4599/projects/suzchews/index.html
- Logo sheet:  http://localhost:4599/prototypes/suzchews-logo-v4.html
- Heart site:  http://localhost:4599/projects/heart-valve/app/  (DONE, do not rebuild)

## HARD CONSTRAINTS

- **DEADLINE: today, end of day.**
- **I am low on usage credits.** No subagents unless I ask. No screenshot → tweak →
  screenshot loops — I review on my own screen, you change things in ONE pass from my
  written feedback. Batch your questions into one message. Verify headlessly.
- Everything goes through me. Nothing is final without my approval.
- Do NOT rewrite live `index.html` / `style.css` without my explicit go-ahead.
- Do NOT commit or push unless I explicitly ask.
- The ≤900px hero and the relay are APPROVED. Leave them alone.
- SuzChews chapter-04 flower: 5 petals × 11 dots. DO NOT TOUCH IT.

## WHAT IS DONE — do not redo

**The relay.** Geometry + render loop live in `prototypes/relay-engine.js`, mounted by both
`relay-3d-mock.html` and the page — one copy, they cannot drift. Do not re-inline it.
1500 dots; scroll scrubs both the morph and a bounded ±32° rotation. All four chapters
approved: 01 VR headset, 02 anatomical heart, 03 two curved decks + waypoint pins + route
(v6), 04 gumball machine. Sonar sweep STAYS — settled, do not re-litigate.

**The page** (`prototypes/mockup-d-sonar.html`): 01 HERO / 02 SELECTED WORK / 03 ALL PROJECTS
/ 04 SKILLS / 05 BACKGROUND / 06 CONTACT. The last script block defines `SYSTEMS`, `BIO`,
`PROF`, `ALL`; `SYSTEMS` drives the relay chapters, the relay HUD, the phone list AND the
featured rows of the index. Swapping a featured project must stay a one-object edit.

**SuzChews identity — finished last session.** Lockup A ("Matched") chosen and built:
- `assets/logos/suzchews-mark.svg` (replaced the old rejected monoline, which was referenced
  nowhere), plus `-mark-mono`, `-lockup`, `-lockup-mono`, `-lockup-reverse`.
- Favicon set in `projects/suzchews/assets/brand/` — svg, ico, 16/32/48 png,
  apple-touch-icon 180, icon-192, icon-512. Regenerate with
  `DEST=projects/suzchews/assets/brand python3 prototypes/suzchews-icons.py`.
  Favicon art is deliberately NOT the full mark: ≤32px drops the door and scales the flower
  18%, because at 16px both are sub-pixel.
- Header lockup wired into all 8 pages of `projects/suzchews/`. Lockup A is stacked and
  cannot live in a 44px bar, so the bar carries the horizontal expression of it.
- Known compromise: the standalone lockup SVGs use LIVE Syne text (no font file exists
  locally to outline or embed). Exact when inlined in a page that loads Syne.

**Mobile dots — done, needs your eyes.** Phones now get the same landing desktop gets: a
phone-only `.relay-well` in `.work-main`, and one shared `buildLanding()` called by BOTH
stream builders, so they can no longer differ. Arrival alpha raised .2 → .46. Under reduced
motion the well is `display:none` and the old under-the-heading landing is the fallback.
The phone cloud is 600 dots vs desktop's 9000, because the budget comes from the approved
≤900px hero — raising it means touching that hero.

**Mobile audit** of the bio rail, ALL PROJECTS, SKILLS and CONTACT: 58 rules examined, one
real fix applied (`.contact-mail` was within ~13px of a 320px column and `overflow-x:clip`
would have eaten it silently).

## WHAT IS LEFT

1. **TET2 research page** (`projects/tet2-research.html`) — rebuild from the WRITTEN
   description only. Do not analyse the poster image; it trips content filters.
2. **Going live.** The live site is still the OLD design; the prototype is a full
   replacement. Do NOT start without my explicit go-ahead. See DEPLOY below.
3. **Dead code I have not ruled on** — `benchHTML()` and the `media`/`metrics` fields in
   `SYSTEMS` are unused since the cards were scrapped, kept so the cards are one line away.
   Prototype chrome ("SONAR — MOCKUP D", "MOCKUP D — SONAR · NOT LIVE") also still there.
   ASK before stripping either.
4. **Pre-existing contrast bug, not yet fixed** — `.proj-subnav` in `projects/suzchews/` is
   `rgba(8,8,10,.82)` but its links use `--dim`, which §20 rebinds to warm ink: dark on dark.
   The new lockup elements use `--on-dark`/`--on-dim` and are fine. Ask me before touching
   the existing links.

## THE FOUR THINGS THAT WILL BITE YOU

1. **The renderer draws CURVATURE, not objects.** A ring of dots around a curved surface
   produces a silhouette that CHANGES as the form swings, and that change is what the eye
   reads as volume. Anything flat or boxy merely SHEARS, which reads as jitter — that is why
   three separate building icons all "looked weird", and why adding detail never helped.
   Separately, 1500 dots is a hard fidelity floor: a human face is far below it.
2. **An icon can rotate perfectly and still fail.** Chapter 03's waypoint field turned
   correctly and I still could not tell it was a waypoint/map. That was LEGIBILITY, not
   motion, and more detail would have made it worse. Diagnose which failure you have first.
3. **The relay frame is a three-way geometric budget** — text panel + dot cloud + jump index
   must fit the stage width. `NARROW_W = 980` is defined ONCE in `relay-engine.js` and
   exported; `layout()` mirrors the decision onto the stage as `.is-narrow` and the CSS keys
   off that class, so CSS and canvas cannot disagree at a boundary. `window.__relayCX` and
   the same factors ALSO appear in the page's hero-dot handoff. Change one without the others
   and the handoff falls out of register.
     - side by side (stage ≥ 980): cx 0.645, S = min(W,H) × 0.278, panel 33%
     - stacked (stage < 980): cx 0.50, cy 0.655H, S = min(W×0.28, H×0.225), panel on top
4. **There are TWO stream builders.** `buildStream()` (desktop) and `buildMobileStream()`,
   and the mobile one OVERWRITES `tB` from inside `buildRecord()`'s `if(W<=900){...return;}`
   branch. The landing is now shared via `buildLanding()` precisely so it cannot diverge —
   keep it that way. Also: tag 2, "the glide", was only ever a COLOUR; nothing in the render
   loop ever moved it.

## THREE FIXES NOT TO UNDO

- `body{overflow-x:clip}`, NOT `hidden`. `hidden` makes `<body>` a scroll container and
  silently breaks every `position:sticky` descendant — the pinned relay and the bio rail die.
- The pinned relay is `display:none` under 900px AND its render loop early-outs on
  `stage.offsetParent === null`, so phones pay nothing for it.
- The hero record block RESERVES its tallest state (`min-height` on `.rec-title` and
  `.rec-sub`) so its height is constant. Remove the reserve and long records (Jel Sert, USC)
  overrun the picker again.

## ALREADY REJECTED — do not propose again

Motion: spring/flocking physics, bouncy motion, cursor wake or hover repulsion, comet or
tendril tails, constellation edges between dots, ping-only transitions, fake depth gauges or
invented data, unbounded rotation, vh-based scroll math. The bar is deterministic,
scroll-scrubbed, eased, reversible. datacurve.ai is the reference.

SYS 03 subjects: walled box; LiDAR scan-slice stack; exploded floor-plate axonometric;
waypoint field (six viewpoint spheres); a pin on a shallow flat plate.
SYS 04 subjects: gum pouch + bitten disc; abstract chew + flavour curve; mouth blowing a
bubble; tongue / papillae.
SuzChews marks: three thin monoline papilla marks; seal, glass label and pedestal plate
(letters inside the mark).
THE CASE section and the three-claim pitch — I had it built and then scrapped it. Do not
re-propose claims or a positioning line.
There is NO Coliseum project in this repo. Do not feature work I have not done.

## VOICE

State what things ARE, directly. FIRST PERSON. No storytelling, no origin stories, no
flavour text. Section titles are "My four latest projects.", "What I work with.",
"How I got here.", "Get in touch."

Two type rules learned the hard way, both from Syne:
- Letter-spacing on headings is 0, NEVER negative. Syne's lowercase j has almost no left
  side bearing, so negative tracking makes "projects" read as "proiects".
- Long titles need `text-wrap: balance` and real leading (1.3+), or they read as squished.

Edwards line, LOCKED, verbatim:
`IN DEVELOPMENT - Immersive clinical training that doubles efficiency and halves patient
call time - built solo to absorb a growing business unit.`

Featured four: (01) Edwards — "AI Adaptive Immersive Training for Patient Facing Employees"
(no case file yet; its button reads RELEASING SOON and is inert), (02) Heart Function
Informational Site, (03) IYH Digital Twin, (04) SuzChews.

**Read `projects/iyh-digital-twin.v2.html` before writing a word about IYH**: the class
modelled the building; my three-person sub-team owns the DELIVERY layer — one twin walkable
on Web, Meta Quest and Vision Pro with Google-Maps-style waypoint navigation. Three SYS 03
icons were wasted drawing a building because the project is *titled* "IYH Digital Twin".

The SuzChews cancer origin (both my parents had cancer; the yellow flower was my mother's
favourite colour) is DELIBERATELY NOT on the page. It governs the flower and nothing else.

## VERIFY HEADLESSLY — do this instead of screenshots

```bash
node prototypes/verify/relay-geom.js && node prototypes/verify/page.js && node prototypes/verify/well-grid.js
```

All three exit non-zero on failure. `prototypes/verify/README.md` documents the traps —
read it before writing a new check. The short version: the relay point tag is SLOT 4, not
slot 3; the recorded cloud centres are BRIGHTNESS-WEIGHTED, not plain means; the clouds have
a random component so centres drift ~0.03 run to run while diagonals do not.

If the dots engine throws under a DOM stub, run the same harness against
`git show HEAD:prototypes/mockup-d-sonar.html` before believing it is your change.

Do not repeatedly spawn Google Chrome from Node for screenshots on this Mac — those child
processes caused macOS Chrome crash dialogs.

## DEPLOY — read before going live

Vercel. `vercel.json` runs `npm run build`, and that script in `package.json` copies an
EXPLICIT WHITELIST of files into `dist/`. `prototypes/` is not on it and neither is
`relay-engine.js`. If the prototype ships without that list being updated, the site deploys
missing its scripts — this has already happened once (commit 5269e52). Whatever files the
new `index.html` needs MUST be added to that `cp` line.
`cp -R projects dist/projects` already carries the heart site and the new SuzChews brand
assets; `cp -R assets dist/` already carries the logo SVGs. `.gitignore` excludes `dist/` —
never rename `projects/heart-valve/app` back to `dist/`.

## RULES I SET

- Prototype first; show before/after; one merge at a time.
- `projects/suzchews/` is the quality bar for case studies.
- Prefer Fable for important design decisions.
- READ THE CASE STUDY BEFORE DRAWING THE ICON.
- When I request a specific thing and then reject the result, the request was a SYMPTOM, not
  the fix — re-derive the underlying constraint before building again.

## START HERE

Confirm the working tree is intact (13 modified files, 8 untracked paths — `git status`),
then ask me in ONE message: whether TET2 or the live merge comes first today, and whether to
strip the dead code and prototype chrome. Then wait.
