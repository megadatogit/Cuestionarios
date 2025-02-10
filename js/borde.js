document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let progress = (scrollTop / maxScroll) * 100;

    let border = document.querySelector(".progress-border::before");

    if (border) {
        border.style.width = `${Math.min(progress, 100)}%`;
        border.style.height = `${Math.min(progress, 100)}%`;
    }
});
