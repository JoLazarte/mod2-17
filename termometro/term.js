/*
Hacer un programa que al iniciarse pregunte mediante un prompt 
por un temperatura, y con ese dato modifique un h1 
en el html, de forma tal que diga, por ejemplo, 
Temperatura actual: 20°. Cambiar el color del h1 
dependiendo de la temperatura ingresada, siguiendo 
las siguientes reglas:

Temperatura	Color
Menor a 0°	Azul
Mayor o igual a 0° y menor a 15°	Celeste
Mayor o igual a 15° y menor a 25°	Verde
Mayor o igual a 25° y menor a 30°	Amarillo
Mayor o igual a 30° y menor a 35°	Naranja
Mayor a 35°	Rojo
*/
/*
const temperaturaIngresada = Number(prompt('Ingrese la temperatura'));
//const temperaturaDom = document.getElementById("#temperatura");
const temperaturaDom = document.querySelector('#temperatura');

if (temperaturaIngresada < 0) {
  temperaturaDom.classList.add('azul');
  temperaturaDom.textContent = `Temperatura actual: ${temperaturaIngresada} grados`;
} else if (temperaturaIngresada >= 0 && temperaturaIngresada < 15) {
  temperaturaDom.className = 'celeste';
  temperaturaDom.textContent = `Temperatura actual: ${temperaturaIngresada} grados`;
} else if (temperaturaIngresada >= 15 && temperaturaIngresada < 25) {
  temperaturaDom.className = 'verde';
  temperaturaDom.textContent = `Temperatura actual: ${temperaturaIngresada} grados`;
} else if (temperaturaIngresada >= 25 && temperaturaIngresada < 30) {
  temperaturaDom.className = 'amarillo';   
  temperaturaDom.textContent = `Temperatura actual: ${temperaturaIngresada} grados`;
} else if (temperaturaIngresada >= 30 && temperaturaIngresada < 35) {
  temperaturaDom.className = 'naranja';   
  temperaturaDom.textContent = `Temperatura actual: ${temperaturaIngresada} grados`;
} else {
  temperaturaDom.className = 'rojo';   
  temperaturaDom.textContent = `Temperatura actual: ${temperaturaIngresada} grados`;
}
*/
//Resolución sintetizada:
const temperaturaIngresada = Number(prompt('Ingrese la temperatura'));
//const temperaturaDom = document.getElementById("temperatura");
const temperaturaDom = document.querySelector('#temperatura');
let color = '';

if (temperaturaIngresada < 0) {
  color = 'azul';
} else if (temperaturaIngresada >= 0 && temperaturaIngresada < 15) {
  color = 'celeste';
} else if (temperaturaIngresada >= 15 && temperaturaIngresada < 25) {
  color = 'verde';
} else if (temperaturaIngresada >= 25 && temperaturaIngresada < 30) {
  color = 'amarillo';
} else if (temperaturaIngresada >= 30 && temperaturaIngresada < 35) {
  color = 'naranja';
} else {
  color = 'rojo';
}

temperaturaDom.classList.add(color);
temperaturaDom.textContent = `Temperatura: ${temperaturaIngresada} grados`;