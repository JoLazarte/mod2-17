/*
En un documento html hacer un post de una red social 
que contenga:
-un h3 con la usuaria
-un p con un lorem ipsum
-3 spans de reacciones con un ícono (por ejemplo 
Me gusta, Me encanta, Me asombra) más un número con 
la cantidad

Dar estilos para que:
la tipografía sea distinta a la default
los spans estén en línea, separados con márgenes, 
tengan un color de fondo gris suave y un border 
radius.

Hacer un programa que al iniciarse pregunte mediante 
tres prompts por la cantidad de cada una de las 
reacciones y actualice los valores de los spans 
correspondientes
*/
const reaccion1 = prompt ('Reacción 1: me gusta');
const reaccion2 = prompt ('Reacción 2: me encanta');
const reaccion3 = prompt ('Reacción 3: me asombra');
//Llamar a los span
const meGusta = document.querySelector ('#meGusta');
const meEncanta = document.querySelector ('#meEncanta');
const meAsombra = document.querySelector ('#meAsombra');

//Planteo del ejercicio
//1- utilizar text content para reescribir el conteo de las reacciones
//textContent (texto plano) o innerHtml (código HTML implementado, tu cod se pega en la etiqueta)
meGusta.textContent = reaccion1;
meEncanta.textContent = reaccion2;
meAsombra.textContent = reaccion3;

