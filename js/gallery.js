const items = [...document.querySelectorAll('.gallery-item')];
const filters = [...document.querySelectorAll('[data-filter]')];
const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');
let activeItems = items;
let activeIndex = 0;

function renderLightbox() {
  const item = activeItems[activeIndex];
  lightboxImage.src = item.dataset.image;
  lightboxImage.alt = item.querySelector('img').alt;
  lightboxCaption.textContent = item.dataset.caption;
}
function setLightbox(open) {
  lightbox.classList.toggle('is-open', open);
  lightbox.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
  if (open) renderLightbox();
}
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((button) => button.classList.remove('is-active'));
  filter.classList.add('is-active');
  const category = filter.dataset.filter;
  activeItems = category === 'all' ? items : items.filter((item) => item.dataset.category === category);
  items.forEach((item) => item.hidden = !activeItems.includes(item));
}));
items.forEach((item) => item.addEventListener('click', () => {
  activeItems = items.filter((galleryItem) => !galleryItem.hidden);
  activeIndex = activeItems.indexOf(item);
  setLightbox(true);
}));
document.querySelector('[data-lightbox-close]').addEventListener('click', () => setLightbox(false));
document.querySelector('[data-lightbox-prev]').addEventListener('click', () => { activeIndex = (activeIndex - 1 + activeItems.length) % activeItems.length; renderLightbox(); });
document.querySelector('[data-lightbox-next]').addEventListener('click', () => { activeIndex = (activeIndex + 1) % activeItems.length; renderLightbox(); });
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) setLightbox(false); });
document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (event.key === 'Escape') setLightbox(false);
  if (event.key === 'ArrowLeft') document.querySelector('[data-lightbox-prev]').click();
  if (event.key === 'ArrowRight') document.querySelector('[data-lightbox-next]').click();
});
