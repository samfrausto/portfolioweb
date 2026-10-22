(() => {
  const video = document.getElementById('demo-video');
  const caption = document.getElementById('demo-caption');
  const buttons = [...document.querySelectorAll('[data-scene]')];
  const videos = {
    rendered: {file:'iyh-rendered',label:'Rendered IYH building tour',caption:'A 60 fps rendered tour of IYH, opening on the lettered staircase. See Live interaction for the click-to-travel system in use.'},
    live: {file:'iyh-live-walkthrough',label:'Live IYH navigation interaction',caption:'Live Kit interaction recorded by Samuel · Original 30 fps video, cropped to the application and presented without audio.'},
    warehouse: {file:'warehouse-demo',poster:'warehouse-studio-proof',label:'Warehouse navigation prototype',caption:'Warehouse prototype · Recorded in the running Kit application.'}
  };
  for (const button of buttons) button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    const scene = button.dataset.scene;
    const selected = videos[scene];
    if (!selected) return;
    video.pause();
    video.poster = `../assets/iyh-navigation/${selected.poster || selected.file}.webp`;
    video.src = `../assets/iyh-navigation/${selected.file}.mp4`;
    video.setAttribute('aria-label', selected.label);
    video.load();
    caption.textContent = selected.caption;
    for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
  });
})();
