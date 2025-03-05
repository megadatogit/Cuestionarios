const totalImages = 91;
    const imgElement = document.getElementById('rotating-image');

    // Función que actualiza la imagen según el scroll
    function updateImage() {
      // Calcula el máximo de scroll posible
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      // Obtiene la fracción de scroll actual
      const scrollFraction = window.scrollY / maxScroll;
      // Determina el índice de la imagen a mostrar (entre 0 y totalImages - 1)
      const imageIndex = Math.min(totalImages - 1, Math.floor(scrollFraction * totalImages));
      // Construye el nombre de la imagen con el formato "unscreen-001.png"
      const filename = '/src/images/mono/unscreen-' + String(imageIndex + 60).padStart(3, '0') + '.png';
      // Actualiza la imagen solo si es diferente para evitar recargas innecesarias
      if (!imgElement.src.includes(filename)) {
        imgElement.src = filename;
      }
    }

    // Llama a la función updateImage cada vez que se realice scroll
    window.addEventListener('scroll', updateImage);

/* document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let newWidth = Math.max(100, 350 - scrollY / 2); // Evita que sea menor de 100px

    document.styleSheets[0].cssRules[0].style.setProperty("width", `${newWidth}px`);
}); */