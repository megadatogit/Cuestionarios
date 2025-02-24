
//btn flotante
var menu = document.querySelector('#flt-menu');
menu.onclick = function(){
    menu.classList.toggle("active");
}

//calendario

document.querySelectorAll('.cnt-cal ol li').forEach(day => {  
    day.addEventListener('click', function() {  
        const selectedDay = this;  
        const dayNumber = selectedDay.textContent;  

        // Cambiar el color de fondo del día seleccionado  
        selectedDay.style.backgroundColor = '#00daea';
        selectedDay.style.color='white';  

        // Mostrar el formulario  
        const formContainer = document.getElementById('#cnt-formulario');  
        formContainer.style.visibility = 'visible';  
        
        

        // Manejar la sumisión del formulario  
        document.getElementById('eventForm').addEventListener('submit', function(event) {  
            event.preventDefault(); // Evitar el envío del formulario  
            alert(`Evento guardado para el día ${dayNumber}`);  
            // Puedes agregar más lógica aquí para manejar el evento  
        });  
    });  
});