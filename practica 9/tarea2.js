import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const sumarPares = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 2;
  return (2 * n) + sumarPares(n - 1);
};


const sumarImpares = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return (2 * n - 1) + sumarImpares(n - 1);
};


const calcularFibonacci = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
};

console.log("=== MENÚ DE FUNCIONES RECURSIVAS ===");
console.log("1. Sumar los primeros n números pares");
console.log("2. Sumar los primeros n números impares");
console.log("3. Calcular el n-ésimo término de Fibonacci");

rl.question("\nElija una opción (1-3): ", (opcion) => {
  const op = parseInt(opcion);

  rl.question("Ingrese el valor de n: ", (datoN) => {
    const n = parseInt(datoN);

    if (!Number.isInteger(n) || n < 0) {
      console.log("Por favor, ingrese un número entero válido mayor o igual a 0.");
      rl.close();
      return;
    }

    switch (op) {
      case 1:
        console.log(`\nLa suma de los primeros ${n} números pares es: ${sumarPares(n)}`);
        break;
      case 2:
        console.log(`\nLa suma de los primeros ${n} números impares es: ${sumarImpares(n)}`);
        break;
      case 3:
        console.log(`\nEl término ${n} de la serie de Fibonacci es: ${calcularFibonacci(n)}`);
        break;
      default:
        console.log("\nOpción no válida en el menú.");
        break;
    }

    rl.close();
  });
});