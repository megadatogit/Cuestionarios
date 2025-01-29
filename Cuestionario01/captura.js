const video = document.getElementById('video');
const captureBtn = document.getElementById('capture-btn');
const enableCameraBtn = document.getElementById('enable-camera-btn');
const canvas = document.getElementById('canvas');
const uploadBtn = document.getElementById('upload-btn');

let stream;

// Habilitar la cámara
enableCameraBtn.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error("Error al acceder a la cámara: ", err);
        alert("No se pudo acceder a la cámara. Por favor, asegúrate de que los permisos estén habilitados.");
    }
});

// Capturar la imagen
captureBtn.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = 'block';
});

// Subir la imagen capturada
uploadBtn.addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    // Aquí puedes enviar la imagen al servidor
    console.log("Imagen capturada: ", image);
    alert("Documento capturado y listo para subir.");
});

// Detener la cámara cuando la página se cierra
window.addEventListener('beforeunload', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
});