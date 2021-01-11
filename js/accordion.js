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