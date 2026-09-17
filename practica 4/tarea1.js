
import readline from "node:readline";

const kd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

kd.question("Ingrese el numero de lados de la figura (3, 4, 5, 6): ", (lados) => {
  switch (lados) {
    case "3":
      console.log("Triangulo");
      break;
    case "4":
      console.log("Cuadrilatero");
      break;
    case "5":
      console.log("Pentagono");
      break;
    case "6":
      console.log("Hexagono");
      break;
    default:
      console.log("Figura no reconocida");
  }
  kd.close();
});