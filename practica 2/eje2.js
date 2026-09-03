// Solicite un código con formato "EST20260645".
//  Extraiga los primeros 3 caracteres y los últimos 4.

let codigo = `EST20200645`;

let codigo3Caracter = codigo.slice(0,3)
let codigo4Caracter = codigo.slice(8,11)

console.log("los primeros 3 caracteres del codigo son :"+codigo3Caracter);
console.log("los ultimos 4 caracteres del codigo:"+codigo4Caracter)