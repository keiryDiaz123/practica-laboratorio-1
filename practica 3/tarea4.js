const readline = require('readline');

const kd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

kd.question("Ingrese su nombre: ", (nombre) => {
    kd.question("Ingrese su edad: ", (edad) => {
        kd.question("Ingrese sus años de experiencia: ", (experiencia) => {
            let edadNum = parseInt(edad);
            let expNum = parseInt(experiencia);

            if (edadNum > 18 && expNum > 0) {
                console.log("Candidato válido");
            } else {
                console.log("No cumple con los requisitos");
            }

            kd.close();
        });
    });
});