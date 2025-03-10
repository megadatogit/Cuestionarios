document.addEventListener("DOMContentLoaded", function () {
    const cntDepre = document.querySelector("#cntDepre");
    const cntSufre = document.querySelector("#cntSufrir");
    const cntSocie = document.querySelector("#cntSocie");
    const cntFamil = document.querySelector("#cntFamil");
    const cntTraba = document.querySelector("#cntTraba");

    const opEnferme = document.querySelectorAll('input[name="enfermedad"]');
    const opDeprime = document.querySelectorAll('input[name="deprime"]');
    const opSufrire = document.querySelectorAll('input[name="sufrir"]');

    function toggleVisibility(element, condition) {
        if (condition) {
            element.classList.add("mostrar");
        } else {
            element.classList.remove("mostrar");
        }
    }

    opEnferme.forEach(radio => {
        radio.addEventListener("change", function () {
            toggleVisibility(cntDepre, this.value === "depresion");
            toggleVisibility(cntSufre, false);
            toggleVisibility(cntSocie, false);
            toggleVisibility(cntFamil, false);
            toggleVisibility(cntTraba, false);
        });
    });

    opDeprime.forEach(radio => {
        radio.addEventListener("change", function () {
            toggleVisibility(cntSufre, this.value === "inducido");
            toggleVisibility(cntSocie, false);
            toggleVisibility(cntFamil, false);
            toggleVisibility(cntTraba, false);
        });
    });

    opSufrire.forEach(radio => {
        radio.addEventListener("change", function () {
            toggleVisibility(cntSocie, this.value === "sociedad");
            toggleVisibility(cntFamil, this.value === "familia");
            toggleVisibility(cntTraba, this.value === "trabajo");
        });
    });
});
