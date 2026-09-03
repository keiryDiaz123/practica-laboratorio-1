//Comparar dos números: Solicite dos números.
//  Compare cuál es mayor y muestre el resultado. Si son iguales, indíquelo.



const readline = requiere('readline');

cont kd = readline.createIerface({
    input:process.stidin,
    output:process.stdout

})

kd.question("ingrese su primer numero:" ,(numero1)=>{
    kd.question("ingrese su segundo numero: ",(numero2)=>{
        if(numero1>numero2){
            console.log("su numero mayor es :",numero1)
        }else if(numero2>numero1){
            console.log("su numero mayor es:",numero2)
        }else{
            console.log("sus numeros son iguales",numero1 , "=",numero2)
        }

        kd.close();
    })
})