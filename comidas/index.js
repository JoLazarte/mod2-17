/*
En un documento html agregar imágenes de comidas, 
postres y bebidas (3 o 4 de cada uno). 
Dar estilos para que se muestren una al lado de la 
otra, que tengan algo de espacio con margenes y que 
tengan el mismo tamaño. 
Hacer un programa que al iniciarse pregunte mediante 
un prompt qué se desea ver (comidas, postres o 
bebidas) y mostrar sólo las imágenes de la categoría 
correspondiente.
*/
const menuElegido = Number(prompt("Ingrese un número según lo qué desee ver: 1)comidas, 2)postres o 3)bebidas."));

const tituloMenu = document.querySelector('#titulo');

const menu1 = document.querySelector('#orden1');
const menu2 = document.querySelector('#orden2');
const menu3 = document.querySelector('#orden3');

if (menuElegido == 1) {
    tituloMenu.textContent = "Comidas";
    menu1.src = "./imagenes/lasaña.jpg";
    menu2.src = './imagenes/Sopa-de-pollo.jpg';
    menu3.src = './imagenes/espagueti-vegano.jpg';

} else if (menuElegido == 2) {
    tituloMenu.textContent = "Postres";
    menu1.src = './imagenes/churros.jpg';
    menu2.src = './imagenes/flan.jpg';
    menu3.src = './imagenes/tarta-de-limon.jpg';

} else if (menuElegido == 3) {
    tituloMenu.textContent = "Bebidas";
    menu1.src = './imagenes/champagne.jpg';
    menu2.src = './imagenes/jugo-de-naranja.jpg';
    menu3.src = './imagenes/licuado-frutas.jpg';

} else {
    alert("Opción inválida");
};