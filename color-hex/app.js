const color = prompt("Ingrese un color en sistema hexadecimal");
const cuerpo = document.querySelector("body");

cuerpo.style = `background-color: #${color};`