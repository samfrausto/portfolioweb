const library = document.querySelector('.skill-library');
const buttons = [...library.querySelectorAll('[data-filter]')];
const brands = [...document.querySelectorAll('[data-experience]')];
const projects = [...document.querySelectorAll('.project')];
const status = document.querySelector('#filter-status');
const heading = document.querySelector('#work-title');
const context = document.querySelector('#experience-context');
const reset = document.createElement('a');
reset.className = 'reset-filter';
reset.href = '?';
reset.textContent = 'Show all work';
reset.hidden = true;
status.after(reset);
const experiences = {
  edwards: {title:'Edwards Lifesciences', projects:['alma','clinical'], note:'XR learning design · current contractor, previously an intern.'},
  jelsert: {title:'Jel Sert', projects:['jamba'], note:'Launch communications from my Jel Sert internship.'},
  otter: {title:'Jel Sert experience', projects:['jamba'], note:'Otter Pops is part of my Jel Sert experience. Below is my public Jel Sert launch case study; a separate Otter Pops case study is not available.'},
  uchicago: {title:'UChicago', projects:['tet2'], note:'ResearcHStart research fellowship · Kron Lab.'},
  nvidia: {title:'Digital twin research', projects:['traffic'], note:'USC digital twin research led by a Senior Workflow Specialist at NVIDIA.'}
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
  if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
if (narrow.matches) details.open = false;
narrow.addEventListener('change',event => {if (!event.matches) details.open = true;});
showSelection(readSelection(),false);
buttons.forEach(button => button.addEventListener('click',() => {
  select({skill:button.dataset.filter});
  if (narrow.matches) {
    details.open = false;
    library.querySelector('summary').focus({preventScroll:true});
    library.scrollIntoView({block:'start'});
  }
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
