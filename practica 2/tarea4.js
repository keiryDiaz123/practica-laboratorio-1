// Obtenga la fecha y hora actual.
// Muestre en formato: "Hoy es DD/MM/AAAA y son las HH:MM:SS"

let fechaActual = new Date();

let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1; 
let anio = fechaActual.getFullYear();

let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

let fechaFormateada = dia + "/" + mes + "/" + anio;
let horaFormateada = horas + ":" + minutos + ":" + segundos;

console.log("Hoy es " + fechaFormateada + " y son las " + horaFormateada);