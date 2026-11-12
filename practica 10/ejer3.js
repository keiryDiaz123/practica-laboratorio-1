function filtrarNumerosParesMayoresA10(numeros) {
  const numerosFiltrados = [];

  
  for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] % 2 === 0 && numeros[i] > 10) {
      numerosFiltrados.push(numeros[i]);
    }
  }

  return numerosFiltrados;
}


const listaNumeros = [4, 12, 8, 15, 20, 7, 14, 10, 30, 2];
console.log(" Números Filtrados");
console.log(filtrarNumerosParesMayoresA10(listaNumeros)); 