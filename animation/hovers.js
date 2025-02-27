
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

//validación
function moveToNext(current, nextFieldId) {  
    if (current.value.length === 1) {  
        document.getElementById(nextFieldId).focus();  
    }  
}  

function moveToPrev(event, current, prevFieldId) {  
    if (event.key === "Backspace" && current.value.length === 0) {  
        document.getElementById(prevFieldId).focus();  
    }  
}  

document.getElementById("confirmationForm").addEventListener("submit", function(event) {  
    event.preventDefault(); // Prevenir el envío del formulario  

    const digits = [  
        document.getElementById("digit1").value,  
        document.getElementById("digit2").value,  
        document.getElementById("digit3").value,  
        document.getElementById("digit4").value,  
        document.getElementById("digit5").value,  
        document.getElementById("digit6").value  
    ];  

    const confirmationCode = digits.join('');  

    // Validar que todos los dígitos estén completos  
    if (/^\d{6}$/.test(confirmationCode)) {  
        document.getElementById("message").innerText = "¡Código confirmado!";  

    } else {  
        document.getElementById("message").innerText = "Por favor, introduce un código de 6 dígitos válido.";  
    }  
});  