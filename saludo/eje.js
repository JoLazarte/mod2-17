const nombre = prompt("Ingrese su nombre");

const titulo = document.querySelector("h1");
titulo.innerHTML = `Hola, ${nombre}`;
//titulo.style = "background-color: grey;"
const estilos = "background-color: grey; border-color: 2px solid green;"

titulo.style = estilos; 