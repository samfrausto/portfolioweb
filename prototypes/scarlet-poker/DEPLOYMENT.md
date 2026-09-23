# Publishing Scarlet alongside the portfolio

## Live release — September 22, 2026

Live game: https://scarlet-poker.onrender.com/ . Render service `srv-daplinqd0e5s739hssi0`
successfully deployed commit `f550ec6` from `codex/scarlet-launch-20260922` in
`samfrausto/portfolioweb`. The service was created from the public Git URL without granting
GitHub account access. Samuel’s edited headline and lead are included.

The service uses Node 22, one Free instance, Secure cookies, health check `/`, build command
`npm run build && npm test`, start command `npm start`, root directory `prototypes/scarlet-poker`,
and manual deployment. These settings match this directory’s `render.yaml`; no Blueprint was
created. Dashboard: https://dashboard.render.com/web/srv-daplinqd0e5s739hssi0 .

Live verification: two independent HTTP sessions completed a hand, conserved all chips,
received only their own private cards, connected to the SSE stream and resumed the same seat.
Secure/HttpOnly cookies were verified. A real browser created a practice table, called, saw bots
advance to the flop and resumed its seat on reload. This is implementation QA, not a user study.

The portfolio release adds a temporary redirect from `/poker/:path*` to the live Render address.
This provides a shareable portfolio shortcut; the browser changes to the Render domain. It is
not a reverse proxy. The portfolio homepage content is unchanged.

The Free instance sleeps after 15 minutes without inbound traffic and can take about a minute
to wake. Tables disappear on restart because this version stores state in memory. A paid
instance alone would not fix restart recovery. No paid compute or new spending was approved.

## Current implementation

Scarlet uses plain HTML/CSS/JavaScript and original inline SVG card artwork in the browser.
A dependency-free Node.js HTTP server owns rooms, sessions, shuffled cards, bots and validated
poker actions. JSON POST requests submit moves; server-sent events deliver per-player updates.
The rules/evaluator are custom JavaScript. There is no database or C++ component.

Both multiplayer and bot practice depend on the server. Copying the public directory to static
portfolio hosting will display part of the interface but cannot create a table or run a game.
The portfolio's inspected Vercel configuration builds static output in dist; it does not launch
Scarlet's server. The portfolio configuration adds only the redirect described above.

## Recommended arrangement

Keep the existing portfolio host. Deploy Scarlet as a separate, continuously running Node web
service, and connect a subdomain such as poker.samfrausto.com. Link to it from the portfolio.
This is a proposed address, not a configured or published endpoint.

The app already serves its frontend and API from one origin, accepts PORT and binds 0.0.0.0.
A host such as Render supports Node web services and custom domains with HTTPS. The prepared
Free-instance configuration above does not create an account, approve spending or change DNS.

## Can it be samfrausto.com/poker instead?

Yes, with extra integration. The current app is rooted at / and contains root-relative asset,
API, navigation and invitation URLs. Simply copying it into /poker will break those routes.
A prefix-aware app plus an external rewrite/reverse proxy can present it under that path while
routing to the game server. Vercel supports external rewrites, but the complete path, cookies,
Origin validation, forwarded host behavior and event-stream/reconnect behavior need testing.
Subdomain hosting avoids most of that path integration work.

## Before calling the public game ready

- Choose the server host and domain, deploy the full app and use HTTPS/Secure cookies.
- Persist room/session state (including safe handling of private cards) and restore timers so a
  restart/deployment does not silently erase a live hand. A database or disk alone is not enough
  until the app actually saves/restores it.
- Keep one authoritative server instance until shared state/coordination supports multiple workers.
- Verify long-lived event streams, reconnection, invite links, real device/browser play and server
  restart recovery in the hosting environment. Avoid an instance that sleeps during active play.
- Add absent-host takeover and observe actual people using the game before portfolio claims about UX.

These are readiness steps, not changes already implemented. The local prototype remains usable;
its current memory-only state resets on restart. UI changes do not solve persistence or hosting.

## Official references checked September 22, 2026

- [Render web services](https://render.com/docs/web-services)
- [Render custom domains](https://render.com/docs/custom-domains)
- [Vercel rewrites](https://vercel.com/docs/routing/rewrites)
- [Render Blueprint configuration](https://render.com/docs/blueprint-spec)
- [Render Free instance limits](https://render.com/docs/free)
