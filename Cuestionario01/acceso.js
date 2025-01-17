


document.addEventListener("DOMContentLoaded", (event)=>{
    const titular = document.getElementById("titular");
    const asistente = document.getElementById("asistente");
    const regAsis = document.getElementById("regAsis");

    regAsis.style.display = "none";

    titular.addEventListener("change", (event)=>{
        if(titular.checked){
            asistente.checked = false;
            regAsis.style.display = "none";
        } else {
            regAsis.style.display = "block";
        }
    });

    asistente.addEventListener("change", (event)=>{
        if(asistente.checked){
            titular.checked = false;
            regAsis.style.display = "block";
        } else {
            regAsis.style.display = "none";
        }
    });
}); 
