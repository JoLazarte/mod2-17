/*
En un documento html crear una lista desordenada 
con distintos paises de cada continente (entre 2 y 
4 por continente). 
Hacer un programa que al iniciarse pregunte mediante 
un prompt por un continente y destaque en rojo y en 
negrita aquellos paises de dicho continente.

*/

const continenteElegido = Number(prompt("Elija un continente por el número que corresponda: 1)América, 2)Europa, 3)Asia, 4)África o 5)Oceanía."));

const titulo = document.querySelector("#continenteNombre");
const paisUno = document.querySelector("#pais1");
const paisDos = document.querySelector("#pais2");
const paisTres = document.querySelector("#pais3");
const paisCuatro = document.querySelector("#pais4");

if (continenteElegido == 1) {
   
    titulo.textContent = "América"; 
    paisUno.innerHTML = "Argentina";
    paisDos.innerHTML = "Ecuador";
    paisTres.innerHTML = "Puerto Rico";
    paisCuatro.style = "display:none;";

} else if (continenteElegido == 2) {
    
    titulo.textContent = "Europa";
    paisUno.innerHTML = "Alemania";
    paisDos.innerHTML = "Dinamarca";
    paisTres.style = "display:none;";
    paisCuatro.style = "display:none;";

} else if (continenteElegido == 3) {

    titulo.textContent = "Asia";
    paisUno.innerHTML = "China";
    paisDos.innerHTML = "Japón";
    paisTres.innerHTML = "Corea del Sur";
    paisCuatro.innerHTML = "Taiwán";

} else if (continenteElegido == 4) {

    titulo.textContent = "África"; 
    paisUno.innerHTML = "Egipto";
    paisDos.innerHTML = "Marruecos";
    paisTres.innerHTML = "Túnez";
    paisCuatro.style = "display:none;";

} else if (continenteElegido == 5) {

    titulo.textContent = "Oceanía"; 
    paisUno.innerHTML = "Australia";
    paisDos.innerHTML = "Nauru";
    paisTres.style = "display:none;";
    paisCuatro.style = "display:none;";

} else {
    alert("Opción inválida");
};