//Mi resolución del ejercicio:
//Como, en mi css, definí que el width de mi .container es del 100%
//no necesito hacer ningún calculo con la regla de tres simples.
const porcentajeProgreso = prompt("Ingrese el porcentaje del progreso");
const progreso = document.querySelector(".progreso");

progreso.style = `width: ${porcentajeProgreso}%`;
progreso.textContent = `${porcentajeProgreso}%`;

/*
//Esto se hizo en clase:
const porcentajeDeProgreso = prompt('Ingrese el porcentaje de progreso');
const progreso = document.querySelector(".progreso");

//  100% -> 750px (width(700) + height(50). Son los valores que se definieron en el css, de forma random)
//  50% ->  X (Este es ejemplo para saber como calculo los pixeles que 
//le corresponden a, en este caso, el 50%)
//Entonces, por la regla de tres simples, se calcula:
// X = (50 * 750) / 100 
// X = 375
//Al 50% le corresponden 375px

//En la variable porcentajeProgreso se guarda el número que ingrese el usuario
//por medio del prompt. Ese numero será el porcentaje al que le corresponderá
//un nuevo valor de pixeles. 
//Por lo tanto, la cuenta que debe realizarse es:
// (porcentajeDeProgreso *750px)/100

progreso.style = `width: ${porcentajeDeProgreso *750/100}px`
*/




