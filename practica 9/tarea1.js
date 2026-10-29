import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const calcularFactorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * calcularFactorial(n - 1);
};


const calcularPotencia = (base, exponente) => {
  if (exponente === 0) return 1;
  return base * calcularPotencia(base, exponente - 1);
};


const sumarHastaN = (n) => {
  if (n <= 1) return n;
  return n + sumarHastaN(n - 1);
};

rl.question("Ingrese un número entero positivo: ", (dato) => {
  const n = parseInt(dato);

  if (Number.isInteger(n) && n >= 0) {
    console.log(`\n--- Resultados para n = ${n} ---`);
    console.log(`Factorial de ${n}: ${calcularFactorial(n)}`);
    console.log(`Potencia (${n}^${n}): ${calcularPotencia(n, n)}`);
    console.log(`Suma desde 1 hasta ${n}: ${sumarHastaN(n)}`);
  } else {
    console.log("Por favor, ingrese un número entero positivo válido.");
  }

  rl.close();
});