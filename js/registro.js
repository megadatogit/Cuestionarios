const cards = document.querySelectorAll('body > div');
const inputCorreo = document.querySelector('input[placeholder="Correo electrónico"]');
const datalistPrefijo = document.querySelector('datalist');
const inputPrefijo = document.getElementById('prefijo');
const inputTelefono = document.querySelector('input[placeholder="Captura tu número a 10 dígitos"]');
const inputContrasena = document.querySelector('input[placeholder="Crear contraseña"]');
const inputConfContraseña = document.querySelector('input[placeholder="Confirmar contraseña"]');
const continuar = document.querySelectorAll('button');
const contModal = document.querySelector('.modalError');
const modal = document.getElementById('error');
const datosRegistro = {
    correo: '',
    telefono: '',
    contrasena:'',
    prefijoTel: 52,
    codigoConf: ''
}
const URIbase = 'http://35.222.23.63:8030'

const liSegCarta = document.querySelectorAll('#seleccionMetodo p');

window.onload = () => {
    fetch('./../src/json/prefijos.json').then(data => data.json()).then(data => {
        document.querySelector('datalist').innerHTML = data.map(e => `<option ${e.code == 'MX' ? 'selected' : ''} value="${e.countryCode}">${e.country}</option>`).join('')
    })
    cards[0].style.display = 'grid';
    document.querySelectorAll('.codVerificacion').forEach((e, i) => {
        e.addEventListener('input', e => {
            datosRegistro.codigoConf = Array.from(document.querySelectorAll('.codVerificacion')).map(e => e.value).join('');
            if(!e.data) {
                Array.from(document.querySelectorAll('.codVerificacion')).map((e, i) => {
                    document.querySelector(`.codVerificacion:nth-child(${i+1})`).value = '';
                })
                document.querySelector(`.codVerificacion`).focus();
                return;
            }
            const aux = document.querySelector(`.codVerificacion:nth-child(${i+2})`);
            if(!aux) return;
            aux.focus();
        })
    })
    Array.from(document.querySelectorAll('.eyesCont img')).map((e, i) => e.addEventListener('click', () => {
        const input = document.querySelectorAll('.eyesCont input')[i];
        input.type = input.type == 'password' ? 'text' : 'password';
        e.src = (/eyeClosed.svg/.test(e.src)) ? './../src/svg/eyeOpened.svg' : './../src/svg/eyeClosed.svg'
    }))
}
const cambiarAtributos = () => {
    liSegCarta[0].innerHTML = `<b>Correo:</b> <p style="color: var(--color-inst); display: inline">${datosRegistro.correo}</p>`;
    liSegCarta[1].innerHTML = `<b>Teléfono:</b> <p style="color: var(--color-inst); display: inline">+${datosRegistro.prefijoTel} ${datosRegistro.telefono}</p>`;
}
const salidaCartas = (i1, i2) => {
    cards[i1].style.animation = 'salida .4s forwards'
    setTimeout(() => {
        cards[i1].style = {
            ...cards[i1],
            display: 'none',
            animation: ''
        }
        cards[i2].style.display = 'grid';
        cards[i1].style.animation = '';
    }, 400)
}
const validarFormulario = () => {
    try {
        if(!(inputContrasena.value == inputConfContraseña.value)) throw 'Las contraseñas ingresadas no coinciden. Por favor, asegúrate de que ambas contraseñas sean idénticas.';
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/.test(inputContrasena.value)) throw 'La contraseña tiene un formato inválido.';
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputCorreo.value) || !/^\d{10}$/.test(inputTelefono.value)) throw 'Tus datos son incorrectos, verifica tu correo y número de celular.';
        if(!document.querySelector('.cartaRegistro:first-of-type input[type="checkbox"]').checked) throw 'Debes aceptar los terminos y condiciones';
        cambiarAtributos();
        salidaCartas(0, 1);
    } catch (error) {
       const errorCampos = document.getElementById('errorCampos');
       errorCampos.innerHTML = error;
       errorCampos.style.display = 'block';
    }
}
inputCorreo.addEventListener('input', e => {
    errorCampos.style.display = 'none';
    datosRegistro.correo = inputCorreo.value;
})
inputPrefijo.addEventListener('input', e => {
    errorCampos.style.display = 'none';
    if(!(/^\d$/.test(e.data))) inputPrefijo.value = inputPrefijo.value.replace(/[^\d]/g, '');
    datosRegistro.prefijoTel = Number(inputPrefijo.value ? inputPrefijo.value : 52);
    fetch('./../src/json/prefijos.json').then(data => data.json()).then(data => {
        data.map(e => {
            if(e.countryCode == datosRegistro.prefijoTel){
                document.querySelector('#flag img').src = e.flag;
            }
        })
    })
})
inputTelefono.addEventListener('input', e => {
    errorCampos.style.display = 'none';
    if(!(/^\d{10}$/.test(e.data))) inputTelefono.value = inputTelefono.value.replace(/[^\d]/g, '');
    datosRegistro.telefono = inputTelefono.value;
})
inputContrasena.addEventListener('input', e => {
    errorCampos.style.display = 'none';
    datosRegistro.contrasena = inputContrasena.value;
})
inputContrasena.addEventListener('change', e => {
    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/.test(inputContrasena.value)) && inputContrasena.value) alert('Por favor, verifique la contraseña.')
})
inputConfContraseña.addEventListener('input', () => errorCampos.style.display = 'none')
const obtCodigo = metodo => {
    if(/^\d{10}$/.test(metodo)){
        fetch(`${URIbase}/preregistro/preregistro/enviar-codigo-telefono`, {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({telefono : metodo})})
        .then(async data => {
            if(!data.ok) throw await data.json();
            return data.json();
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(metodo)){
        fetch(`${URIbase}/preregistro/preregistro/enviar-codigo-correo`, {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({correo : metodo})})
        .then(async data => {
            if(!data.ok) throw await data.json();
            return data.json();
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}
const validarCodigo = () => {
    const identificador = datosRegistro[document.querySelector('input[type=radio]:checked').id];
    const codigo = datosRegistro.codigoConf;
    console.log(`${identificador, codigo}`)
    if(/^\d{10}$/.test(identificador)){
        fetch(`${URIbase}/preregistro/preregistro/validar-telefono`, {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({identificador, codigo})})
        .then(async data => {
            if(!data.ok) throw await data.json();
            return data.json();
        })
        .then(data => {
            console.log(data);
            salidaCartas(2, 3);
        })
        .catch(err => {
            console.log('Valió chupas');
            console.log(err);
        })
    }
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identificador)){
        fetch(`${URIbase}/preregistro/preregistro/validar-correo`, {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({identificador, codigo})})
        .then(async data => {
            if(!data.ok) throw await data.json();
            return data.json();
        })
        .then(data => {
            console.log(data)
            salidaCartas(2, 3);
        })
        .catch(err => {
            console.log('Valió chupas');
            console.log(err);
        })
    }
}
const enviarCodigo = () => {
    const value = document.querySelector('input[type=radio]:checked').id;
    obtCodigo(datosRegistro[value]);
    salidaCartas(1, 2);
}
const reenviarCodigo = () => {
    const value = document.querySelector('input[type=radio]:checked').id;
    fetch(`${URIbase}/preregistro/preregistro/reenviar-codigo`, {method: 'POST', body: JSON.stringify({identificador: datosRegistro[value]}), headers: {"Content-Type": "application/json"}})
    .then(async data => {
        if(!data.ok) await data.json();
        return data.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
}