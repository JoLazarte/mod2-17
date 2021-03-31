/*
Hacer un programa que al iniciarse pida mediante 
TRES prompts ingresar los valores correspondientes 
a un color en sistema rgb, y una vez ingresado 
ponga el color de fondo del body con dicho color.
 Los valores van del 0 al 255 y corresponden 
 a rojo, verde y azul.
*/
const colorUno = prompt("Ingrese un numero del 0 al 255");
const colorDos = prompt("Ingrese otro numero del 0 al 255");
const colorTres = prompt("Ingrese un último numero del 0 al 255");

const cuerpo = document.querySelector("body");

cuerpo.style = `background-color: rgb(${colorUno}, ${colorDos}, ${colorTres});`
