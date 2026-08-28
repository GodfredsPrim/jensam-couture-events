const revealElements = document.querySelectorAll('.section-heading, .intro-copy, .editorial-figure, .service-card, .feature-copy, .wear-collage, .food-grid, .styling-grid, .gift-grid, .gallery-item, .why-grid > div, .process-line > div, .testimonial-wrap, .contact-grid > div');
revealElements.forEach((element) => element.classList.add('reveal'));
const observer = new IntersectionObserver((entries, currentObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    currentObserver.unobserve(entry.target);
  });
}, { threshold: .12 });
revealElements.forEach((element) => observer.observe(element));
