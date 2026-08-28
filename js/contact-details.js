const details = document.querySelectorAll('.contact-details > div');
const values = {
  Location: 'Ohwim-Kumasi',
  Phone: '<a href="tel:+233540498784">0540498784</a>',
  Email: '<a href="mailto:agyapomaaforkuohrebecca@gmail.com">agyapomaaforkuohrebecca@gmail.com</a>',
  WhatsApp: '<a href="https://wa.me/233540498784" target="_blank" rel="noopener">0540498784</a>',
  Hours: 'Monday-Friday, 8:00 AM-6:00 PM<br>Sunday, 8:00 AM-6:00 PM'
};

details.forEach((detail) => {
  const label = detail.querySelector('dt')?.textContent.trim();
  if (values[label]) detail.querySelector('dd').innerHTML = values[label];
});
