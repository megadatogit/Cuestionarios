const cards = document.querySelectorAll('body > div');

window.onload = () => {
    cards[0].style.display = 'grid';
    for(let x = 0; x<cards.length; x++){
        
    }
}
const salidaCartas = i => {
    cards[i].style.animation = 'salida 1s'
    setTimeout(() => {
        cards[i].style.display = 'none';
        cards[i].style.animation = '';
        cards[++i].style.display = 'grid';
    }, 500)
}