const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

function setMenu(open) {
  toggle.classList.toggle('is-open', open);
  nav.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
}

toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

const backToTop = document.querySelector('[data-back-to-top]');
window.addEventListener('scroll', () => backToTop.classList.toggle('is-visible', window.scrollY > 700), { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
