//Comparar calificaciones
//Solicite al usuario dos calificaciones (0-100). Compare cuál es la más alta.
 //Si son iguales, indíquelo. Muestre un mensaje descriptivo con el resultado.






const readline = require('readline');

const kd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

kd.question("Ingrese la primera calificacion (0-100): ", (nota1) => {
    kd.question("Ingrese la segunda calificacion (0-100): ", (nota2) => {
        let n1 = parseFloat(nota1);
        let n2 = parseFloat(nota2);

        if (n1 > n2) {
            console.log(`La calificacion mas alta es: ${n1}`);
        } else if (n2 > n1) {
            console.log(`La calificacion mas alta es: ${n2}`);
        } else {
            console.log("Ambas calificaciones son iguales");
        }

        kd.close();
    });
});