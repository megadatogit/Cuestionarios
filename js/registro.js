document.addEventListener("DOMContentLoaded", function() {  
    // Muestra la primera sección (bienvenida) al cargar la página  
    showSection('bienvenida');  

    // Función para mostrar la siguiente sección del carrusel  
    function nextSection(sectionId) {  
        // Oculta todas las secciones  
        const sections = document.querySelectorAll('.seccion');  
        sections.forEach(section => {  
            section.style.display = 'none';  
        });  

        // Muestra la sección seleccionada  
        const currentSection = document.getElementById(sectionId);  
        if (currentSection) {  
            currentSection.style.display = 'block';  
        }  
    }  

    // Manejo de selección del método de verificación  
    window.selectMethod = function(method) {  
        // Aquí puedes implementar la lógica para enviar el código según el método  
        console.log(`Código enviado por: ${method}`);  
        nextSection('finalizarVerificacion');  
    }  

    // Función para volver a solicitar el código  
    window.resendCode = function() {  
        // Aquí puedes implementar la lógica para volver a enviar el código  
        console.log('Código reenviado');  
    }  

    // Función para seleccionar el rol final  
    window.selectRole = function(role) {  
        // Aquí puedes implementar la lógica para registrar el rol del usuario  
        console.log(`Rol seleccionado: ${role}`);  
        // Comportamiento adicional que quieras implementar  
        alert(`¡Has registrado exitosamente como ${role}!`);  
    }  

    // Función para mostrar sección  
    window.nextSection = nextSection;  
});