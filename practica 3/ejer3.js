//Validar calificación: Solicite una calificación 
// (0-100). Muestre si aprobó (>=60) o reprobó (<60).


const readline = requiere('readline');

const kd = readline.createIerface({
    input:process.stidin,
    output:process.stdout

})

kd.question("ingrese su calificacion:",(calificacion)=>{
    if(calificacion>=0 && calificacion>=100){
          if(calificacion>=60){
            console.log("felicidades usted aprobo  ")
          }else{
            console.log("lo centimos pero usted noa aprobo")
          }
    }else{
        console.log("su calificacion tiene que estar en el rango de (0-100")
    }
    kd.close();
})

