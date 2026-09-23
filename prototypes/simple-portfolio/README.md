# Published 2D portfolio

Samuel approved launch on September 22, 2026 after removing the Pure Kick × Harley-Davidson and
Fla-Vor-Ice × Crayola cards from the main grid. Eleven projects and 18 skill filters remain.
Company logos retain their relationship labels; the removed campaigns link to existing case pages.
The root build publishes this page at `/` and preserves the reviewed workshop at `/immersive/`,
with a Simple portfolio return link. Referenced assets live under `/portfolio/` to avoid collisions
with the workshop. The original project URLs and résumé remain available.

Build: `npm ci --prefix prototypes/spatial-study`, then `npm run build` from repository root.
Production follows `main` through the existing Vercel integration.

Earlier prototype notes below are historical; this release supersedes their local-only status.

# Simple portfolio prototype

Local-only static 2D proposal following Samuel's Treyarch feedback. Preview:
http://127.0.0.1:8793/prototypes/simple-portfolio/ . No root-build dependencies.
Root homepage, original case pages, production and pre-existing edits remain unchanged.

## Current direction

Samuel requested the full worthwhile project library, specific skill filters, About and more life
inspired by Overwatch. All 13 documented projects are shown; clinical work and traffic have text-only
entries because public demos are unavailable. No invented previews or new outcome claims.

Design plan: cool slate #f0f3f7, white #ffffff, navy #25344b, secondary #59667a, orange #ff9c36,
link blue #176199. Local Barlow Condensed carries headings; Avenir/system sans carries reading text.
Compact identity and introduction, sticky skill library, two-column project grid, then personal About.
Orange selections and angled italic type provide the game-interface influence. Authentic work stays
visually dominant. No game artwork or logos copied. Reference: https://overwatch.blizzard.com/en-us/heroes/ .

```
Name                                  Work / About / Resume / Explore in 3D
Interaction design & XR.               Summer 2027 availability
Filter by skill       All work / active skill                     Project count
Design                [Project image]       [Project image]
Development           What / contribution   What / contribution
3D & simulation       [Next project]        [Next project]
Research & comms
Portrait              About / current work / interests / email
```

Review against the brief: a required selection would hide the evidence. All projects remain visible
by default. The 20 skill filters select one skill at a time and display matching counts. On mobile,
filters open on demand, then close after selection with keyboard focus returned to their summary.
No nested project readers; demos play inline and each public project has one direct link.
Brief filter feedback is disabled for reduced motion; no ambient autoplay. About is concise and
uses Samuel's previously supplied narrative and photo, plus his stated love of Overwatch.

## Sources and scope

Current launch source: `/Users/sjfraust/.codex/worktrees/9250/portfolio 3/portfolio.js`,
`prototypes/spatial-study/content.js`, `prototypes/spatial-study/about-content.jsx`, and the
corresponding existing project case pages. Latest facts take precedence over older claims.
Images and demos are authentic, copied from that checkout. Alma uses a fresh browser capture of
its live pump-and-circuit lesson. IYH uses a clearly labeled campus reference photo. Original CV
was copied without alteration. Barlow fonts come from google/fonts, licensed under bundled OFL.txt.

Personal learning takeaways remain pending. Documented methods are labeled “Skills used.”
Synesthesia is technical-only; Alma credits AI assistance and purchased 3D4SCI anatomy; research
status remains explicit. Specific filter tags map to documented contributions, not every tool
Samuel has encountered. No proficiency levels are invented.

Project links open the existing live pages. Explore in 3D opens the live workshop in another tab.
Before homepage promotion, move the workshop to an explicit `/immersive/` route and update that link.
Existing detailed case pages still need their own concise-copy pass. No deployment authorization.

## Verification

Browser checks cover desktop and 320/390/768/1024/1440 widths, keyboard filters, query persistence,
Back, mobile focus/collapse, reduced motion, inline playback, no-JS reading and remote links.
Screenshots: `output/playwright/library-desktop.png`, `library-phone.png`, `library-about.png`,
`library-about-phone.png`, `library-full.png` at repository root. Not a substitute for user approval.

## Logo navigation and Alma recording — September 22

Samuel liked the 2D direction and requested a company/brand logo strip, stronger immersive invitation,
and an Alma cover showing valves/blood flow. Eight logo links now select related projects, clear skill
filters, update the URL, focus the work region, and preserve Back/reload. Show all work resets either
filter type. Modified clicks remain normal links.

Affiliations: Edwards = current contractor/former intern; Jel Sert = R&D/communications internships;
Harley-Davidson, Crayola and Pure Kick = campaign work through Jel Sert; UChicago = research fellowship;
NVIDIA = USC digital twin research led by a Senior Workflow Specialist at NVIDIA; the logo filters to Traffic only. Samuel directly named Otter Pops
among work associations, but no separate case exists: its link shows Jel Sert experience with this
scope stated explicitly, not invented Otter Pops project details.

The main intro now carries “Prefer to explore? Step inside my immersive portfolio.” with a prominent
navy/orange link and a small CSS room illustration. It opens the existing live workshop in a new tab.
Alma uses `media/alma-cycle.mp4`: a five-second, 30 fps cycle assembled from 150 actual app
frames captured at evenly spaced dial positions. This replaces the dropped-frame live capture;
it is a controlled demonstration, not a benchmark of live app performance. Valve states, blood
volume and pressure are from the real app, with no generated imagery or interpolated anatomy.
Native controls, muted playback, no autoplay, pause when filtered out; frame 50 is the poster.
The clip is 574 KB. Raw frames: `output/playwright/alma-frames/`; old recordings remain in QA.

Local logo files supply Edwards, Jel Sert, Otter Pops, Pure Kick, UChicago and the NVIDIA symbol.
Harley-Davidson bar-and-shield: official museum archive asset at
https://www.harley-davidson.com/ctfasset/5vy1mse9fkav/1I3JvxExR2pq2XDhn5q2D6/4d7f7dddfb7634fb8e1b41fceb164616/4.2.4_Story4_MediaGrid_Card3_ClassicLogoToday.jpg .
Crayola: https://www.crayola.com/img/icons/crayolalogosmall.svg .
Logos are navigation, not an endorsement claim. Screenshots: `affiliations-desktop.png` and
`affiliations-phone.png` in the existing QA folder.

## Supplied Pavilia demo and smoother Alma preview — September 22

Samuel supplied `Screen Recording 2025-11-07 at 10.38.45 AM.mov` from his ACAD 217 folder.
The web excerpt trims the Unity setup, crops editor chrome and shows the portal approach, crossing
and second environment. Keep the teammate/environment attribution. Native video controls, no
autoplay, on-demand loading and the existing mutually exclusive playback apply to both demos.

NVIDIA’s caption now reads “Digital Twin Research led by Sr. Workflow Specialist.” Its result
explains the USC context and shows Traffic only, rather than unrelated projects using NVIDIA tools.

The Pavilia excerpt is 26 seconds, 1280×710, 30 fps H.264 MP4 with fast-start metadata, about
5.6 MB (source about 273 MB). Trim: 10–36 seconds; crop removes Unity chrome; no audio. Alma
is 1280×800 H.264 with fast-start metadata. Browser samples decoded both at 30 fps with zero
dropped frames; starting Pavilia pauses Alma, and filtering Pavilia away pauses it. NVIDIA shows
Traffic only, reset returns 13, and 320/390/768/1440 layouts have no horizontal overflow.
