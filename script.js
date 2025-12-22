
/*Lässt die Zitate nacheinander einblenden */
const zitate = document.querySelectorAll(".zitat");
let index = 0;

function showNext() {
    zitate.forEach(zitat => zitat.classList.remove("active"));
    zitate[index].classList.add("active");

    index = (index + 1) % zitate.length;
}
    showNext();
    setInterval(showNext, 5000);
