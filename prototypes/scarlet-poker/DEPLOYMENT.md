# Publishing Scarlet alongside the portfolio

## Release prepared September 22, 2026

Samuel explicitly requested publication after editing the landing copy in VS Code. The release
includes “No Chips? No Problem.” and “Pull up a chair and text your friends. We’ll deal you in.”
It is isolated from other unfinished portfolio changes, based on portfolio release 49cc86a.

`render.yaml` in this directory configures a single Node 22 web service on the Free instance
plan, Secure cookies, a root-page health check and a build that runs syntax checks and tests.
Automatic redeployment is disabled so a routine push does not interrupt an active table.
There is no public game URL yet. Render account sign-in is required to create the service.

To deploy the prepared release, use repository `samfrausto/portfolioweb`, branch
`codex/scarlet-launch-20260922`, and Blueprint path `prototypes/scarlet-poker/render.yaml`.
Alternatively create a Node Web Service with root directory `prototypes/scarlet-poker`,
build command `npm run build && npm test`, start command `npm start`, and the environment
variables from that file. Do not select Static Site. No paid instance or new spending is authorized.

The Free instance is a prototype hosting option: it sleeps after 15 minutes without inbound
traffic and can take about a minute to wake. Tables disappear on restart because this version
stores state in memory. A paid instance alone would not fix restart recovery. Test the assigned
HTTPS URL with independent browsers, invite links, reconnection and both game modes before
linking it from the portfolio. Custom-domain or /poker routing remains a later integration step.

## Current implementation

Scarlet uses plain HTML/CSS/JavaScript and original inline SVG card artwork in the browser.
A dependency-free Node.js HTTP server owns rooms, sessions, shuffled cards, bots and validated
poker actions. JSON POST requests submit moves; server-sent events deliver per-player updates.
The rules/evaluator are custom JavaScript. There is no database or C++ component.

Both multiplayer and bot practice depend on the server. Copying the public directory to static
portfolio hosting will display part of the interface but cannot create a table or run a game.
The portfolio's inspected Vercel configuration builds static output in dist; it does not launch
Scarlet's server. Neither the portfolio configuration nor its deployment changed in this task.

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
