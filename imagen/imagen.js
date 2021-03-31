//CON CSS, SIN IF, SIN FUNCIÓN:
const imagen = prompt("Ingrese un tamaño de imagen: chica, mediana, grande");
const elemento = document.querySelector(".img");
//elemento.classList.remove("img");

elemento.classList.add(imagen);
/*
//SIN CSS + If:
const imgSize = prompt("Ingrese el tamaño de imagen que desee: "chica", "mediana" o "grande".);
const elemento = document.querySelector(".img");
const imagenChica = `width:250px;`;
const imagenMediana = `width:450px;`;
const imagenGrande = `width:750px;`;
if (imgSize == "chica") {
    elemento.style = imagenChica;
} else if (imgSize == "mediana") {
    elemento.style = imagenMediana;
} else if (imgSize == "grande") {
    elemento.style = imagenGrande;
} else {
    alert("Opción inválida");
}

*/

/*
//CON CSS y con If:
const imgSize = prompt("Ingrese un número del 1 al 3, según el tamaño de imagen que desee: 1) chico, 2) mediano, 3) grande.");
const elemento = document.querySelector(".img");
let imagen = "";
if (imgSize == 1) {
    imagen = "chica";
} else if (imgSize == 2) {
    imagen = "mediana";
} else if (imgSize == 3) {
    imagen = "grande";
} else {
    alert("Opción inválida");
}

//elemento.classList.remove("img");
elemento.classList.add(imagen);
*/

/*
//Esto me lo enseñó mi hermano, pero no necesitan entenderlo todavía
//SIN CSS (eliminando el link al css en en html)
//y CON OBJETO/MAPA + If:

const imagen = prompt("Ingrese un tamaño de imagen: chica, mediana, grande");
const elemento = document.querySelector(".img");
//Creo un objeto/mapa:
const estilos = {
    chica: "width:250px; height:250px;",
    //chica: 250,
    mediana: "width:450px; height:450px;",
    //mediana: 450,
    grande: "width:750px; height:750px;",
    //grande: 750;

};
//Llamo el objeto/mapa
if (imagen in estilos) {
    elemento.style = estilos[imagen];
    //elemento.style = `width:${estilos[imagen]}px; height:${estilos[imagen]}px;`;
};
*/


