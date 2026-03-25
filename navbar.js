// navbar.js
function initNavbar(navContainer) {
  const navLinks = navContainer.querySelector('.nav-links');
  const toggleBtn = navContainer.querySelector('.nav-toggle');

  // Mobile menu toggle
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Mobile dropdown toggle
  navContainer.querySelectorAll(".nav-dropdown > a").forEach(item => {
    item.addEventListener("click", function(e) {
      if (window.innerWidth <= 700) {
        e.preventDefault();
        this.parentElement.classList.toggle("open");
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest(navContainer)) {
      navLinks.classList.remove('open');
      navContainer.querySelectorAll('.nav-dropdown').forEach(drop => drop.classList.remove('open'));
    }
  });
}