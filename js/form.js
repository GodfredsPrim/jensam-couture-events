const form = document.querySelector('[data-contact-form]');
const status = document.querySelector('[data-form-status]');
const requiredFields = ['name', 'email', 'event-type', 'services-needed', 'message'];

function showError(field, message) {
  const row = field.closest('.form-row');
  row.classList.toggle('has-error', Boolean(message));
  row.querySelector(`[data-error-for="${field.id}"]`).textContent = message;
}
function validate() {
  let valid = true;
  requiredFields.forEach((id) => {
    const field = document.getElementById(id);
    const message = field.value.trim() ? '' : 'Please complete this field.';
    showError(field, message);
    valid = valid && !message;
  });
  const email = document.getElementById('email');
  if (email.value && !email.validity.valid) {
    showError(email, 'Please enter a valid email address.');
    valid = false;
  }
  return valid;
}
form.addEventListener('input', (event) => {
  if (event.target.matches('input, select, textarea')) showError(event.target, '');
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = '';
  if (!validate()) {
    status.textContent = 'Please review the highlighted fields.';
    return;
  }
  status.textContent = 'Thank you. Your enquiry is ready to be connected to Jensam.';
  form.reset();
});
