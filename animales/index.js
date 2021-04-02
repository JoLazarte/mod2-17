/*
En un documento html agregar al menos tres imágenes 
de distintos animales, una por cada animal. Hacer 
un programa que al iniciarse pregunte mediante un 
prompt por un animal (indicando en el mensaje las 
opciones disponibles) y muestre solamente la 
imagen del animal elegido.

 */
const animalElegido = prompt("¿Perro, gato o hámster?");

const nombreAnimal = document.querySelector("#titulo");
const imagenAnimal = document.querySelector("#miAnimalFavorito");
imagenAnimal.style = `width:550px;height:350px;`;
if (animalElegido == "perro") {
    nombreAnimal.innerHTML = "Perro";
    imagenAnimal.src = "./imagenes/perro.jpg";
} else if (animalElegido == "gato") {
    nombreAnimal.innerHTML = "Gato";
    imagenAnimal.src = "./imagenes/gato.jpg";
} else if (animalElegido == "hámster") {
    nombreAnimal.innerHTML = "Hámster";
    imagenAnimal.src = "./imagenes/hamster.jpg";
} else {
    alert("Opción inválida");
};