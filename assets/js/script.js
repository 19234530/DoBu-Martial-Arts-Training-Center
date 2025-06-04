// Main JavaScript (script.js) - For index.html
// This can be used for any global functionality needed across all pages
document.addEventListener('DOMContentLoaded', function () {
  console.log('DoBu Martial Arts - Home Page Loaded');

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Auto-Close Mobile Navbar on Link Click
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (
        window.innerWidth < 992 &&
        navbarCollapse.classList.contains('show')
      ) {
        // ✅ FIX: Typo in "bootstrap"
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });
});