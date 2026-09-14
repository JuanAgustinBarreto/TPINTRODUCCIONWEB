document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('a');

  function toggleMenu() {
    const isOpen = hamburgerBtn.classList.toggle('activo');
    navMenu.classList.toggle('activo');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  }

  // Desplegar o colapsar menú al presionar el botón
  hamburgerBtn.addEventListener('click', toggleMenu);

  // Cerrar el menú al seleccionar un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('activo')) {
        toggleMenu();
      }
    });
  });

  // Cerrar menú al hacer click en cualquier parte fuera de la navegación
  document.addEventListener('click', (e) => {
    const isClickInside = hamburgerBtn.contains(e.target) || navMenu.contains(e.target);
    if (!isClickInside && navMenu.classList.contains('activo')) {
      toggleMenu();
    }
  });
});