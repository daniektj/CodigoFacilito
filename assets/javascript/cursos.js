const btnHide = document.querySelector("#buttonHide")
const btnShow = document.querySelector("#buttonShow")
const recursos = document.querySelector("#recursos")
const videoDescription = document.querySelector("#videoDescription")
const cursoContenido = document.querySelector("#cursoContenido")
const infoDescriptionContainer = document.querySelector("#infoDescriptionContainer")
const infoDescriptionParrafo = document.querySelector("#infoDescriptionParrafo")
const infoDescriptionCard = document.querySelector("#infoDescriptionCard")

const handleArrow1 = () => {
  cursoContenido.classList.toggle("cursos__contenido-hide")
  recursos.classList.toggle("recursos")
  videoDescription.classList.toggle("videoDescription")
  infoDescriptionContainer.classList.toggle("infoDescriptionContainer")
  infoDescriptionParrafo.classList.toggle("infoDescriptionParrafo")
  infoDescriptionCard.classList.toggle("infoDescriptionCard")
}

const handleArrow2 = () => {
  cursoContenido.classList.toggle("cursos__contenido-hide")
  recursos.classList.toggle("recursos")
  videoDescription.classList.toggle("videoDescription")
  infoDescriptionContainer.classList.toggle("infoDescriptionContainer")
  infoDescriptionParrafo.classList.toggle("infoDescriptionParrafo")
  infoDescriptionCard.classList.toggle("infoDescriptionCard")
}

const btnModulo = document.querySelector("#btnModulo")
const btnComentario = document.querySelector("#btnComentarios")
const cursoComentarios = document.querySelector("#cursoComentarios")
const cursoModulos = document.querySelector("#cursoModulos")

btnComentario.style.setProperty("color", `white`)
btnComentario.style.setProperty("text-decoration", `none`)

const handleModulo = () => {
  btnModulo.style.setProperty("color", `var(--green)`)
  btnModulo.style.setProperty("text-decoration", `underline`)
  btnComentario.style.setProperty("color", `white`)
  btnComentario.style.setProperty("text-decoration", `none`)

  cursoModulos.classList.toggle("cursos__comentarios-hide", false)
  cursoComentarios.classList.toggle("cursos__comentarios-hide", true)
}
const handleComentario = () => {
  btnModulo.style.setProperty("color", `white`)
  btnModulo.style.setProperty("text-decoration", `none`)
  btnComentario.style.setProperty("color", `var(--green)`)
  btnComentario.style.setProperty("text-decoration", `underline`)

  cursoModulos.classList.toggle("cursos__comentarios-hide", true)
  cursoComentarios.classList.toggle("cursos__comentarios-hide", false)
}
