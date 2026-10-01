const library = document.querySelector('.skill-library');
const buttons = [...library.querySelectorAll('[data-filter]')];
const brands = [...document.querySelectorAll('[data-experience]')];
const projects = [...document.querySelectorAll('.project')];
const status = document.querySelector('#filter-status');
const heading = document.querySelector('#work-title');
const context = document.querySelector('#experience-context');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
reducedMotion.addEventListener('change', event => {
  if (event.matches) document.querySelector('.work-results').getAnimations().forEach(animation => animation.cancel());
});
const reset = document.createElement('a');
reset.className = 'reset-filter';
reset.href = '?';
reset.textContent = 'Show all work';
reset.hidden = true;
status.after(reset);
const experiences = {
  edwards: {title:'Edwards Lifesciences', projects:['alma','clinical'], note:'XR learning design · current contractor, previously an intern.'},
  jelsert: {title:'Jel Sert', projects:['jamba'], note:'Launch communications from my Jel Sert internship.'},
  usc: {title:'USC Iovine & Young Academy', projects:['cyberpunk','traffic','iyh','suzchews','pavilia','synesthesia'], note:'B.S. Human-Technology Interaction, class of 2028. Coursework and directed research, with individual and team responsibilities stated below.'},
  uchicago: {title:'UChicago', projects:['tet2'], note:'ResearcHStart research fellowship · Kron Lab.'},
  nvidia: {title:'Autonomous Vehicle Digital Twin Research', projects:['traffic'], note:'USC faculty-directed research led by a Senior Workflow Specialist at NVIDIA. This is academic research, not NVIDIA employment or sponsorship.'}
};

function showSelection({skill='all', experience}={}, animate=true) {
  const affiliation = experiences[experience];
  const selected = buttons.find(button => button.dataset.filter === skill) || buttons[0];
  const value = selected.dataset.filter;
  const label = affiliation ? affiliation.title : selected.firstElementChild.textContent;
  buttons.forEach(button => button.setAttribute('aria-pressed', String(!affiliation && button === selected)));
  brands.forEach(brand => {
    if (affiliation && brand.dataset.experience === experience) brand.setAttribute('aria-current','true');
    else brand.removeAttribute('aria-current');
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = affiliation ? !affiliation.projects.includes(project.id) : value !== 'all' && !project.dataset.skills.split(' ').includes(value);
    if (project.hidden) project.querySelectorAll('video').forEach(video => video.pause());
    else count++;
  });
  heading.textContent = label;
  status.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
  context.hidden = !affiliation;
  context.textContent = affiliation?.note || '';
  reset.hidden = !affiliation && value === 'all';
  if (animate && !reducedMotion.matches) {
    document.querySelector('.work-results').animate([{opacity:.65},{opacity:1}],{duration:180});
  }
}
function readSelection() {
  const params = new URL(location.href).searchParams;
  return {skill:params.get('skill') || 'all',experience:params.get('experience')};
}
function select(selection) {
  showSelection(selection);
  const url = new URL(location.href);
  url.searchParams.delete('skill');
  url.searchParams.delete('experience');
  url.hash = 'work';
  if (selection.experience) url.searchParams.set('experience',selection.experience);
  else if (selection.skill && selection.skill !== 'all') url.searchParams.set('skill',selection.skill);
  history.pushState(null,'',url);
}

// All projects remain readable if JavaScript is unavailable.
library.hidden = false;
const details = library.querySelector('details');
const narrow = matchMedia('(max-width:850px)');
// Anchor targets and sticky filters follow the header's actual wrapped height.
const header = document.querySelector('.site-header');
const updateHeaderHeight = () => document.documentElement.style.setProperty('--header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
updateHeaderHeight();
new ResizeObserver(updateHeaderHeight).observe(header);
if (narrow.matches) details.open = false;
narrow.addEventListener('change',event => {details.open = !event.matches;});
showSelection(readSelection(),false);
buttons.forEach(button => button.addEventListener('click',() => {
  select({skill:button.dataset.filter});
  if (narrow.matches) {
    details.open = false;
    library.querySelector('summary').focus({preventScroll:true});
    library.scrollIntoView({block:'start'});
  }
}));
// Keep the complete logo and role visible when tabbing through the phone row.
brands.forEach(brand => brand.addEventListener('focus', () => {
  const strip = brand.closest('.brand-strip');
  if (strip.scrollWidth <= strip.clientWidth) return;
  const bounds = strip.getBoundingClientRect();
  const item = brand.getBoundingClientRect();
  if (item.left < bounds.left + 4) strip.scrollLeft += item.left - bounds.left - 4;
  else if (item.right > bounds.right - 4) strip.scrollLeft += item.right - bounds.right + 4;
}));
brands.forEach(brand => brand.addEventListener('click',event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  event.preventDefault();
  select({experience:brand.dataset.experience});
  document.querySelector('#work').focus({preventScroll:true});
  document.querySelector('#work').scrollIntoView({block:'start'});
}));
reset.addEventListener('click',event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  event.preventDefault();
  select({skill:'all'});
  document.querySelector('#work').focus({preventScroll:true});
});
addEventListener('popstate',() => showSelection(readSelection()));

// Playback is user-controlled; selecting another project pauses the current demo.
document.querySelectorAll('video').forEach(video => video.addEventListener('play',() => {
  document.querySelectorAll('video').forEach(other => {if (other !== video) other.pause();});
}));
document.addEventListener('visibilitychange',() => {
  if (document.hidden) document.querySelectorAll('video').forEach(video => video.pause());
});
