console.log('Welcome to the wedding site');

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
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
