//Descuento por monto de compra
//Solicite el monto de compra.
 //Si es mayor a $100, aplique 15% de descuento. Si es mayor a $50, aplique 10%.
  //En otro caso, no hay descuento. Muestre el monto original, 
  //el descuento aplicado y el total a pagar con 2 decimales.

const readline = require('readline');

const kd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

kd.question("Ingrese el monto de la compra: ", (monto) => {
    let montoOriginal = parseFloat(monto);
    let descuento = 0;

    if (montoOriginal > 100) {
        descuento = montoOriginal * 0.15;
    } else if (montoOriginal > 50) {
        descuento = montoOriginal * 0.10;
    } else {
        descuento = 0;
    }

    let totalPagar = montoOriginal - descuento;

    console.log(`Monto original: $${montoOriginal.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);

    kd.close();
});