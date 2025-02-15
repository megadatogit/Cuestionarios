const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menu = document.querySelector('header');  
const footer = document.querySelector('footer');  
const logo = document.querySelector('.logo');

// Abrir y cerrar el menú al hacer click en el botón abrir
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


// Mostrar/ocultar el menú al desplazarse en la página
window.addEventListener('scroll', function() {  
    const footerPosition = footer.getBoundingClientRect().top;  
    
    // Si el footer está a menos de 100px de la parte superior de la ventana  
    if (footerPosition <= 500) {  
        menu.style.opacity = '0'; // Desvanece el menú  
    } else {  
        menu.style.opacity = '1'; // Muestra el menú  
    }  
});

window.addEventListener('scroll', function() {

    const heightHero = document.querySelector('.cnt-hero').offsetHeight;
    if(this.window.scrollY > heightHero){
        
        logo.style.opacity = '1';
    } else {
        
        logo.style.opacity = '0';
    }
    

} );
