//Menú de conversiones: Muestre un menú con las siguientes opciones: 1) Convertir de grados Celsius a Fahrenheit, 2) Convertir de grados Fahrenheit a Celsius, 3) Salir. Usando Switch, ejecute la opción seleccionada.
//  Fórmulas: °F = °C × 9/5 + 32, °C = (°F - 32) × 5/9.


import readline from "node:readline";

const kd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Menu de conversiones");
console.log("1. Convertir de Celsius a Fahrenheit");
console.log("2. Convertir de Fahrenheit a Celsius");
console.log("3. Salir");

kd.question("ingrese una opcion del menu (1,2,3): ", (opcion) => {
  switch (opcion) {
    case "1":
      kd.question("Ingrese los grados Celsius: ", (cantidad) => {
        let celsius = parseFloat(cantidad);
        let resultado = (celsius * 9) / 5 + 32;
        console.log(`resultado : ${resultado}°F`);
        kd.close();
      });
      break;

    case "2":
      kd.question("Ingrese los grados Fahrenheit: ", (cantidad) => {
        let fahrenheit = parseFloat(cantidad);
        let resultado = ((fahrenheit - 32) * 5) / 9;
        console.log(`resultado : ${resultado}°C`);
        kd.close();
      });
      break;

    case "3":
      console.log("Ha salido del programa");
      kd.close();
      break;

    default:
      console.log("opcion no valida");
      kd.close();
  }
});