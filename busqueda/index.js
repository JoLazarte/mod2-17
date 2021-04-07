/*
En un documento html crear una lista desordenada 
con al menos 10 items que consistan en oraciones, 
frases o citas. 
Hacer un programa que al iniciarse pregunte mediante 
un prompt por una palabra y destaque en rojo y en 
negrita aquellos items de la lista cuyo texto 
contenga dicha palabra.

*/
const palabraBuscada = prompt("Ingrese una palabra");
/*

*/
const ul = document.querySelector('ul');
const palUno = ul.querySelectorAll(".vida");
//const palUno = document.querySelector("ul").document.querySelectorAll(".palabras");
const palDos = ul.querySelectorAll(".palabras");
const palTres = ul.querySelectorAll(".mujer");
const palCuatro = ul.querySelectorAll(".arte");
const palCinco = ul.querySelectorAll(".amor");
const palSeis = ul.querySelectorAll(".ojos");
const palSiete = ul.querySelectorAll(".pensamientos");
const palOcho = ul.querySelectorAll(".suenio");
const palNueve = ul.querySelectorAll(".corazon");

if (palabraBuscada == "vida") {
    let i;
    for (i = 0; i < palUno.length; i++) {
    palUno[i].style = `color:red;font-weight:bold;`;
    //palUno[i].style.color = "red";
    }
    //alert(palUno.length);

} else if (palabraBuscada == "palabras") {
    let i;
    for (i = 0; i < palDos.length; i++) {
    palDos[i].style = `color:red;font-weight:bold;`;
    //palDos[i].style.color = "red";
    }

} else if (palabraBuscada == "mujer") {
    let i;
    for (i = 0; i < palTres.length; i++) {
    palTres[i].style = `color:red;font-weight:bold;`;
    //palTres[i].style.color = "red";
    }

} else if (palabraBuscada == "arte") {
    let i;
    for (i = 0; i < palCuatro.length; i++) {
    palCuatro[i].style = `color:red;font-weight:bold;`;
    //palCuatro[i].style.color = "red";
    }
    
} else if (palabraBuscada == "amor") {
    let i;
    for (i = 0; i < palCinco.length; i++) {
    palCinco[i].style = `color:red;font-weight:bold;`;
    //palCinco[i].style.color = "red";
    }

} else if (palabraBuscada == "ojos") {
    let i;
    for (i = 0; i < palSeis.length; i++) {
    palSeis[i].style = `color:red;font-weight:bold;`;
    //palSeis[i].style.color = "red";
    }

} else if (palabraBuscada == "pensamientos") {
    let i;
    for (i = 0; i < palSiete.length; i++) {
    palSiete[i].style = `color:red;font-weight:bold;`;
    //palSiete[i].style.color = "red";
    }

} else if (palabraBuscada == "sueño") {
    let i;
    for (i = 0; i < palOcho.length; i++) {
    palOcho[i].style = `color:red;font-weight:bold;`;
    //palOcho[i].style.color = "red";
    }

} else if (palabraBuscada == "corazon") {
    let i;
    for (i = 0; i < palNueve.length; i++) {
    palNueve[i].style = `color:red;font-weight:bold;`;
    //palNueve[i].style.color = "red";
    }

};
