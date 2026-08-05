# Headless verification

Run from the repo root. No browser, no screenshots, no Chrome child processes.

```bash
node prototypes/verify/relay-geom.js && node prototypes/verify/page.js && node prototypes/verify/well-grid.js
```

All three exit non-zero on failure.

| script | what it proves |
| --- | --- |
| `relay-geom.js` | every cloud fits to exactly 1500, no non-finite coords, yellow only in `gum`, route only in `waypoints` (258 dots), diagonals and centres match the recorded baseline |
| `page.js` | every inline `<script>` parses, no duplicate ids, no unclosed tags, every `href`/`src` resolves on disk, `<style>` braces balance, and the data block renders 4 phone rows / 12 index entries / 4 FEATURED |
| `well-grid.js` | the phone landing cloud never escapes its reserved well, across 18 viewport sizes and both `main` paddings |

## Things that cost time to rediscover

**The tag is slot 4.** A relay point is `[x, y, z, brightness, TAG, group, arcLength]`.
Slot 3 is brightness. Checking slot 3 for tags silently reports zero of everything.

**The recorded centres are brightness-weighted.** The plain vertical mean drifts up
to 0.12 from them — `waypoints` reads +0.041 unweighted against −0.084 weighted — and
looks exactly like a regression when nothing has changed.

**The clouds are partly random.** The centre moves a little run to run (`gum` swings
about 0.03); the diagonal does not. Tolerances are set accordingly.

**`Relay` is not global in a vm.** The engine attaches to `window.Relay`, and a bare
`Relay` only resolves through `window` in a browser. `page.js` aliases it after load.

**Canvas must return something.** `getContext()` returning `null` kills the relay
mount on `setTransform`. That is the harness failing, not the page.

**`SYSTEMS` / `ALL` are unreadable from outside** — the data block is an IIFE. Assert
on the rendered HTML instead, which is the better test anyway.

**Control test.** If the dots engine throws under a stub, run the same harness against
`git show HEAD:prototypes/mockup-d-sonar.html` before believing it is your change.

`well-grid.js` mirrors CSS by hand — `main` padding, `.relay-well` height, the `wellR`
formula in `layout()`, and the 0.94 y-squash in `buildLanding()`. Change either side
and change the other.
