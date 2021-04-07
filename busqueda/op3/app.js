//En un documento `html` crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un `prompt` por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

//Guardo la palabra que hay que buscar
const palabra = prompt("ingrese una palabra");

//Guardo el texto donde aparece
const ul = document.getElementById("ul");

//con una nueva variable guardo text.textContent
//es decir, tengo un string
const ultHTML = ul.textContent;

//text.innerHTML voy a modificar ese string
//con replaceAll voy a tomar lo que 
//ingreso el usuario y agrarle 
//la etiqueta de span
ul.innerHTML = ultHTML.replaceAll(palabra,`<span style="color:red;font-weight:bold">${palabra}</span>`);