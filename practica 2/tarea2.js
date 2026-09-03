// Solicite el nombre del producto, precio unitario y cantidad.
// Muestre el nombre en mayúsculas, extraiga las primeras 3 letras del producto y muestre el precio total con 2 decimales.

let producto = "Laptop Asus";
let precioUnitario = 850.50;
let cantidad = 2;

let productoMayus = producto.toUpperCase();
let codigoProducto = producto.slice(0, 3);
let precioTotal = (precioUnitario * cantidad).toFixed(2);

console.log("Producto en mayúsculas: " + productoMayus);
console.log("Primeras 3 letras del producto: " + codigoProducto);
console.log("Precio total: $" + precioTotal);