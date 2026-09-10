
let kwhConsumidos = 250;
let precioPorKwh = 0.15;


let costoBase = kwhConsumidos * precioPorKwh;
let impuesto = costoBase * 0.10;
let costoTotal = costoBase + impuesto;


console.log(`Consumo: ${kwhConsumidos} kWh`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);