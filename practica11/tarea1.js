
const notasEstudiante = [8, 7, 9, 6, 10];


const sumaNotas = notasEstudiante.reduce((acumulador, notaActual) => acumulador + notaActual, 0);


const promedio = sumaNotas / notasEstudiante.length;


console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);