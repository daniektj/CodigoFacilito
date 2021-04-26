const btnHide = document.querySelector("#buttonHide");
const btnShow = document.querySelector("#buttonShow");
const recursos = document.querySelector("#recursos");
const videoDescription = document.querySelector("#videoDescription");
const cursoContenido = document.querySelector("#cursoContenido");
const infoDescriptionContainer = document.querySelector("#infoDescriptionContainer");
const infoDescriptionParrafo = document.querySelector("#infoDescriptionParrafo");
const infoDescriptionCard = document.querySelector("#infoDescriptionCard");

btnHide.addEventListener("click", () => {
  cursoContenido.classList.toggle("cursos__contenido-hide")
  recursos.classList.toggle("recursos")
  videoDescription.classList.toggle("videoDescription")
  infoDescriptionContainer.classList.toggle("infoDescriptionContainer")
  infoDescriptionParrafo.classList.toggle("infoDescriptionParrafo")
  infoDescriptionCard.classList.toggle("infoDescriptionCard")
});

btnShow.addEventListener("click", () => {
  cursoContenido.classList.toggle("cursos__contenido-hide")
  recursos.classList.toggle("recursos")
  videoDescription.classList.toggle("videoDescription")
  infoDescriptionContainer.classList.toggle("infoDescriptionContainer")
  infoDescriptionParrafo.classList.toggle("infoDescriptionParrafo")
  infoDescriptionCard.classList.toggle("infoDescriptionCard")
});



