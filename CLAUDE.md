# Claude Code / Fable

For portfolio **design strategy and creative direction**, use **Fable** and start from:

→ [`FABLE_DESIGN_BRIEF.md`](FABLE_DESIGN_BRIEF.md)

Copy/paste continuation prompt:

→ [`CONTINUE_IN_CLAUDE.md`](CONTINUE_IN_CLAUDE.md)

Current checkpoint: **Direction D — “Sonar,” 2026-08-04 (v5 of the relay). Relay geometry + render loop now live in `prototypes/relay-engine.js`, shared by `prototypes/relay-3d-mock.html` and the page. Chapters 01 (VR headset), 02 (anatomical heart) and 04 (gumball machine) APPROVED — 04's flower is fine as-is, do not change it. Chapter 03 rebuilt as a navigation pin + climbing route (v5), AWAITING VERDICT. Sonar sweep: STAYS. THE CASE section was built and then SCRAPPED at Samuel's direction — no claims; the portrait + NOW/SCHOOL/BEFORE rail sits beside SELECTED SYSTEMS instead, and the hero dots run straight into the relay. Page IA now built in `prototypes/mockup-d-sonar.html`: 01 HERO / 02 SELECTED SYSTEMS / 03 ALL PROJECTS / 04 PROFICIENCIES / 05 THE PATH / 06 CONTACT, all driven by the SYSTEMS array. **All project copy must state what the project IS, directly — no storytelling, no origin stories.** The heart site is FINISHED and live at `projects/heart-valve/app/` (built from the Alma repo; refresh command in the brief). Deadline 2026-08-05. Full brief: [`CONTINUE_IN_CLAUDE.md`](CONTINUE_IN_CLAUDE.md).**

**The governing technical insight (2026-08-03) — do not lose this:** the relay renderer draws **curvature, not objects**. A ring of dots around a curved surface produces a silhouette that *changes* as the form swings ±32°, and that change is what reads as volume. Anything flat or boxy just *shears* under rotation, which reads as jitter — that is why three separate building icons all “looked weird,” and no amount of added detail fixes it. Icons must be doubly-curved shells with interior structure the rotation reveals. Secondary rule: **1500 dots sets a fidelity floor.** A human face is far below it and will read as a mask no matter how well modelled.

Rejected, do not reintroduce: bouncy physics, cursor-hover dot reactions, comet/claw tails, constellation edges, ping-only transitions, continuous (unbounded) icon rotation, vh-based scroll math, fake data/gauges.
Relay icon subjects already rejected — **SYS 03:** walled box, LiDAR scan-slice stack, exploded floor-plate axonometric, **waypoint field (six viewpoint spheres — it rotated correctly but Samuel could not tell it was a waypoint/map. That failure was LEGIBILITY, not motion; adding detail would not have fixed it. Now v5: a Google-Maps-style pin, which is a surface of revolution, plus a route that climbs between two levels).** **SYS 04:** gum pouch + bitten disc, abstract chew + flavour curve, mouth blowing a bubble, tongue/papillae (rejected on sight). Also: there is **no Coliseum project in this repo** — do not feature one.
SuzChews logo: three attempts rejected. Must clearly read as gum, must carry mass (not thin monoline). Yellow flower = Samuel's mother's favourite colour, from when she had cancer — that is the origin of SuzChews.

Rules Samuel set:
- Do not rewrite live `index.html` / `style.css` without explicit approval.
- Prototype first; show before/after; one merge at a time.
- Work in `prototypes/mockup-d-sonar.html`, `prototypes/mockup-d-sonar-phone.html`, and related prototype assets unless Samuel expands scope.
- Keep localhost running on port 4599.
- Nothing is final without Samuel’s approval.
- Do not commit or push unless Samuel explicitly asks.
- SuzChews (`projects/suzchews/`) is the quality bar for case studies.
- TET2 research page: rebuild from written description only (no poster image analysis — content filter issues).
- Important design decisions: prefer Fable over other models.
- **Samuel is low on usage credits.** No subagents unless he asks. No screenshot→tweak→screenshot loops — verify headlessly (`node --check`, curl, grep, evaluating the geometry in `vm`) and let him review on his own screen. Batch questions into one message.
- **Read the case study before drawing the icon.** Three SYS 03 icons were wasted drawing a building because the project is *titled* “IYH Digital Twin.” `projects/iyh-digital-twin.v2.html` says the class modelled the hall; Samuel's 3-person sub-team owns the **delivery layer** — one twin walkable on Web / Meta Quest / Vision Pro with Google-Maps-style waypoint navigation.
- When Samuel requests a specific thing and then rejects the result, the request was a symptom, not the fix — re-derive the underlying constraint before building again.

Dev server: `python3 .claude/devserver.py 4599`

Current previews:
- Main responsive prototype: `http://localhost:4599/prototypes/mockup-d-sonar.html`
- Before-copy, kept servable for A/B: `http://localhost:4599/prototypes/mockup-d-sonar-prepage.html`
- True 390×844 phone simulator: `http://localhost:4599/prototypes/mockup-d-sonar-phone.html`
- 3D relay mock: `http://localhost:4599/prototypes/relay-3d-mock.html`
- Heart site, finished and live: `http://localhost:4599/projects/heart-valve/app/`

Relay geometry lives in `prototypes/relay-engine.js` and is mounted by both the mock and the page —
one copy, they cannot drift. Do not re-inline it.
Verify headlessly: run the engine through node's `vm`, assert no non-finite coords, every cloud
fits to 1500, yellow only in `gum`, and diagonal extents/centres match across chapters.

Testing caveat:
- Avoid repeatedly spawning `/Applications/Google Chrome.app` from Node for screenshots on this Mac. Those child processes caused macOS Chrome crash dialogs during application registration.
- Prefer an existing browser session/manual localhost review.
