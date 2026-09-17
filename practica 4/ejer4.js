//Calificación por letra: Solicite una calificación numérica (0-100). Usando Switch, convierta a calificación por letra según: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59). Muestre la calificación en letra.
//  (Ayuda: use Math.floor(calificacion / 10) para obtener el rango).


import readline from "node:readline";

const kd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

kd.question("Ingrese una calificacion numerica (0-100): ", (calificacion) => {
  let nota = parseFloat(calificacion);

  if (nota < 0 || nota > 100 || isNaN(nota)) {
    console.log("Calificacion fuera de rango o no valida");
  } else {
   
    let rango = Math.floor(nota / 10);

    switch (rango) {
      case 10:
      case 9:
        console.log("Calificacion por letra: A");
        break;
      case 8:
        console.log("Calificacion por letra: B");
        break;
      case 7:
        console.log("Calificacion por letra: C");
        break;
      case 6:
        console.log("Calificacion por letra: D");
        break;
      default:
        console.log("Calificacion por letra: F");
    }
  }
  kd.close();
});