
/* Hacer un programa que al iniciarse pida mediante un prompt 
ingresar un nombre, y una vez ingresado muestre un saludo con 
el nombre dentro de un h1. El h1 debe estar centrado y tener 
un tamaño de letra y una tipografía distinta de la que viene 
por defecto. */
//Ejemplos de cómo llamar elementos del html con "document.querySelector"
//const saludo = document.querySelector("#saludo");
//const saludo = document.querySelector(".titulo");
//const saludo = document.querySelector("h1");
const saludo = document.getElementById("saludo");
const nombre = prompt('Ingrese su nombre');

saludo.textContent = `<strong>Hola</strong> ${nombre} como estas?`;
//Otra forma de modificar el elemento que llamé:
//saludo.innerHTML = `Hola, ${nombre}`;

// Cómo traen grupos (todas las coincidencias) del html:
// const saludo = document.querySelectorAll("h1");
// const saludo = document.getElementsByTagName("h1");
// const saludo = document.getElementsByClassName("titulo");

//Cómo modificar estilos del elemento que llamé:
//saludo.style = "background-color: grey;"
const estilos = "background-color: grey; border-color: 2px solid green;"
saludo.style = estilos; 