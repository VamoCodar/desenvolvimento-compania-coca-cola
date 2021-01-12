//accordion dos tiers
const accordionList = document.querySelectorAll(".accordion__wrapper h5")

function activeAccordion() {
    console.log(this);
    this.nextElementSibling.classList.toggle("active")
    this.classList.toggle("active")
}


accordionList.forEach((i) => {
    i.addEventListener("click",
        activeAccordion)
})


//accordion cards branco

const cardsWrapper1 = document.querySelector(".criterios__wrapper-1")
const vejaMais1 = document.querySelector(".degrade__mobile-1 p")
const degradeBranco = document.querySelector(".degrade__mobile-branco-1")

function activeAccordion2() {
    cardsWrapper1.classList.toggle("active")
    vejaMais1.classList.toggle("active")
    degradeBranco.classList.toggle("active")
    if (vejaMais1.classList.contains("active")) {
        vejaMais1.innerHTML = "Veja menos ▲";
    } else {
        vejaMais1.innerHTML = "Veja mais ▼"
    }

}

vejaMais1.addEventListener("click", activeAccordion2);




//accordion preto

const cardsWrapper2 = document.querySelector(".criterios__wrapper-2")
const vejaMais2 = document.querySelector(".criterios__wrapper-2 p.veja")
const degradePreto = document.querySelector(".degrade__mobile-preto")

function activeAccordionBlack() {
    cardsWrapper2.classList.toggle("active")
    degradePreto.classList.toggle("active")
    vejaMais2.classList.toggle("active")
    if (vejaMais2.classList.contains("active")) {
        vejaMais2.innerHTML = "Veja menos ▲";
    } else{
        vejaMais2.innerHTML = "Veja mais ▼"
    }
}

vejaMais2.addEventListener("click", activeAccordionBlack);
