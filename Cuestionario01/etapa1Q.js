let docElem = document.documentElement;  
let barrita = document.getElementById("progreso"); 

window.addEventListener("scroll", () => {  
    let winScroll = docElem.scrollTop;  
    let height = docElem.scrollHeight - docElem.clientHeight;  
    let scrolled = (winScroll / height) * 100;  
    barrita.style.width = scrolled + "%";  
});