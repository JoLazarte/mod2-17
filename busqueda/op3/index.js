//palabra o string ingresdao por el usuario
const palabraBuscada = prompt("Ingrese una palabra");

//Adentro de donde quiero buscar:
const ul = document.querySelector('ul');
const li = ul.querySelectorAll("li");
//const li = document.querySelector("ul").document.querySelectorAll("li");
console.log(li.length);
console.log(li);
// tengo un nodeList ("objeto") con 18 strings dentro (17 index, 0-17)
//Quiero que cada index de mi nodeList sea un string
//y que dentro de cada string se busque la palabra
//que ingresó el usuario y se le cambie su estilo.
let i;
for (i = 0; i < li.length; i++) {
const fraseHTML = li[i].textContent;
console.log(fraseHTML);
li[i].innerHTML = fraseHTML.replaceAll(palabraBuscada,`<span style="color:red;font-weight:bold">${palabraBuscada}</span>`);
}
