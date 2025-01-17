const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapshot = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');
const snapshotContainer = document.getElementById('snapshot-container');

// Acceder a la cámara
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error al acceder a la cámara:', error);
    alert('No se pudo acceder a la cámara. Verifica los permisos.');
  });

// Capturar foto
captureButton.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Dibujar el video en el canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Obtener la imagen del canvas
  const imageDataURL = canvas.toDataURL('image/png');

  // Mostrar la imagen capturada
  snapshot.src = imageDataURL;
  snapshot.style.display = 'block';
});
