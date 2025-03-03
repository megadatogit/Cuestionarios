const cards = document.querySelectorAll('body > div');
const inputCorreo = document.querySelector('input[placeholder="Correo electrónico"]');
const inputPrefijo = document.querySelector('input[placeholder="+52"]');
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
    cards[0].style.display = 'grid';
    document.querySelectorAll('.codVerificacion').forEach((e, i) => {
        e.addEventListener('input', e => {
            datosRegistro.codigoConf = Array.from(document.querySelectorAll('.codVerificacion')).map(e => e.value).join('');
            if(!e.data) {
                Array.from(document.querySelectorAll('.codVerificacion')).map((e, i) => {
                    document.querySelector(`.codVerificacion:nth-child(${i+1})`).value = '';
                })
                /* document.querySelector(`.codVerificacion:nth-child(${i})`)?.focus(); */
                document.querySelector(`.codVerificacion`).focus();
                return;
            }
            const aux = document.querySelector(`.codVerificacion:nth-child(${i+2})`);
            if(!aux) return;
            aux.focus();
        })
    })
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
        const errores = []
        if(!(inputContrasena.value == inputConfContraseña.value)) errores.push('Las contraseñas no coinciden.')
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/.test(inputContrasena.value)) errores.push('La contraseña tiene un formato inválido.')
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputCorreo.value)) errores.push('El correo electrónico tiene un formato inválido.')
        if(!document.querySelector('.cartaRegistro:first-of-type input[type="checkbox"]').checked) errores.push('Debes aceptar los terminos y condiciones')
        if(errores.length) throw errores;
        cambiarAtributos();
        salidaCartas(0, 1);
    } catch (error) {
        modalError.style.display = 'grid';
        modal.innerHTML = `
        <span><img src="./../src/svg/close.svg"></span>
        <span><img src="./../src/svg/alert.svg"></span>
        <h2>Verifica los siguientes errores</h2>
        <ol>
        ${error.map(e => `<li>${e}</li>`).join('')}
        </ol>
        `
        document.querySelector('#error span:first-of-type').addEventListener('click', () => {
            console.log('xd')
            modal.style.animation = 'modalSalida ease 0.4s forwards';
            setTimeout(() => {
                modalError.style.display = 'none';
                modal.style.animation = '';
            }, 400)
        })
    }
}
inputCorreo.addEventListener('input', e => {
    datosRegistro.correo = inputCorreo.value;
})
inputPrefijo.addEventListener('input', e => {
    if(!(/^\d$/.test(e.data))) inputPrefijo.value = inputPrefijo.value.replace(/[^\d]/g, '');
    datosRegistro.prefijoTel = Number(inputPrefijo.value ? inputPrefijo.value : 52);
})
inputTelefono.addEventListener('input', e => {
    if(!(/^\d{10}$/.test(e.data))) inputTelefono.value = inputTelefono.value.replace(/[^\d]/g, '');
    datosRegistro.telefono = inputTelefono.value;
})
inputContrasena.addEventListener('input', e => {
    datosRegistro.contrasena = inputContrasena.value;
})
inputContrasena.addEventListener('change', e => {
    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/.test(inputContrasena.value)) && inputContrasena.value) alert('Por favor, verifique la contraseña.')
})
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
    obtCodigo(datosRegistro[value]);
}