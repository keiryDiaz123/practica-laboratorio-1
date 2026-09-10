// Validar número positivo, negativo o cero
//Solicite un número al usuario usando readline. 
//Verifique si es positivo, negativo o cero. 
//Muestre un mensaje que indique el resultado: 
//"El número es positivo", "El número es negativo" o "El número es cero".




const readline = require('readline');

const kd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

kd.question("Ingrese un numero: ", (numero) => {
    let num = parseFloat(numero);

    if (num > 0) {
        console.log("El número es positivo");
    } else if (num < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }

    kd.close();
});