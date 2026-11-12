const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let precios = [];

function pedirPrecios(total, actual) {
    if (actual < total) {
        rl.question(`Ingrese el precio del producto ${actual + 1}: `, (precio) => {
            precios.push(parseFloat(precio));
            pedirPrecios(total, actual + 1); 
        });
    } else {
        mostrarInventario();
    }
}

function mostrarInventario() {
    console.log("\n--- REPORTE DE INVENTARIO ---");
    let sumaTotal = 0;
    console.log("Precios mayores a $15.00:");

    for (let i = 0; i < precios.length; i++) {
        sumaTotal += precios[i]; 
        
        if (precios[i] > 15.00) {
            console.log(`- Producto ${i + 1}: $${precios[i].toFixed(2)}`);
        }
    }

    console.log(`\nLa suma total de la compra es: $${sumaTotal.toFixed(2)}`);
    rl.close();
}


rl.question('¿Cuántos productos va a registrar?: ', (cantidad) => {
    let total = parseInt(cantidad);
    pedirPrecios(total, 0);
});