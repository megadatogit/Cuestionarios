const toggleBtn = document.getElementById("menu-toggle");
const menu = document.querySelector(".cntMenu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});