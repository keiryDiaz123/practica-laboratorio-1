//Calculadora de operaciones: Solicite dos números y un operador (+ , - , * , /). Usando Switch, realice la operación correspondiente y muestre el resultado.
//  Si el operador no es válido, muestre un mensaje de error.




import readline from "node:readline";

const kd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

kd.question("Ingrese el primer numero: ", (num1) => {
  kd.question("Ingrese el segundo numero: ", (num2) => {
    kd.question("Ingrese el operador (+, -, *, /): ", (operador) => {
      let n1 = parseFloat(num1);
      let n2 = parseFloat(num2);
      let resultado;

      switch (operador) {
        case "+":
          resultado = n1 + n2;
          console.log(`Resultado : ${resultado}`);
          break;
        case "-":
          resultado = n1 - n2;
          console.log(`Resultado : ${resultado}`);
          break;
        case "*":
          resultado = n1 * n2;
          console.log(`Resultado : ${resultado}`);
          break;
        case "/":
          if (n2 === 0) {
            console.log("Error: No se puede dividir entre cero");
          } else {
            resultado = n1 / n2;
            console.log(`Resultado : ${resultado}`);
          }
          break;
        default:
          console.log("Operador no valido");
      }
      kd.close();
    });
  });
});