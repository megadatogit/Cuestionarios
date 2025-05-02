const enlaces = document.querySelectorAll('.tipo');
const descripciones = document.querySelectorAll('.descripcion');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault(); // 👈 esto evita que brinque al top

    const targetId = enlace.getAttribute('data-target');

    descripciones.forEach(des => {
      des.classList.remove('active');
      if (des.classList.contains(targetId)) {
        des.classList.add('active');
      }
    });

    // Actualiza los estados accesibles
    enlaces.forEach(el => el.setAttribute('aria-expanded', 'false'));
    enlace.setAttribute('aria-expanded', 'true');
  });
});
