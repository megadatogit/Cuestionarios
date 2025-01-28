document.addEventListener("DOMContentLoaded", (event) => {  
    const consumeSi = document.getElementById("consumeSi");  
    const consumeNo = document.getElementById("consumeNo");  
    const cntConsume = document.getElementById("cntConsume");  

    // Inicialmente ocultar el contenedor  
    cntConsume.style.display = "none";  

    consumeSi.addEventListener("change", (event) => {  
        if (consumeSi.checked) {  
            cntConsume.style.display= "block";  
        }  
    });  

    consumeNo.addEventListener("change", (event) => {  
        if (consumeNo.checked) {  
            cntConsume.style.display = "none";  
        }  
    });  
});
