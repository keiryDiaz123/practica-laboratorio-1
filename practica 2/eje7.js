//Obtenga la hora, minutos y segundos actual. Muestre en formato: HH:MM:SS

let fecha = new Date();
let hora = fecha.getHours();

let nimutos = fecha.getMinutos();

let segunddos = fecha.getSeconds();

console.log(`la hora es: ${hora}:${minutos}:${segundos}`)