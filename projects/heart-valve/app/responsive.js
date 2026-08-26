/**
 * Adaptive mobile shell for the compiled Heart Valve app.
 *
 * The application creates its section controls after the heart model resolves, so this
 * file discovers those controls as they appear rather than depending on bundle internals.
 * On phones, sections that normally show two or three fixed desktop panels receive a
 * compact view switcher: anatomy, cycle/timeline, or controls. Nothing is duplicated and
 * the original controls keep handling every drag, click, keyboard action, and physics update.
 */

const MOBILE_QUERY = '(max-width: 820px), (max-width: 980px) and (max-height: 540px)';
const mobileQuery = window.matchMedia(MOBILE_QUERY);
const body = document.body;
const root = document.documentElement;

const TOOL_SELECTORS = {
  cycle: '.phase-switch.is-visible, .beat-scrubber.is-visible',
  timeline: '.ecg-strip.is-visible, .wiggers.is-visible',
  controls: '.knob-panel.is-visible',
};

const TOOL_ROOT_SELECTOR =
  '.phase-switch, .beat-scrubber, .ecg-strip, .wiggers, .knob-panel';

let switcher = null;
let activeMode = 'heart';
let toolSignature = '';
let refreshQueued = false;

const observedTools = new WeakSet();
const toolObservers = new WeakMap();

function setViewportHeight() {
  const height = window.visualViewport?.height ?? window.innerHeight;
  root.style.setProperty('--app-height', `${Math.max(1, Math.round(height))}px`);
}

/*
 * Gesture routing for the full-screen heart canvas.
 *
 * Three.js OrbitControls writes an inline `touch-action: none` onto the canvas in its
 * constructor. An inline style beats any stylesheet rule regardless of specificity or
 * media query, so the CSS `#scene { touch-action: pan-y pinch-zoom }` alone is silently
 * defeated and the canvas — which fills almost the whole phone — would swallow every
 * vertical swipe, leaving the story impossible to scroll by touch.
 *
 * So the routing is enforced here from JS, and re-asserted because the app initialises
 * the scene asynchronously (the inline value can be written after our first pass):
 *   • phone   -> `pan-y pinch-zoom`  (vertical swipe scrolls the page, horizontal drag
 *                still reaches OrbitControls to turn the heart, pinch stays a browser
 *                zoom for accessibility)
 *   • desktop -> `none`              (restores the app's original mouse-drag orbit)
 */
const MOBILE_TOUCH_ACTION = 'pan-y pinch-zoom';
const DESKTOP_TOUCH_ACTION = 'none';

function applyCanvasGesture() {
  const canvas = document.getElementById('scene');
  if (!canvas) return;
  const wanted = mobileQuery.matches ? MOBILE_TOUCH_ACTION : DESKTOP_TOUCH_ACTION;
  if (canvas.style.touchAction !== wanted) canvas.style.touchAction = wanted;
}

function isVisible(selector) {
  return Boolean(document.querySelector(selector));
}

function availableTools() {
  const tools = [];
  if (isVisible(TOOL_SELECTORS.cycle)) tools.push('cycle');
  if (isVisible(TOOL_SELECTORS.timeline)) tools.push('timeline');
  if (isVisible(TOOL_SELECTORS.controls)) tools.push('controls');
  return tools;
}

function timelineLabel() {
  if (document.querySelector('.wiggers.is-visible')) return 'Diagram';
  if (document.querySelector('.ecg-strip.is-visible')) return 'ECG';
  return 'Timeline';
}

function modeLabel(mode) {
  if (mode === 'heart') return 'Heart';
  if (mode === 'cycle') return 'Cycle';
  if (mode === 'timeline') return timelineLabel();
  return 'Controls';
}

function preferredMode(tools) {
  if (tools.includes('timeline')) return 'timeline';
  if (tools.includes('cycle')) return 'cycle';
  if (tools.includes('controls')) return 'controls';
  return 'heart';
}

function ensureSwitcher() {
  if (switcher) return switcher;

  switcher = document.createElement('nav');
  switcher.id = 'mobile-mode-switcher';
  switcher.setAttribute('aria-label', 'Choose what fills the phone screen');
  body.appendChild(switcher);
  return switcher;
}

function paintPressedState() {
  if (!switcher) return;
  for (const button of switcher.querySelectorAll('button[data-mobile-mode]')) {
    const pressed = button.dataset.mobileMode === activeMode;
    button.setAttribute('aria-pressed', String(pressed));
  }
}

function selectMode(mode) {
  activeMode = mode;
  body.dataset.mobilePanel = mode;
  paintPressedState();
}

function rebuildSwitcher(tools) {
  const host = ensureSwitcher();
  const modes = ['heart', ...tools];
  host.replaceChildren();

  for (const mode of modes) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.mobileMode = mode;
    button.textContent = modeLabel(mode);
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', `Show ${modeLabel(mode).toLowerCase()} view`);
    button.addEventListener('click', () => selectMode(mode));
    host.appendChild(button);
  }

  paintPressedState();
}

function refreshTools() {
  refreshQueued = false;

  // Keep gesture routing correct on every pass — the scene can mount after load.
  applyCanvasGesture();

  if (!mobileQuery.matches) {
    body.classList.remove('is-mobile-layout', 'mobile-tools-visible');
    delete body.dataset.mobilePanel;
    toolSignature = '';
    switcher?.replaceChildren();
    restoreScrollCue();
    return;
  }

  body.classList.add('is-mobile-layout');
  updateScrollCue();

  const tools = availableTools();
  /*
   * One compact cycle control can share the screen with the heart. Tall controls,
   * timelines, or any multi-panel section get the switcher.
   */
  const needsSwitcher =
    tools.length > 1 || tools.includes('controls') || tools.includes('timeline');

  if (!needsSwitcher) {
    body.classList.remove('mobile-tools-visible');
    delete body.dataset.mobilePanel;
    toolSignature = '';
    switcher?.replaceChildren();
    return;
  }

  body.classList.add('mobile-tools-visible');
  const signature = tools.join('|') + `:${timelineLabel()}`;
  if (signature !== toolSignature) {
    toolSignature = signature;
    activeMode = preferredMode(tools);
    rebuildSwitcher(tools);
  } else if (activeMode !== 'heart' && !tools.includes(activeMode)) {
    activeMode = preferredMode(tools);
  }

  selectMode(activeMode);
}

function queueRefresh() {
  if (refreshQueued) return;
  refreshQueued = true;
  window.requestAnimationFrame(refreshTools);
}

function observeTool(tool) {
  if (observedTools.has(tool)) return;
  observedTools.add(tool);
  const observer = new MutationObserver(queueRefresh);
  observer.observe(tool, { attributes: true, attributeFilter: ['class'] });
  toolObservers.set(tool, observer);
}

function attachToolObservers() {
  for (const tool of document.querySelectorAll(TOOL_ROOT_SELECTOR)) {
    observeTool(tool);
  }
}

const mountObserver = new MutationObserver((records) => {
  let foundTool = false;
  for (const record of records) {
    for (const node of record.addedNodes) {
      if (!(node instanceof Element)) continue;
      if (node.matches?.(TOOL_ROOT_SELECTOR) || node.querySelector?.(TOOL_ROOT_SELECTOR)) {
        foundTool = true;
      }
    }
  }
  if (foundTool) {
    attachToolObservers();
    queueRefresh();
  }
});

mountObserver.observe(body, { childList: true, subtree: true });

function updateScrollCue() {
  const label = document.querySelector('.scroll-cue-label');
  if (!label) return;
  if (!label.dataset.desktopLabel) label.dataset.desktopLabel = label.textContent ?? '';
  label.textContent = 'Swipe up to explore · drag sideways to turn the heart';
}

function restoreScrollCue() {
  const label = document.querySelector('.scroll-cue-label');
  if (!label?.dataset.desktopLabel) return;
  label.textContent = label.dataset.desktopLabel;
}

function handleLayoutChange() {
  setViewportHeight();
  applyCanvasGesture();
  attachToolObservers();
  queueRefresh();
}

mobileQuery.addEventListener?.('change', handleLayoutChange);
window.addEventListener('resize', handleLayoutChange, { passive: true });
window.addEventListener('orientationchange', handleLayoutChange, { passive: true });
window.visualViewport?.addEventListener('resize', handleLayoutChange, { passive: true });

setViewportHeight();
attachToolObservers();
refreshTools();

// The scene/OrbitControls initialise asynchronously after the model resolves, so the
// inline touch-action can land after our first pass. Re-assert a few times (mirroring
// the app's own staggered post-load timers) and once more when fonts settle.
for (const delay of [0, 400, 1200, 3000, 6000]) {
  window.setTimeout(applyCanvasGesture, delay);
}
document.fonts?.ready.then(applyCanvasGesture);
