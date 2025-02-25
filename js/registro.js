const cards = document.querySelectorAll('body > div');
const inputCorreo = document.querySelector('input[placeholder="Correo electrónico"]');
const inputTelefono = document.querySelector('input[placeholder="Captura tu número a 10 dígitos"]');
const inputContrasena = document.querySelector('input[placeholder="Crear contraseña"]');
const datosRegistro = {
    correo: '',
    telefono: '',
    contrasena:'',
    prefijoTel: 52
}

window.onload = () => {
    cards[0].style.display = 'grid';
    for(let x = 0; x<cards.length; x++){
        
    }
}
const salidaCartas = i => {
    cards[i].style.animation = 'salida 1s'
    setTimeout(() => {
        cards[i].style = {
            ...cards[i],
            display: 'none',
            animation: ''
        }
        cards[++i].style.display = 'grid';
    }, 500)
}
inputCorreo.addEventListener('input', e => {
    datosRegistro.correo = inputCorreo.value;
    console.log(datosRegistro.correo)
})
inputTelefono.addEventListener('input', e => {
    datosRegistro.telefono = inputTelefono.value;
    console.log(datosRegistro.telefono);
})
inputContrasena.addEventListener('input', e => {
    datosRegistro.contrasena = inputContrasena.value;
    console.log(datosRegistro.contrasena)
})