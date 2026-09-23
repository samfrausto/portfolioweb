# Scarlet poker — playable local prototype

Texas Hold’em in a scarlet, gold and ivory interface. Private multiplayer tables have a shared
starting play-chip buy-in (1,000 / 2,000 / 5,000), invitation links and up to six seats. Practice
starts a real hand against three simple automated opponents. No money, accounts or purchases.

## Run

From this directory, with Node 22 or newer:

```sh
npm start
```

Open http://localhost:8794. No external packages are required. `PORT` can override 8794.
The server binds to 0.0.0.0: devices on the same LAN can use the host computer’s LAN address
if its firewall permits. A localhost invitation only works on the host computer. Different
players need independent browser sessions/devices; tabs share the same seat cookie.

```sh
npm test
npm run build
```

`build` validates server, engine and browser JavaScript. The app serves its own public directory;
there is no generated bundle and no external CDN or font dependency. This directory is separate
from the portfolio build. Do not copy only its HTML into the live portfolio: multiplayer needs
the running server. Samuel authorized publication on September 22. The release configuration is
prepared; public deployment still needs hosting account access. See [DEPLOYMENT.md](DEPLOYMENT.md).

## What works

- Host/join private tables; bot practice; starting chip-stack selection; shareable room links.
- Blinds, all four betting rounds, legal actions, short all-ins/reopening, side pots, tied hands,
  odd-chip distribution, showdown, repeat hands and zero-stack chip refills between hands.
- Server-authoritative dealing and moves; cryptographic shuffle; per-player private card views.
- Same-browser reconnection via an HttpOnly session cookie, state revisions rejecting stale actions,
  and server-enforced 45-second private-table turns (check when free, otherwise fold).
- Practice bots use only their own cards and public information. Human practice turns are untimed.
- Responsive desktop/phone layout, explicit betting amounts, keyboard controls, native dialogs,
  reduced motion, suit symbols plus color, hand history and a short rules guide.

## Architecture and boundaries

- `engine.mjs`: dependency-free JavaScript rules, evaluator, legal moves, settlement and bot policy.
- `server.mjs`: HTTP API, cookie sessions, private room state and server-sent events. Mutations use
  same-origin JSON POSTs; events transmit only each player’s allowed view. Room codes are invitation
  identifiers, not identities. Player IDs alone do not authorize actions.
- `public/cards.js` and `cards.css`: shared original SVG deck and illustrated hand examples.
- `public/`: plain HTML/CSS/JavaScript client. No hidden opponent cards are sent to it before showdown.
- `test/`: rules and two-client HTTP/event-stream integration coverage, including randomized
  legal-hand chip conservation and rejection of malformed/stale/out-of-turn actions.

This first version is JavaScript, not C++. It demonstrates a working client/server experience;
it does not satisfy the engineering posting’s C++ requirement. A production-used C++ rules module
is a possible follow-up after Samuel chooses the scope and reviews the design.

## Known prototype limits / next work

- Rooms and sessions are in memory. Server restarts clear tables. This is a single-process local
  prototype; durable state, hosting, TLS/secure-cookie configuration and production operations
  remain before a public launch. `SECURE_COOKIE=1` enables Secure cookies behind HTTPS.
- Bots are basic practice opponents, not a poker strategy coach or competitive AI.
- Host manually deals each hand. Host responsibility transfers on explicit leave, but an absent
  host must return to start the next hand; automatic host takeover is not implemented.
- Leave is available between hands or after folding. Closing a browser preserves its seat;
  private turns time out. Empty/departed seats are reused between hands when new players join.
- Rebuy is one original starting stack when broke and between hands, not arbitrary cash-style stacks.
- No spectator mode, chat, tournaments, account history, persistence across restarts or public lobby.
- Automated and browser checks are implementation evidence, not a real-player usability study.
  Next: observe 3–5 players joining, calling/raising and interpreting showdown; revise from findings.
- This is AI-assisted implementation. Document Samuel’s actual decisions, revisions and contributions
  before using it as a portfolio case study; do not invent research or outcomes.

## Verification evidence

15 automated tests pass, including 250 seeded randomized hands and two independent HTTP clients.
Browser checks and screenshots are recorded under `output/playwright/scarlet-poker/` at the repo root.
Rules references: https://www.pokerstars.com/poker/games/texas-holdem/ and
https://www.pokertda.com/view-poker-tda-rules/ .

## Visual hand guide and publishing

“How to play” now includes ten ordered five-card examples (royal flush through high card),
plain-language descriptions, ace/tie notes and betting basics. Example correctness/order is
checked against the real game evaluator. Original SVG artwork supplies pip layouts, mirrored
court faces, indexed corners and patterned scarlet/gold backs at all UI sizes.

See [DEPLOYMENT.md](DEPLOYMENT.md) for the verified hosting assessment: a separately hosted
Node service at a portfolio subdomain is the simplest fit. A /poker subpath needs integration;
static upload alone will not run either mode. No publishing has occurred.
