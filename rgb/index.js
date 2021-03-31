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

//### color

//Hacer un programa que al iniciarse pida mediante un `prompt` ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

/**
 1. pedir al usuario color 
    a. usar prompt
 2. cambiar el color
    a. obtener el body del html 
    b. cambiar el color de background 
 */

// rgb(255,255,255)
// #FFFFFF
const color = prompt('ingrese el color');

const body = document.querySelector("body");
body.style = `background-color: #${color};`;

