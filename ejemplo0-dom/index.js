    /*
    //console.lo(document.querySelector("h1"));-->
    const titulo = document.querySelector("h1");
    //console.log(titulo); = <h1>Muuuu.....!</h1> (todaviá no se remplazo el primer h1)
    titulo.textContent = "¿Quién es Muuuu?";
   //console.log(titulo); va a dar "¿Quién es Muuuu?"
   const mensaje = "nuevo titulo";
   titulo.textContent = mensaje;
   console.log(titulo);

   //console.log(document.querySelector("p"));-->
   const parrafo = document.querySelector("p");
   //console.log(parrafo);
   parrafo.innerHTML = "¿<em>Esto</em> es latín o <strong>qué</strong>?";
   //console.log(parrafo);
   console.log(parrafo);

    selectors: #id, .class, tag - querySelector retorna el primer elento que coincida
    querySelectorAll trae todas las coincidencias.
   /* parrafo.textContent = 
   "¿<em>Esto</em> es latín o <strong>qué</strong>?"; 
   va a devolver el string con las etiquetas incluidas.*/

   const idSeleccionado = document.getElementById("idMedio");
   idSeleccionado.innerHTML = "Este es el elegido";

   idSeleccionado.classList.remove("rojo");
   idSeleccionado.classList.remove("center");
   idSeleccionado.classList.add("verde");



