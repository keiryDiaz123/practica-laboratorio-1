function generarTablaMultiplicar(numero) {
  const tabla = [];

  
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }

  return tabla;
}


const numeroBase = 7;
const tablaDelSiete = generarTablaMultiplicar(numeroBase);

console.log(` Tabla del ${numeroBase}`);
console.log(tablaDelSiete);