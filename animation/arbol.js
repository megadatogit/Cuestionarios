const targetPercentage = 65;  
const duration = 50000;  // 5 seconds  
const frameRate = 100;   // The update interval in ms  
const totalFrames = duration / frameRate;  
let currentFrame = 0;  

function animatePercentage() {  
    const progress = Math.sin((currentFrame / totalFrames) * Math.PI); // Utiliza seno para animación suave  
    const newPercentage = Math.round(progress * targetPercentage);  

    document.getElementById('porcentaje').innerText = `${newPercentage}%`;  

    currentFrame += .5;  
    if (currentFrame > totalFrames) {  
        currentFrame = 0; // Reinicia la animación  
    }  

    requestAnimationFrame(animatePercentage); // Llama a la función en el siguiente frame  
}  

// Inicia la animación  
animatePercentage();