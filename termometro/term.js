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
const temperaturaIngresada = Number(prompt('Ingrese la temperatura'));
//const temperaturaDom = document.getElementById("#temperatura");
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