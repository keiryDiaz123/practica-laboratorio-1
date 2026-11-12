function analizarVentas(ventas) {
  let total = 0;
  let ventasMayores50 = 0;

  
  for (let i = 0; i < ventas.length; i++) {
    total += ventas[i];
    
    if (ventas[i] > 50) {
      ventasMayores50++;
    }
  }

  const promedio = ventas.length > 0 ? total / ventas.length : 0;

  return {
    total: total,
    promedio: parseFloat(promedio.toFixed(2)),
    ventasMayores50: ventasMayores50
  };
}


const misVentas = [25.50, 60.00, 15.00, 120.00, 45.00, 80.00];
console.log(" Análisis de Ventas");
console.log(analizarVentas(misVentas));