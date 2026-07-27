# Claude Code / Fable

For portfolio **design strategy and creative direction**, use **Fable** and start from:

→ [`FABLE_DESIGN_BRIEF.md`](FABLE_DESIGN_BRIEF.md)

Copy/paste continuation prompt:

→ [`CONTINUE_IN_CLAUDE.md`](CONTINUE_IN_CLAUDE.md)

Current checkpoint: **Direction D — “Sonar,” responsive hero/mobile scroll transition, 2026-07-27.**

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

Dev server: `python3 .claude/devserver.py 4599`

Current previews:
- Main responsive prototype: `http://localhost:4599/prototypes/mockup-d-sonar.html`
- True 390×844 phone simulator: `http://localhost:4599/prototypes/mockup-d-sonar-phone.html`

Testing caveat:
- Avoid repeatedly spawning `/Applications/Google Chrome.app` from Node for screenshots on this Mac. Those child processes caused macOS Chrome crash dialogs during application registration.
- Prefer an existing browser session/manual localhost review.
