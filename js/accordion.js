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


//accordion cards



const cardsWrapper1 = document.querySelector(".criterios__wrapper-1")
const vejaMais1 = document.querySelector(".degrade__mobile-1 p")

function activeAccordion2() {
    cardsWrapper1.classList.toggle("active")
    this.classList.toggle("active")

}

function conteudoP() {
    if (vejaMais1.classList.contains("active")) {
        vejaMais1.innerHTML = "Veja menos ▲";
    } else if (!vejaMais1.classList.contains("active")) {
        vejaMais1.innerHTML = "Veja mais ▼"
    }

}



vejaMais1.addEventListener("click", activeAccordion2);
vejaMais1.addEventListener("click", conteudoP);