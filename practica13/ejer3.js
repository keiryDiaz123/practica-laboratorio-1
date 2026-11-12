const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];

function pedirNotas(total, actual) {
    if (actual < total) {
        rl.question(`Ingrese la nota del estudiante ${actual + 1} (0 a 10): `, (nota) => {
            notas.push(parseFloat(nota));
            pedirNotas(total, actual + 1); 
        });
    } else {
        mostrarResultados();
    }
}

function mostrarResultados() {
    console.log("\n--- REPORTE DE CALIFICACIONES ---");
    let aprobados = 0;
    let reprobados = 0;
    let notaMasAlta = notas[0]; 

    for (let i = 0; i < notas.length; i++) {
        let notaActual = notas[i];

    
        if (notaActual >= 6) {
            aprobados++;
        } else {
            reprobados++;
        }

        
        if (notaActual > notaMasAlta) {
            notaMasAlta = notaActual;
        }

        console.log(`Estudiante ${i + 1}: Nota = ${notaActual}`);
    }

    console.log(`\nCantidad de estudiantes aprobados (>= 6): ${aprobados}`);
    console.log(`Cantidad de estudiantes reprobados (< 6): ${reprobados}`);
    console.log(`La nota más alta es: ${notaMasAlta}`);
    rl.close();
}


rl.question('Solicite la cantidad de estudiantes: ', (cantidad) => {
    let total = parseInt(cantidad);
    pedirNotas(total, 0);
});