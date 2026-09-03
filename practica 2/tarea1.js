// Solicite al usuario su nombre completo.
// Convierta el nombre a mayúsculas, extraiga las primeras 4 letras y luego conviértalo a minúsculas.
// Muestre todos los resultados.

let nombreCompleto = "Keiry Lissbeth Cáceres Díaz";

let mayusculas = nombreCompleto.toUpperCase();
let primeras4 = nombreCompleto.slice(0, 4);
let minusculas = nombreCompleto.toLowerCase();

console.log("Nombre en mayúsculas: " + mayusculas);
console.log("Primeras 4 letras: " + primeras4);
console.log("Nombre en minúsculas: " + minusculas);