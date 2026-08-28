import './navigation.js';
import './gallery.js';
import './animations.js';
import './form.js';
import './contact-details.js';

const testimonials = [
  ['Jensam brought every detail of our celebration together beautifully. From the outfit to the decor, everything felt intentional.', 'Client review placeholder'],
  ['A beautiful experience from the first conversation to the final detail. The Jensam touch is unmistakable.', 'Client review placeholder'],
  ['The care, creativity, and cultural detail made our day feel completely ours.', 'Client review placeholder']
];
let testimonialIndex = 0;
const quote = document.querySelector('[data-quote]');
const author = document.querySelector('[data-author]');
const count = document.querySelector('[data-slide-count]');
function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  quote.textContent = testimonials[testimonialIndex][0];
  author.textContent = testimonials[testimonialIndex][1];
  count.textContent = `0${testimonialIndex + 1} / 0${testimonials.length}`;
}
document.querySelector('[data-carousel="prev"]').addEventListener('click', () => showTestimonial(testimonialIndex - 1));
document.querySelector('[data-carousel="next"]').addEventListener('click', () => showTestimonial(testimonialIndex + 1));
