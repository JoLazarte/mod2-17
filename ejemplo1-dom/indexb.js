const titulo = prompt("Ingrese un título");
const color = prompt("Ingrese un color");
const size = prompt("Ingrese un tamaño");
const fondo = prompt("Ingrese un color de fondo");

const tituloUsuario = document.querySelector("h1");
tituloUsuario.textContent = titulo;
//tituloUsuario.innerHTML = titulo;
tituloUsuario.className = color;
tituloUsuario.className = size;
tituloUsuario.className = fondo;
