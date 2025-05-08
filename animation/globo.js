const globe = document.getElementById('globe');
const dots = 300;
const radius = 90;

for(let i=0; i<dots; i++){
    const dot = document.createElement('div');
    dot.className = 'dot';

    const theta = Math.acos(1 - 2*(i + 0.5)/dots);
    const phi = Math.PI * (1 + Math.sqrt(12)) * (i + 0.5);

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    
    dot.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

    globe.appendChild(dot);
}