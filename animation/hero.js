
const elem1 = document.querySelector(".elem1");
const elem2 = document.querySelector(".elem2");
const elem3 = document.querySelector(".elem3");
const elem4 = document.querySelector(".elem4");

const slec1 = document.querySelector("#slec1");
const slec2 = document.querySelector("#slec2");
const slec3 = document.querySelector("#slec3");
const slec4 = document.querySelector("#slec4");


function seleccionar() {  
    slec1.addEventListener("click", () => {  
        elem1.classList.add("mostrar");
        elem2.classList.remove("mostrar");
        elem3.classList.remove("mostrar");
        elem4.classList.remove("mostrar");
        slec1.style.backgroundColor = "#124789";
        slec2.style.backgroundColor = "#a1b1b7";
        slec3.style.backgroundColor = "#a1b1b7";
        slec4.style.backgroundColor = "#a1b1b7";
    });  
      
    slec2.addEventListener("click", () => {  
        elem1.classList.remove("mostrar");
        elem2.classList.add("mostrar");
        elem3.classList.remove("mostrar");
        elem4.classList.remove("mostrar");
        slec1.style.backgroundColor = "#a1b1b7";
        slec2.style.backgroundColor = "#124789";
        slec3.style.backgroundColor = "#a1b1b7";
        slec4.style.backgroundColor = "#a1b1b7";
    });  
    slec3.addEventListener("click", () => {  
        elem1.classList.remove("mostrar");
        elem2.classList.remove("mostrar");
        elem3.classList.add("mostrar");
        elem4.classList.remove("mostrar");
        slec1.style.backgroundColor = "#a1b1b7";
        slec2.style.backgroundColor = "#a1b1b7";
        slec3.style.backgroundColor = "#124789";
        slec4.style.backgroundColor = "#a1b1b7";
    });  
    slec4.addEventListener("click", () => {  
        elem1.classList.remove("mostrar");
        elem2.classList.remove("mostrar");
        elem3.classList.remove("mostrar");
        elem4.classList.add("mostrar");
        slec1.style.backgroundColor = "#a1b1b7";
        slec2.style.backgroundColor = "#a1b1b7";
        slec3.style.backgroundColor = "#a1b1b7";
        slec4.style.backgroundColor = "#124789";
    });  
}  

seleccionar();

