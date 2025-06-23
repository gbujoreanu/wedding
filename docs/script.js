console.log('Welcome to the wedding site');

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  const form = document.querySelector('form[action="/rsvp"]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const requiredInputs = form.querySelectorAll('[required]');
    let valid = true;

    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add('input-error');
      } else {
        input.classList.remove('input-error');
      }
    });

    if (!valid) {
      e.preventDefault();
      let errorBox = form.querySelector('.form-error');
      if (!errorBox) {
        errorBox = document.createElement('div');
        errorBox.className = 'form-error';
        form.prepend(errorBox);
      }
      errorBox.textContent = 'Please fill in all required fields.';
    }
  });
});
