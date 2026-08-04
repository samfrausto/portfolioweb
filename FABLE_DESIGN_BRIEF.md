# Fable design brief — Samuel Frausto portfolio

Use this file as the single source of context when continuing design work in Claude with **Fable**. Do not treat older Cursor prototypes as final until this brief’s roadmap is agreed.

---

## ⭐ SESSION HANDOFF — READ THIS FIRST (last updated: 2026-08-04, "RELAY v5 · PAGE BUILT · HEART SITE LIVE")

### 🎯 2026-08-04 — AUTHORITATIVE HANDOFF: RELAY v5 · PAGE BUILT · HEART SITE LIVE
*(everything below this entry is history)*

**The copy-paste continuation prompt lives in [`CONTINUE_IN_CLAUDE.md`](CONTINUE_IN_CLAUDE.md). Start there.**

#### What changed this session

**1. The relay engine was extracted.** Geometry + render loop now live in
[`prototypes/relay-engine.js`](prototypes/relay-engine.js), mounted by both
`prototypes/relay-3d-mock.html` (115 lines now, was 631) and the page. There is exactly one
copy of the cloud builders; the two previews can no longer drift apart.
`Relay.mount({pin, stage, canvas, chapters, hud, jump, meta, tog, swp, cx})` —
`chapters[i].cloud` is a key into `Relay.CLOUDS` (`headset | heart | waypoints | gum`).

**2. Chapter status.**

| Ch | Subject | Status |
|----|---------|--------|
| 01 | VR headset shell, training loop inside | **APPROVED** |
| 02 | Anatomical heart, two-circle ventricular loft + aortic arch | **APPROVED** |
| 03 | **Navigation pin + climbing route (v5)** | rebuilt, **awaiting verdict** |
| 04 | Gumball machine | **APPROVED** — the flower reads fine at 5×11 dots. **Do not touch it.** |

**Sonar sweep: STAYS.** Samuel gave the verdict; it is settled.

**3. Why 03 was rebuilt, and the lesson.** The waypoint field (six viewpoint spheres) *rotated
correctly* — Samuel's objection was "I can't really tell that 03 is a waypoint/map." So that
failure was **legibility, not motion**, and adding detail would have made it worse. Six spheres
in a faint box reads as a molecule. v5 draws the most nameable object in navigation, a **map
pin**, which is a surface of revolution (sphere head tapering to a point) and therefore
satisfies the curvature rule for free; its **through-hole** is genuine interior structure the
±32° swing opens and closes. Around it: a **domed** ground (a flat plate would shear), a faint
plan outline of an upper floor, a ground origin marker, and a **route tube that crosses the
floor and climbs to the pin on the upper level**, with the warm glide running along it — the
same construction as chapter 01's approved training loop. The climb is the product: one twin,
waypoint navigation, more than one level.
*Also fixed:* `mapPin`'s meridian and hole density were fixed counts, so the small background
pin cost as many dots as the hero pin. They now scale with `rows`.

**4. THE CASE was built and then SCRAPPED, at Samuel's direction.** No positioning line, no
three claims — the third claim was never resolved and he removed the section rather than settle
it. **Do not re-propose claims.** What replaced it: the hero dots run **straight into the
relay**, and the portrait + **NOW / SCHOOL / BEFORE** rail is a sticky column beside SELECTED
SYSTEMS, holding position for all five screens of the pin and then beside the cards.

**5. The page is now built** in `prototypes/mockup-d-sonar.html`:
`01 HERO → 02 SELECTED SYSTEMS (relay + bio rail) → 03 ALL PROJECTS band → 04 PROFICIENCIES →
05 THE PATH → 06 CONTACT`. One `SYSTEMS` array in the last script block feeds the relay
chapters, the relay HUD **and** the four cards — the cards are generated, so there is no third
place to forget. `BIO`, `PROF` and `ALL` sit beside it. Swapping a featured project is editing
one object.

**6. Copy rule Samuel set, applies everywhere:** *state what the project IS, directly.* No
storytelling, no origin stories — "there's no more space for it." Every `THE STAKES:` /
`THE BET:` / `THE POINT:` / `ORIGIN:` line was deleted. Relay headlines are now the plain
identity of the thing, e.g. SYS 04 is **"Chewing Gum for Chemo-Induced Taste Loss"**, not
"Gumball Machine". SYS 02 is **"Heart Function Informational Site"** (confirmed by Samuel).
The SuzChews cancer origin — both his parents had cancer — is **deliberately not on the page**.
It still governs the yellow flower, and nothing else.

**7. The heart site is live.** Alma was pulled, built (`npm run build -- --base=./`) and copied
into `projects/heart-valve/app/` — 4 files + `models/heart-base-v2.glb`, no nested `.git` or
`node_modules`, `git check-ignore` confirms it is **not** excluded. SYS 02's card now links to
it as "OPEN THE LIVE SITE". Note `dist/assets/*.js.map` is ~3.8 MB of the 7.5 MB total; delete
it from `app/assets/` if repo weight matters. There is a stray `~/Alma/heart-valve/` folder on
this Mac from an earlier mis-pathed copy — harmless, untracked, Samuel's to remove.

**7b. The heart model appeared broken, and the cause was NOT gitignore.** Samuel's first read
was that the `.glb` had been excluded when he committed from the other computer. It had not:
`public/models/heart-base-v2.glb` is **tracked**, came down in the pull (commit `204e9ab`),
is valid glTF 2.0 and byte-identical in the portfolio copy. `Final_Heart_3d_Models/` (440 MB
of purchased 3D4SCI `.blend` + `.glb`) is gitignored **deliberately and correctly** — it is
licensed source art flagged in `CREDITS.md` for Edwards legal review, and it is not what the
site loads. It is still on the Mac; nothing was lost.

The actual bug was one line: `src/scene/heartModel.ts` had
`const MODEL_URL = '/models/heart-base-v2.glb'` — **root-absolute**. Vite rewrites the URLs it
generates when you build with `--base`, but it cannot rewrite a hardcoded string in source. So
the app kept asking the domain root for the model, which is right on samfrausto.com and a 404
under `/projects/heart-valve/app/`. The model never loaded and the scene rendered without it.
Fixed in Alma to ``const MODEL_URL = `${import.meta.env.BASE_URL}models/heart-base-v2.glb` ``.
Verified both ways: the default build still emits `/models/…` (no regression for the live
domain), the `--base=./` build emits `./models/…`. **The Alma edit is uncommitted — Samuel
needs to commit and push it, or the next `git pull` will revert it.**

**The general rule this exposes:** any *hardcoded* asset path in Alma source will break in the
portfolio copy. Bundler-generated URLs are safe; string literals are not. If another runtime
asset is ever added (texture, HDRI, audio), route it through `import.meta.env.BASE_URL` too.

#### Two non-obvious technical fixes worth keeping
- **`body{overflow-x:hidden}` → `overflow-x:clip`.** `hidden` makes `<body>` a scroll container,
  which silently breaks every `position:sticky` descendant — the pinned relay and the bio rail
  would both have just sat there. `clip` gives the same bleed protection with no side effect.
- **Mobile is genuinely untouched.** The `@media(max-width:900px)` block and the hero markup are
  byte-identical to `prototypes/mockup-d-sonar-prepage.html` (the before-copy, kept servable for
  A/B). The pinned relay is `display:none` under 900px *and* its render loop early-outs on
  `stage.offsetParent === null`, so phones pay nothing. The desktop dot stream still targets
  `#workHead`, unchanged.

#### Headless verification recipe (use this, not screenshots)
Run `relay-engine.js` through node's `vm` with a `window` stub, call `Relay.CLOUDS[k]()`, and
assert: syntax passes, no non-finite coordinates, every cloud `fit()`s to 1500, `tag 3` (yellow)
appears **only** in `gum`, and the diagonal extent + density-weighted vertical centre roughly
match across chapters — mismatched extents make one chapter render visibly bigger.
Current numbers: diagonals **2.26 / 2.26 / 2.30 / 2.20**, centre spread **0.114**. All pass.

#### Still open
- **Chapter 03 verdict** (5th attempt at this icon — read the rejected list before touching it).
- **SuzChews logo, attempt 4.** Three rejected; all were thin monoline icons with **no mass**.
  Must read unmistakably as gum, must carry weight, needs a proper mark + wordmark lockup, and
  should build on the **yellow flower** already on the chapter-04 machine. Held deliberately
  until 03 lands so the two flowers stay consistent.
- Three bits of surviving voice Samuel may still want cut: the descent line *"Every chapter
  reorganizes into the next system he builds"*, the section title *"Four systems. One signal,
  relayed."*, and the card-grid label *"THE SAME FOUR, ON THE RECORD."*

#### Alma → portfolio refresh (source of truth is github.com/samfrausto/Alma)
```bash
cd ~/Alma && git pull && npm install && npm run build -- --base=./
rm -rf "<portfolio>/projects/heart-valve/app" && mkdir -p "<portfolio>/projects/heart-valve/app"
cp -R dist/. "<portfolio>/projects/heart-valve/app/"
```
The output folder is named `app/` because the portfolio `.gitignore` excludes `dist/` —
**do not rename it back** or it will silently never deploy.

---

### 2026-08-03 — SUPERSEDED HANDOFF: RELAY v4

**The copy-paste continuation prompt now lives in [`CONTINUE_IN_CLAUDE.md`](CONTINUE_IN_CLAUDE.md). Start there.**

#### The one insight that cost the most to learn
**The relay renderer draws CURVATURE, NOT OBJECTS.** A ring of dots around a curved surface
produces a silhouette that *changes* as the form swings ±32°, and that change is what the eye
reads as volume. Anything flat or boxy merely **shears** under rotation, which reads as jitter.
That is the literal source of Samuel's "looks weird" on three consecutive building icons, and no
amount of added detail (slices, partitions, furniture) fixes it — the problem was that rotation
had nothing to do. Every icon must be a **doubly-curved form with interior structure the rotation
reveals**, which is exactly why chapters 01 (headset shell + training loop inside) and 02 (heart
+ circuits inside) work.

Corollaries:
- **1500 dots is a hard fidelity floor.** A human face is far below it and reads as a mask no
  matter how well modelled. This is why the mouth failed even though Samuel asked for it.
- **Scale matters.** A 50 m building at 1500 dots is ~1.5 m per dot; partitions and furniture were
  sub-dot. Icons should depict things at object scale, not architectural scale.
- **Register matters.** Chapters 01 and 02 depict *the thing the work acts on*, not the deliverable.
  03 and 04 kept failing partly because they depicted a deliverable (a model of a building) and a
  product (gum) instead of a mechanism.

#### Relay state (`prototypes/relay-3d-mock.html`, v4)
| Ch | Subject | Status |
|----|---------|--------|
| 01 | VR headset shell, training loop inside | **APPROVED** |
| 02 | Anatomical heart — two-circle ventricular loft, apex sheared down-left/forward, aortic arch + branches carrying the read, both circuits inside | **APPROVED** |
| 03 | Waypoint field — six panoramic viewpoint spheres at staggered depths, faint ghost of the floor plates, one sphere gliding between two stations | built, **awaiting verdict** |
| 04 | Gumball machine — glass globe on a flared pedestal, gumballs inside, colourless → colour flood bottom-up on scroll, yellow flower on the glass | built, **awaiting verdict** |

Chapter 02's label is **SYS 02 · HEART FUNCTION INFORMATIONAL SITE** — Samuel corrected that this
project is *not* Edwards-branded.

**The sonar sweep was broken from its introduction until v3.** It keyed on `(p % 1)`, so the plane
crossed the volume while dots were still scattered mid-flight and then parked in front of the
settled form — invisible in both states, which is why Samuel reported "I can't see the sonar."
Now it runs over the back half of each leg (`lt` 0.54→0.90), ignites what it crosses to near-white,
dims un-crossed dots so the ignition has contrast, and fades to zero by `lt = 1`. Verdict pending.

**Code architecture:** clouds are arrays of `[x, y, z, weight, tag, grp]`, each resampled to exactly
`N = 1500` by `fit()`. `tag` 0/1/2/3 = paper/teal/warm/yellow — **yellow appears only on the
SuzChews flower and should stay that way**. `grp` is a per-dot animation group read by the render
loop; chapter 04's gumballs carry `grp` 1–8 as an ignition bucket keyed to height in the pile.
Reusable helpers now in the file: `ring`, `seg3`, `rrOutline`, `face`, `tube`/`curvePt`
(Catmull-Rom swept tube, built for the great vessels), `strand`, `blob`, `vpSphere`, `rayC`
(ray/circle for cross-section unions), `poly`/`inPoly`.

#### Rejected relay subjects — do not re-propose
**SYS 03:** walled box with interior floor plates ("reads as a crate"); LiDAR scan-slice stack
("looks weird"); exploded floor-plate axonometric ("still looks weird").
**SYS 04:** gum pouch + bitten disc (clip-art); abstract chew + flavour curve + bubble; mouth
blowing a bubble (Samuel requested this one, then rejected it); tongue with papillae (rejected on
sight). **There is no Coliseum project in this repo** — Samuel floated one; it does not exist and
featuring it would be showing work he has not done.

#### A framing error worth not repeating
Three SYS 03 icons were wasted drawing a *building* because the project is titled "IYH Digital
Twin." `projects/iyh-digital-twin.v2.html` says the class modelled the hall; **Samuel's
three-person sub-team owns the delivery layer** — one twin walkable on Web, Meta Quest and Vision
Pro, with Google-Maps-style waypoint navigation and continuous transitions between viewpoints.
That reframing is also what settled the "should IYH be a featured project at all" question: yes.
Cross-platform XR delivery with a custom navigation system is squarely what these teams hire for.
**Read the case study before drawing the icon or writing the copy.**

#### Page architecture — approved in outline, NOT BUILT
`01 HERO → 02 THE CASE → 03 SELECTED SYSTEMS → 04 ALL PROJECTS button → 05 PROFICIENCIES →
06 THE PATH (demoted below skills) → 07 CONTACT`. `assets/portrait/about.jpg` goes inside THE CASE
beside the claims, not in a separate About section; the hero headset/face reveal pair must not be
swapped. Selected Systems must be driven by a single featured-project array that the relay, the
cards and the chapter HUD all read — swappability is a requirement Samuel set explicitly.

THE CASE claims: **"Ships end-to-end"** and **"Systems, not screens"** are approved. The third is
**still open** — "builds for the body" was rejected as inaccurate, and "learns the domain cold"
was offered and not taken. Propose fresh options.

Edwards line, **locked, verbatim**: *IN DEVELOPMENT · Immersive clinical training that doubles
efficiency and halves patient call time — built solo to absorb a growing business unit.*
(An earlier draft cited a 40% business-unit reduction; Samuel replaced it with this framing.)

#### SuzChews logo — open, three attempts rejected
Diagnosis of all three failures: **thin monoline icons with no mass.** Real logos carry weight and
need a proper mark + wordmark lockup. Attempt 4 must read unmistakably as gum, must have mass, and
should build on the **yellow flower — Samuel's mother's favourite colour, from when she had
cancer, which is where SuzChews came from.** A yellow flower already appears on the gumball machine
in relay chapter 04; keep the two consistent.

#### Working constraints
Deadline **2026-08-05**. Samuel is **low on usage credits**: no subagents unless he asks, no
screenshot→tweak→screenshot loops, batch questions into one message, verify headlessly. The
fastest headless check for the relay is to slice the `<script>` out of the HTML, run it through
node's `vm` module, call the cloud builders directly, and assert syntax passes, no non-finite
coordinates, every cloud fits to 1500, and vertical centres/extents roughly match across chapters.

---

### 2026-07-31 — SUPERSEDED HANDOFF: "DOT RELAY TO PROJECT ICONS"
(Entries below dated 2026-07-27 from this same working period are history; this entry supersedes them where they conflict.)

**Where the prototype stands right now (`prototypes/mockup-d-sonar.html`):**
- Desktop dots are back to the **deterministic tween baseline**: on scroll the 9,000-dot hero identity leaves the hero, streams along a bezier, and resolves into a threshold line above `02 — SELECTED SYSTEMS`. That threshold line is a **placeholder** for the next mission.
- The Selected Systems section (4 flagship dossier panels: Edwards AI VR training, heart-valve explainer, IYH Digital Twin, SuzChews) + The Path register + per-panel glyph canvases (`#glyphLoop` training loop, `#glyphValve` valve cycle, `#glyphScan` IYH luminance sweep, `#glyphCurve` flavor curve) + chip hover previews are all built and live. Panels are always lit (`sonarPass` is inert; nothing publishes `window.__pingR`).
- Mobile (≤900) hero + 600-dot relay is untouched and working; do not redesign it.
- Nothing is committed since checkpoint `5cdb687`; live `index.html`/`style.css` untouched.

**THE MISSION Samuel wants next (his words, 2026-07-31):** dots leaving the hero is *the whole point* — the idea came from **datacurve.ai** and the animation should travel down to the projects, with the dots resolving into **cool dot-drawn ICONS representing what each project is**, relaying icon→icon as you scroll (datacurve dotmorph chapters): SYS 01 → headset/training-loop icon, SYS 02 → anatomical heart/valve icon, SYS 03 → isometric building icon, SYS 04 → product/brand icon. Scroll-linked, reversible, crisp resolves.

**HARD REJECTIONS from this period — never reintroduce:**
1. Spring/flocking **physics** or any bouncy motion (Samuel: "weird bouncy dot tech").
2. **Cursor wake / hover repulsion** — "acts weird after hovering".
3. Long comet/tail path distributions — they read as a **"weird claw shape"** (any path-following swarm makes tendrils; use datacurve-style per-dot tweens with mid-flight scatter instead).
4. **Ping-rings-only** transitions where dots stay home — dots must physically travel.
5. Fake depth-tick gauges / invented data.

**Useful code landmarks:** script 1 — `buildStream()` (desktop scroll targets `tB`), `tick()` (scroll-scrubbed p, mobile relay via `mobileStops`/`tC`), `buildRecord()` (identity morphs). Script 2 — glyph canvases + `sonarPass` (inert gate, reusable). Mobile relay untouched by all of this.
**Datacurve DNA notes** (verified in an earlier session): one pinned canvas, scroll scrubs the morph; dots carry tonal detail; mid-transition = horizontal streaming trails, NOT radial scatter; near-black bg, white-cyan core + warm fringe.

### 📋 STARTER PROMPT for the icon-relay session (copy into a fresh Fable session; also in CONTINUE_IN_CLAUDE.md)
```text
You are design lead continuing Samuel Frausto's XR portfolio redesign (Direction D — "Sonar").

Before doing anything:
1. Read FABLE_DESIGN_BRIEF.md — start with the SESSION HANDOFF dated 2026-07-31 at the top.
2. Read CLAUDE.md.
3. Review the working tree on branch immersive-evolution. Do not commit or push unless I explicitly ask.

Previews:
- Desktop/responsive: http://localhost:4599/prototypes/mockup-d-sonar.html
- Phone simulator (390×844): http://localhost:4599/prototypes/mockup-d-sonar-phone.html
- Dev server if needed: python3 .claude/devserver.py 4599

THE MISSION — "Dot relay to project icons" (datacurve.ai-inspired):
On desktop scroll, the hero's dot identity must LEAVE the hero — that is the whole point of the dots — travel down the page, and resolve into dot-drawn ICONS that represent each project in 02 — Selected Systems as its card enters the viewport:
- SYS 01 Edwards AI VR clinical training → e.g. a VR headset or training-loop icon
- SYS 02 heart-valve explainer → an anatomical heart/valve icon
- SYS 03 IYH Digital Twin → an isometric building icon
- SYS 04 SuzChews → a product/brand icon
The dots should relay — reform from one icon to the next as I scroll (like datacurve's dotmorph chapters) — scroll-linked and reversible, handing off cleanly to each card's live glyph canvas where that helps.

HARD REJECTIONS from previous passes — do NOT reintroduce:
- Spring/flocking physics or any bouncy motion.
- Cursor wake / hover repulsion (dots reacting to the mouse felt broken).
- Long comet/tail path shapes — they read as claws/tendrils.
- Ping-rings-only transitions where dots stay in the hero.
- Fake depth-tick gauges or other invented data.
Motion bar: deterministic, scroll-scrubbed tweens with eased mid-flight scatter — datacurve.ai is THE reference (see the datacurve DNA notes in the brief).

NON-NEGOTIABLE RULES:
- Everything goes through me; nothing is final without my approval.
- Show me a mockup before drastic changes.
- Never touch live index.html / style.css.
- Work only in prototypes/mockup-d-sonar.html, mockup-d-sonar-phone.html, and related prototype assets.
- Keep localhost:4599 running. Do not commit or push unless I ask.
- Mobile (≤900px) hero/relay is approved-in-progress — do not redesign it; desktop is where this mission lives.
- Don't spawn Chrome from Node for screenshots; use the existing browser session.

START HERE:
1. Review both previews without editing; scroll the desktop stream (currently: dots leave the hero and resolve into a threshold line above 02 — SELECTED SYSTEMS — that line is the placeholder your icons replace).
2. Propose the four icons (show me static dot-rendered mocks first) plus a one-paragraph motion spec for the relay.
3. Get my approval on icons + spec BEFORE building the full scroll system.
4. Build prototype-first, verify at 960+ desktop, confirm mobile is untouched, then walk me through it.
```

### 2026-07-27 evening — Selected Systems + Path section built (NOT yet approved by Samuel)
Planned with Samuel in-chat, implemented in `prototypes/mockup-d-sonar.html` only:
1. **Curation locked with Samuel:** flagships = (01) Edwards AI VR clinical training, (02) **NEW Edwards interactive heart-valve explainer** (Ciechanowski-style, Samuel is building it in Claude, ships ~Aug 2026, will be hosted on this site), (03) IYH Digital Twin, (04) SuzChews. **VR Baseball demoted to the Path** — Samuel disclosed the VR portion was never finished (only a desktop pitch-selection/viewing mechanic); framed honestly as "VR BASEBALL — PITCH STUDY". Synesthesia = text chip (imagery low quality). Jel Sert R&D folded into its chapter line. Two more unlogged Edwards pieces: a scribe app and an MDM architecture pitch (chips). Edwards demo video contains company info — keep off public site.
2. **`02 — SELECTED SYSTEMS`:** four `.bench` panels (alternating via `.flip`), each = dossier grid + constraint line + media. SYS 01/02 use live canvas **proof glyphs** (`#glyphLoop` animated training-loop diagram; `#glyphValve` valve cycle with leaflets, pooled flow, SYSTOLE/DIASTOLE label) in a new glyphs `<script>` (IntersectionObserver-gated, reduced-motion → static frame, reads `--accent` live). SYS 03/04 use stills + `OPEN CASE FILE →` links. `.bench-media::after` caption now comes from `data-cap` (glyph captions top-left).
3. **`03 — THE PATH`:** compact chronological register (`.pathlog`/`.prow`) — Two Lanes → UChicago/Kron (injury + dad's diagnosis as one clause) → Franklin → Jel Sert (3 film chips) → USC IYA (4 chips) → Edwards (scribe/MDM chips) → NEXT. Emotional beats = brief subtext per Samuel.
4. **Mobile relay generalized:** stop selector now `.bench` only (old `.workrow` removed) and dot distribution divides evenly across N stops instead of hardcoded 3.
5. Verified: JS syntax pass, zero console errors, desktop 960+ layout, 390×844 (band → threshold → per-card rules → path stack). Known nit: loop glyph top label sits close to its caption pill on mobile.
**Approval gate:** Samuel must review desktop + phone before this section is treated as direction. Copy uses only facts he supplied; Edwards stack details still needed to sharpen SYS 01. He will supply: system diagram + 2 public-safe VR learning-module architectures.

### 2026-07-27 late evening — "The Reorganize" scroll transition + work-section tune-up (NOT yet approved)
Samuel rejected the depth-ticks descent ("looks out of place") and picked direction **A — The Reorganize** from four options; tune-up scope he chose: visual richness, glyphs for SYS 03/04, path hover previews (no copy changes).
1. **The Reorganize (desktop >900):** `.depth-ticks` deleted; descent 95vh→52vh. `layout()` now computes `glyphT` (SYS 01 loop-glyph geometry in doc coords, mirrored from `drawLoop`: rx=min(w·.33,215), ry=min(h·.29,118)) and `pEnd` (scroll distance so p completes when the glyph is ~55%vh up). `buildStream()` desktop distribution: 30% comet tail along the old bezier (reads as travel, fades at settle), 58% onto the loop ellipse, 12% into the 4 node clusters. `tick()` fades desktop dots via `deskFade` over p .86→1 and publishes `window.__loopHandoff=p`; `drawLoop` fades in over handoff .82→1 — the page dots literally become the live diagram. Mobile (≤900) keeps the threshold-band behavior (glyphT null → fallback).
2. **SYS 03 scan glyph** (`#glyphScan`, mix-blend screen over the IYH still): luminance-samples the image (110×66 grid, object-fit cover math), an accent scan line sweeps every ~7.2s with a trailing dot reveal. **SYS 04 inset** (`.media-inset` + `#glyphCurve`): "SIM — FLAVOR CURVE" panel replotting a rise/decay dot curve per ~4.6s cycle with per-cycle peak variation.
3. **Card richness:** accent corner brackets on `.bench`; hover zoom/saturate on media (fine pointers); IYH hover crossfades to `iyh-digital-twin-02.jpg` (`.media-alt`); opacity-only IO reveal on benches (**transform reveals forbidden** — they skew the rect measurements the dot engine + mobile relay take at layout()).
4. **Path chip previews:** `.chip[data-prev]` (TET2, VR Baseball, Pavilia, Cyberpunk) show a floating 210×136 `#chipPreview` image above the chip on hover; fine-pointer only, hidden ≤900, dismissed on scroll.
5. Verified at 960 desktop (mid-travel stream, full settle/handoff, scan, curve inset, chip preview) and 390 mobile (band, relay, card reveal, zero console errors). **Browser-pane gotcha:** every file edit re-fronts the file-preview tab, pausing rAF in the localhost tab — re-front the localhost tab before probing animation state. Known nits: mobile loop-glyph caption pill sits close to the SIMULATION label; "AI ASSESSMENT" label clamps against the canvas edge at narrow desktop widths.

### 2026-07-27 latest — "THE PING" replaces the traveling swarm (NOT yet approved; supersedes the Reorganize descent below)
Samuel rejected the Reorganize/Living-Signal descent ("doesn't fit the creativity", "weird claw shape" — diagnosis: any path-following swarm produces organic tendril shapes mid-scroll; unfixable by tuning). From four options (Ping / Wake / Cut / desktop Relay) he chose **A — The Ping**: dots never leave the hero — the signal travels instead.
Current desktop (>900) behavior in `mockup-d-sonar.html`:
1. Hero dots permanently hold the identity formation (`txp=ax`; stream targets tB now unused on desktop; `buildStream` desktop branch is dead code). Living-Signal physics KEPT for hero morphs + cursor wake + z-depth; travel-swirl term removed; settle boost now `morphing?1:1.7`.
2. Scroll drives `pingR=(sy-heroH*.12)*1.5`, published as `window.__pingR`/`__pingC` (portrait center, doc coords). Main canvas draws 3 dotted concentric wavefront rings (offsets 340px, alphas .8/.45/.26, fading with radius; viewport-culled; canvas H extended to glyph+1200 so rings survive into SYS02 gutters).
3. `sonarPass` is now RADIAL: per-panel charge keys on |pingR − dist(panel center, ping center)| < max(120, .6·panelH); flare 1 → persist .62 → dark below; the wavefront ARC is drawn inside each panel canvas (circle centered at ping center in panel-local coords) so the ring visibly passes through the instruments. `__loopHandoff` pinned to 1 (reorganize handoff retired).
4. Verified at 960: arc sweeps the descent, SYS01 boots on crossing, valve panel boots + persists, hero identity crisp, no console errors. Mobile (≤900) fully unchanged (pingR null → panels always lit, relay intact). Reduced motion: no ping, everything lit.
Cleanup candidates for a later pass: dead desktop branch of `buildStream`, unused `pEnd`/`front`/`ph[]`, and the descent-line copy ("Every chapter reorganizes…") which described the retired mechanic.

### 2026-07-27 night — "Living Signal" dot physics + sonar phosphor (NOT yet approved)
Samuel wanted better dots; after a landing.love research pass (key takeaways — Noomo: scroll = camera through one continuous world; Samsy: site as live reactive simulation w/ engine HUD; basement: site as a place with depth; 21TSI: concentrate one bold medium) he picked the **flow-field + sonar-phosphor + z-depth combo** over the full "One Signal" single-world rebuild (kept as possible end-state).
Implemented in `mockup-d-sonar.html`, **desktop >900 only, mobile untouched**:
1. **Flow-field physics:** desktop dots no longer tween — new `vx/vy` state; spring-to-target + curl-noise swirl in transit (fades as dots lock) + damping .84. Tuning that matters: spring `k=(.016+min(.11,dist*.0006)+lock*.11)`, ×1.7 settle-boost when at rest (`!morphing&&pp<.05`) — **without the boost the hero identity never crisps between the 6.1s auto-cycles** (first attempt looked like a permanent cloud; probe with `__D.step()` + avg dist to `tA`).
2. **Cursor wake:** radial + slight tangential repulsion within 130px (doc coords), dots heal behind. `lastAct`/`energy` gate keeps rAF idle-cheap (sleeps ~2.2s after last input once kinetic energy <.04).
3. **z-depth:** per-dot hashed `zD`; size ×(.62+z*.76), alpha ×(.68+z*.32), scroll-velocity parallax scaled by (1-lock) so formations stay crisp.
4. **Sonar phosphor:** wavefront `front=scrollY+.78vh`. Main-canvas dots: `ph[]` flares to 1 within ±70px of front, persists at .55 above it, decays dark below; applied ∝ stream progress so the hero identity is never dimmed. Glyph canvases: `sonarPass(o)` in script 2 drives per-canvas charge via CSS opacity (0 until insonified → flare 1 → persist .62) + draws the sweep line crossing the canvas; canvases start `opacity:0` on desktop; mobile/reduced always lit.
5. Verified at 960: hero crisps per record, organic descent, sweep insonifies SYS 01, valve stays dark until pinged; 390 regression clean; zero console errors; strict-mode syntax pass.

### 2026-07-27 late-session additions (NOT yet approved by Samuel)
Implemented in `prototypes/mockup-d-sonar.html` + assets, pending Samuel's visual review:
1. **USC mobile identity fixed:** `assets/logos/mono/usc.png` had a transparency checkerboard baked into low-alpha pixels (visible pink-tinted on the mobile canvas; desktop was unaffected because its dot sampler thresholds alpha at .5). Cleaned in place by zeroing alpha < 80. Original recoverable via git.
2. **Phi Delta Theta on mobile USC:** now tinted light (`#D9E1EA`, it was pure-black art invisible on dark) and enlarged/repositioned (x .28w, y .62h, .44w × .38h); IYA/USC heights trimmed to .72h/.70h to make room.
3. **NEW — mobile phase-2 dot relay:** after the 600-dot band resolves above `02 — SELECTED WORK`, continued scrolling peels dots off the band (uniform thinning, ~88% of dots; 12% remain as band residue) along a left-margin bezier rail; they resolve into thin dotted "signal rules" ~9px above each proof card (`.bench`, both `.workrow .card`) as it enters the viewport. Scroll-linked and reversible; timing = eased `(scrollY + .7vh − cardTop)/(.42vh)` with card trigger clamped (`yq`) so the last card fully resolves before max scroll. Skipped under reduced motion; desktop untouched. Key additions: `tC`/`stopIdx` arrays, `mobileStops` in `layout()`, phase-2 target build at end of `buildMobileStream()`, `stopQ` + bezier composition in `tick()`.
Verified: JS syntax pass, no console errors, USC panel clean, all three card rules resolve, band+relay reviewed at real scroll positions at 390×844.

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
