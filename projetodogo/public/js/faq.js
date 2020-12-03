const lista= document.querySelectorAll("h2")


if (lista.length) {
  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }
 lista.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}



