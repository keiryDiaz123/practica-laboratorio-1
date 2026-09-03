//Validar número positivo: Solicite un número al usuario. Verifique si es positivo,
//  negativo o cero, y muestre un mensaje correspondiente.

const readline = requiere('readline');

cont kd = readline.createIerface({
    input:process.stidin,
    output:process.stdout

})

kd.question("ingrse un numero:" ,(numero)=>{
    if(numero>=1){
        console("su numero es positivo");

    }else if(numero<=-1){
        console.log("su numero es negativo ");
    }else{
        console.log("su numero es 0:");
    }
    kd.close();
})