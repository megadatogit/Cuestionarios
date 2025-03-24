document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btnLateral");
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => tab.classList.remove("active"));
    

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.id.replace("btnTab", "tab");

            // Ocultar todas y mostrar la nueva con transición
            tabs.forEach(tab => tab.classList.remove("active"));
            document.getElementById(tabId).classList.add("active");
        });
    });
});
