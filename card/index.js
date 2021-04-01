/*
Hacer un programa que al iniciarse pregunte mediante 
prompts por:
-un título
-una url de una imagen
-una url a un artículo

Utilizar esos datos para completar en el html una 
card que tenga:
-un título, con el texto del título ingresado
-una imagen, con la url de la imagen ingresada
-un link que diga Leer más, con la url al artículo 
ingresado

Dar algunos estilos mínimos a la card:
-centrarla con respecto a la pantalla
-agregarle un borde
-agregarle un sombreado
-cambiarle la tipografía
-cambiarle los tamaños de fuente
-cambiarle los colores por defecto
*/
const tituloElegido = prompt("Ingrese un título");
//console.log(tituloElegido);
const urlImagen = prompt("Ingrese la url de una imagen");
//console.log(urlImagen);
const urlArticulo = prompt("Ingrese la url de página web");
//console.log(urlArticulo);

    const titulo = document.querySelector("#tituloIngresado");
    titulo.innerHTML = tituloElegido;
    titulo.className = "titulo-card";

    const imagen = document.querySelector("#imagenIngresada");
    imagen.src = `${urlImagen}`;
    const borde_imagen = `border:1px solid rgb(233, 204, 38);`;
    imagen.style = borde_imagen;

    const link = document.querySelector("#linkIngresado");
    link.href = `${urlArticulo}`;
    link.textContent = "Leer más";
    link.className = "pagina-web";

    const cuerpo = document.querySelector("body");
    cuerpo.style = `padding:20px 70px;`;

    const div = document.querySelector(".container");
    div.className = "card";