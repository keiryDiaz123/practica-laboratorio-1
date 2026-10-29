import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const contarVocales = (cadena) => {
  if (cadena.length === 0) return 0;
  const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  const esVocal = vocales.includes(cadena[0]) ? 1 : 0;
  return esVocal + contarVocales(cadena.slice(1));
};


const invertirCadena = (cadena) => {
  if (cadena === "") return "";
  return invertirCadena(cadena.slice(1)) + cadena[0];
};


const verificarPalindromo = (cadena) => {
  
  const limpia = cadena.toLowerCase().replace(/[\s\W_]/g, "");

  const evaluar = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return evaluar(str.slice(1, -1));
  };

  return evaluar(limpia);
};

rl.question("Ingrese una palabra o frase: ", (texto) => {
  console.log(`\n--- Resultados para "${texto}" ---`);
  console.log(`Cantidad de vocales: ${contarVocales(texto)}`);
  console.log(`Cadena invertida: ${invertirCadena(texto)}`);
  console.log(`¿Es palíndromo?: ${verificarPalindromo(texto) ? "Sí" : "No"}`);

  rl.close();
});

