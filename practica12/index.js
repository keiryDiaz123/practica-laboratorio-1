const readline = require('readline');
const { insertarPaciente, mostrarPacientes, actualizarPaciente, eliminarPaciente } = require('./operaciones');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('\n====================================');
    console.log('   SISTEMA VETERINARIA - MODO CRUD  ');
    console.log('====================================');
    console.log('1. Registrar nueva mascota');
    console.log('2. Mostrar lista de pacientes');
    console.log('3. Actualizar datos de paciente');
    console.log('4. Eliminar paciente');
    console.log('5. Salir');
    
    rl.question('\nElige una opción (1-5): ', (opcion) => {
        switch (opcion.trim()) {
            case '1':
                rl.question('Nombre de la mascota: ', (mascota) => {
                    rl.question('Especie (Perro, Gato, etc.): ', (especie) => {
                        rl.question('Edad de la mascota: ', (edad) => {
                            rl.question('Nombre del dueño: ', (dueno) => {
                                rl.question('Correo electrónico del dueño: ', (correo) => {
                                    insertarPaciente({ mascota, especie, edad, dueno, correo }, mostrarMenu);
                                });
                            });
                        });
                    });
                });
                break;

            case '2':
                mostrarPacientes();
                mostrarMenu();
                break;

            case '3':
                rl.question('Ingrese el correo del dueño para buscar al paciente: ', (correoBuscado) => {
                    rl.question('Nuevo nombre de mascota (dejar en blanco para no cambiar): ', (mascota) => {
                        rl.question('Nueva especie (dejar en blanco para no cambiar): ', (especie) => {
                            rl.question('Nueva edad (dejar en blanco para no cambiar): ', (edad) => {
                                rl.question('Nuevo nombre de dueño (dejar en blanco para no cambiar): ', (dueno) => {
                                    rl.question('Nuevo correo (dejar en blanco para no cambiar): ', (correo) => {
                                        actualizarPaciente(correoBuscado, { mascota, especie, edad, dueno, correo }, mostrarMenu);
                                    });
                                });
                            });
                        });
                    });
                });
                break;

            case '4':
                rl.question('Ingrese el correo del dueño del paciente que desea eliminar: ', (correo) => {
                    eliminarPaciente(correo, mostrarMenu);
                });
                break;

            case '5':
                console.log('\nSaliendo del sistema de veterinaria... ¡Hasta luego!');
                rl.close();
                break;

            default:
                console.log('\n Opción no válida. Intente de nuevo.');
                mostrarMenu();
                break;
        }
    });
}


mostrarMenu();