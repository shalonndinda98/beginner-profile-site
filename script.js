const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const year = document.querySelector('#year');

// Open and close the navigation menu on small screens.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

// Close the mobile menu after choosing a section.
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  });
});

// Keep the copyright year current automatically.
year.textContent = new Date().getFullYear();
