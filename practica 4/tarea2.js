import readline from "node:readline";

const kd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

kd.question("Ingrese su nivel de estudios (1=Primaria, 2=Secundaria, 3=Bachillerato, 4=Universidad, 5=Postgrado): ", (nivel) => {
  switch (nivel) {
    case "1":
      console.log("Primaria");
      break;
    case "2":
      console.log("Secundaria");
      break;
    case "3":
      console.log("Bachillerato");
      break;
    case "4":
      console.log("Universidad");
      break;
    case "5":
      console.log("Postgrado");
      break;
    default:
      console.log("Nivel no valido");
  }
  kd.close();
});