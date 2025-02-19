const trjContanier = document.querySelector('.cnt-trj');
let contHeroHeight = document.querySelector('.cnt-hero').clientHeight;
let header = document.querySelector('header #nav');

trjContanier.addEventListener('mouseover', () => {
    const trj = document.querySelector('#trj.hover');
    trj.classList = [];
})

window.onscroll = () => {
    console.log(contHeroHeight)
    if(window.scrollY >= (contHeroHeight+50)){
        header.style.filter = 'opacity(0.3)';
        header.style.transform = 'scale(.8) translateX(50px)';
    } else {
        header.style.filter = 'opacity(1)';
        header.style.transform = 'scale(1) translateX(0px)';
    }
}

header.addEventListener('mouseover', () => {
    header.style.filter = 'opacity(1)';
    header.style.transform = 'scale(1) translateX(0px)';
})
header.addEventListener('mouseout', () => {
    header.style.filter = 'opacity(0.3)';
    header.style.transform = 'scale(.8) translateX(50px)';
})