//solicite un número de referencia de 8 dígitos. 
// Conviértalo a texto y extraiga los primeros 4 dígitos.

let numero = 12345678;

let numeroTexto = numero.toString()
console.log("suvariable es de tipo: "+ typeof numeroTexto);

console.log("los primeros 4 digityos son:"+numeroTexto.slice(0,4));
