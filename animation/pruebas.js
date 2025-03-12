function setActive(selectedElement) {  
    const elementos = document.querySelectorAll('.tarje');  
    elementos.forEach(elemento => {  
        elemento.classList.remove('active');  
    });  
    selectedElement.classList.add('active');
}  