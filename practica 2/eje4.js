//Obtenga la fecha actual y muestre el día, mes y año de forma personalizada (Ej: 26/8/2026).

let fecha =new date();

let dia = fecha.getDate();
let mes = fecha.getMonth()+1;

let anio = fecha.getFullYear();
console.log(`la fecha actual es : ${dia}/${mes}/${anio}`);