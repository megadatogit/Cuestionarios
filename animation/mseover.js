const video = document.getElementById('video');
  let reverseInterval = null;

  video.addEventListener('mouseover', () => {
    clearInterval(reverseInterval);
    video.play();
  });

  video.addEventListener('mouseout', () => {
    video.pause();
    reverseInterval = setInterval(() => {
      if (video.currentTime <= 0) {
        clearInterval(reverseInterval);
      } else {
        video.currentTime -= 0.04; // retrocede ~1 frame
      }
    }, 40); // cada 40ms aprox.
  });