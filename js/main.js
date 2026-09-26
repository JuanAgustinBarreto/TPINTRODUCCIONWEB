document.addEventListener('DOMContentLoaded', () => {
  // ==========================
  // GESTIÓN DEL MODO OSCURO
  // ==========================
  const htmlElement = document.documentElement;
  const botonToggleTema = document.getElementById('btn-modo-oscuro');

  // Sincroniza el tema actual al cargar la página
  const temaGuardado = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-bs-theme', temaGuardado);

  // Sincroniza el texto del botón con el tema guardado
  if (botonToggleTema) {
    botonToggleTema.textContent = temaGuardado === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';

    botonToggleTema.addEventListener('click', () => {
      const actualTheme = htmlElement.getAttribute('data-bs-theme');
      const nuevoTema = actualTheme === 'dark' ? 'light' : 'dark';

      htmlElement.setAttribute('data-bs-theme', nuevoTema);
      localStorage.setItem('theme', nuevoTema);

      botonToggleTema.textContent = nuevoTema === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    });
  }
});