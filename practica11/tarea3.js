
const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Audífonos", precio: 60 }
];


console.log("--- Listado completo de productos ---");
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} | Precio: $${producto.precio}`);
});


const productosFiltrados = productos.filter(producto => producto.precio > 100);


console.log("\n--- Productos que superan los $100 ---");
console.log(productosFiltrados);