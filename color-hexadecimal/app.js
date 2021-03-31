/*
Hacer un programa que al iniciarse pida mediante 
un `prompt` ingresar un color en sistema hexadecimal, 
y una vez ingresado ponga el color de fondo del 
body con dicho color.
*/
//Sistema hexadecimal: #FFFFFF

const color = prompt("Ingrese un color en sistema hexadecimal");
const cuerpo = document.querySelector("body");

cuerpo.style = `background-color: #${color};`