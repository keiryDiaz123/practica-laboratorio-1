import readline from "node:readline";

const kd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Maquina de Bebidas");
console.log("1. Agua");
console.log("2. Refresco");
console.log("3. Jugo");
console.log("4. Cafe");
console.log("5. Te");

kd.question("Ingrese una opcion (1-5): ", (opcion) => {
  switch (opcion) {
    case "1":
      console.log("Ha seleccionado: Agua");
      break;
    case "2":
      console.log("Ha seleccionado: Refresco");
      console.log("¿Desea agregar hielo?");
      break;
    case "3":
      console.log("Ha seleccionado: Jugo");
      console.log("¿Desea agregar hielo?");
      break;
    case "4":
      console.log("Ha seleccionado: Cafe");
      break;
    case "5":
      console.log("Ha seleccionado: Te");
      break;
    default:
      console.log("Bebida no disponible");
  }
  kd.close();
});