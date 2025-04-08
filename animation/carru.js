document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".cntBtn a[id^='op']");
    const elementos = document.querySelectorAll(".mesa div");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
  
    let currentIndex = 0;
  
    function mostrarElemento(index) {
      elementos.forEach(el => el.classList.remove("active"));
      if (elementos[index]) {
        elementos[index].classList.add("active");
        currentIndex = index;
      }
    }
  
    // Botones individuales
    botones.forEach((boton, index) => {
      boton.addEventListener("click", () => mostrarElemento(index));
    });
  
    // Botón siguiente
    nextBtn.addEventListener("click", () => {
      let nextIndex = (currentIndex + 1) % elementos.length;
      mostrarElemento(nextIndex);
    });
  
    // Botón anterior
    prevBtn.addEventListener("click", () => {
      let prevIndex = (currentIndex - 1 + elementos.length) % elementos.length;
      mostrarElemento(prevIndex);
    });
  
    // Mostrar el primero al inicio
    mostrarElemento(0);
  });
  