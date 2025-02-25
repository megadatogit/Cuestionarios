const ineInformation = document.getElementById('ineInformation');

const actInformacion = inf => {
    if(!inf) ineInformation.innerHTML = '';
    ineInformation.innerHTML = `
    <p>Nombre: ${inf.nombre} ${inf.primer_apellido} ${inf.segundo_apellido}</p>
    <p>CURP: ${inf.curp}</p>
    <p>Sexo: ${inf.sexo}</p>
    <p>Fecha de nacimiento: ${inf.fecha_nacimiento}</p>
    <p>Nacionalidad: ${inf.nacionalidad}</p>
    <p>Entidad de nacimiento: ${inf.entidad_nacimiento}</p>
    `
}