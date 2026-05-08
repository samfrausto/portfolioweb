/* ============================================================
   SUZCHEWS PROJECT JS — shared utilities used on all 7 pages.
   Loads after main /shared.js. Idempotent and defensive.
   ============================================================ */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     1) Project sub-nav: highlight current page based on URL.
     Markup: each link gets data-page="01" .. "07".
     Page declares its own data-current via <body data-page="03">.
     ------------------------------------------------------------ */
  function markCurrentSubnav() {
    var current = document.body && document.body.dataset.page;
    if (!current) return;
    document.querySelectorAll('.proj-subnav-link').forEach(function (a) {
      if (a.dataset.page === current) a.classList.add('is-current');
    });
  }

  /* ------------------------------------------------------------
     2) Citations — auto-inject the hover tooltip span.
     Markup: <cite class="cite" data-ref="12" data-note="Smith et al. 2021. Title. Journal.">12</cite>
     This script wraps the note in a .cite-tip element so CSS can render it.
     Also makes <cite> elements behave like links to references.html#ref-N.
     ------------------------------------------------------------ */
  function hydrateCitations() {
    document.querySelectorAll('cite.cite[data-ref]').forEach(function (el) {
      // Make it behave as a link
      var ref = el.dataset.ref;
      if (!el.dataset.linkHydrated) {
        el.style.cursor = 'none';
        el.addEventListener('click', function () {
          // Resolve references.html relative to current page
          // §07 references lives at /projects/suzchews/references.html
          var path = pathToRefs() + '#ref-' + ref;
          window.location.href = path;
        });
        el.dataset.linkHydrated = '1';
      }
      // Inject tooltip span if data-note is present
      if (el.dataset.note && !el.querySelector('.cite-tip')) {
        var tip = document.createElement('span');
        tip.className = 'cite-tip';
        tip.textContent = el.dataset.note;
        el.appendChild(tip);
      }
    });
  }

  function pathToRefs() {
    // All §1–§7 pages live in projects/suzchews/, so refs are at ./references.html
    return 'references.html';
  }

  /* ------------------------------------------------------------
     3) Diagram animator — adds .in-view to .diagram-svg elements
     once they enter the viewport, triggering edge-draw + node-fade
     animations defined in suzchews.css.
     ------------------------------------------------------------ */
  function observeDiagrams() {
    var diagrams = document.querySelectorAll('.diagram-svg');
    if (!diagrams.length) return;
    if (!('IntersectionObserver' in window)) {
      diagrams.forEach(function (d) { d.classList.add('in-view'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });
    diagrams.forEach(function (d) { io.observe(d); });
  }

  /* ------------------------------------------------------------
     4) Reading-time helper.
     If a page contains <span class="auto-reading-time"></span>,
     it calculates words-per-minute from .sci-prose blocks and fills it.
     ------------------------------------------------------------ */
  function fillReadingTime() {
    var slot = document.querySelector('.auto-reading-time');
    if (!slot) return;
    var prose = document.querySelectorAll('.sci-prose, .ms-abstract');
    var words = 0;
    prose.forEach(function (n) {
      var txt = (n.innerText || n.textContent || '').trim();
      words += txt.split(/\s+/).filter(Boolean).length;
    });
    if (words === 0) { slot.textContent = '~1 min read'; return; }
    var min = Math.max(1, Math.round(words / 220));
    slot.textContent = '~' + min + ' min read';
  }

  /* ------------------------------------------------------------
     5) Word-cycler — for the §1 hero, the word "taste" cycles
     through alternates ("metal", "rancid", "taste") on first
     viewport-enter, then settles. Markup:
       <span class="word-cycle" data-words="taste,metal,rancid,taste">taste</span>
     ------------------------------------------------------------ */
  function runWordCyclers() {
    var els = document.querySelectorAll('.word-cycle[data-words]');
    if (!els.length) return;
    var prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    els.forEach(function (el) {
      var words = (el.dataset.words || '').split(',').map(function (w) { return w.trim(); }).filter(Boolean);
      if (words.length < 2) return;
      var i = 0;
      var step = function () {
        i++;
        if (i >= words.length) { el.textContent = words[words.length - 1]; return; }
        el.textContent = words[i];
        setTimeout(step, 380 + Math.random() * 220);
      };
      // Trigger only once when in view
      var triggered = false;
      var trigger = function () {
        if (triggered) return;
        triggered = true;
        setTimeout(step, 600);
      };
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) { trigger(); io.disconnect(); } });
        }, { threshold: 0.3 });
        io.observe(el);
      } else {
        trigger();
      }
    });
  }

  /* ------------------------------------------------------------
     6) Set last-updated based on document.lastModified
     ------------------------------------------------------------ */
  function fillLastUpdated() {
    var slot = document.querySelector('.auto-last-updated');
    if (!slot) return;
    var d;
    try { d = new Date(document.lastModified); }
    catch (e) { return; }
    var iso = d.getFullYear() + '.' +
      String(d.getMonth() + 1).padStart(2, '0') + '.' +
      String(d.getDate()).padStart(2, '0');
    slot.textContent = iso;
  }

  /* ------------------------------------------------------------
     Boot
     ------------------------------------------------------------ */
  function init() {
    markCurrentSubnav();
    hydrateCitations();
    observeDiagrams();
    fillReadingTime();
    fillLastUpdated();
    runWordCyclers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
