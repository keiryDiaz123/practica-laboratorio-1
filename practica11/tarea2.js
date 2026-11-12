
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}


const duplicador = crearMultiplicador(2);
const triplicador = crearMultiplicador(3);


console.log("Resultado de duplicar 5:", duplicador(5));  
console.log("Resultado de triplicar 5:", triplicador(5));   