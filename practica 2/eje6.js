//Solicite nombre, apellido, año de ingreso y promedio. Muestre nombre
//  y apellido en mayúsculas, primeras 3 letras del apellido, últimos 2 dígitos del año y promedio con 2 decimales.

let nombre = "carlos";
let apellido = "lopez";
let anio = 2004;
let promedio = 9.8888;

console.log("su nombre y apellido en mayuscula es :" + nombre.toUpperCase() + " " + apellido.toUpperCase());
console.log("las primeras 3 letras del apellido son:" + apellido.slice(0, 3));
console.log("los dos dijitos del anio son: " + anio.toString().slice(2, 4));
console.log("su promedio con 2 desimales es :" + promedio.toFixed(2));