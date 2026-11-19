const { leerPacientes, guardarPacientes } = require('./archivo');


function insertarPaciente(nuevoPaciente, callback) {
    const pacientes = leerPacientes();
    
    
    const correoExiste = pacientes.some(p => p.correo.toLowerCase() === nuevoPaciente.correo.toLowerCase());
    
    if (correoExiste) {
        console.log('\n Error: Ya existe un registro con este correo de dueño.');
        return callback();
    }

    pacientes.push(nuevoPaciente);
    guardarPacientes(pacientes);
    console.log('\n ¡Paciente registrado con éxito!');
    callback();
}


function mostrarPacientes() {
    const pacientes = leerPacientes();
    if (pacientes.length === 0) {
        console.log('\n No hay pacientes registrados en la veterinaria.');
        return;
    }
    console.log('\n--- LISTA DE PACIENTES (VETERINARIA) ---');
    pacientes.forEach((p, index) => {
        console.log(`${index + 1}. Mascota: ${p.mascota} (${p.especie}) | Edad: ${p.edad} años | Dueño: ${p.dueno} | Correo: ${p.correo}`);
    });
}


function actualizarPaciente(correoBuscado, datosNuevos, callback) {
    let pacientes = leerPacientes();
    const index = pacientes.findIndex(p => p.correo.toLowerCase() === correoBuscado.toLowerCase());

    if (index === -1) {
        console.log('\n Error: No se encontró ningún registro con ese correo.');
        return callback();
    }

    
    if (datosNuevos.correo && datosNuevos.correo.toLowerCase() !== correoBuscado.toLowerCase()) {
        const correoOcupado = pacientes.some(p => p.correo.toLowerCase() === datosNuevos.correo.toLowerCase());
        if (correoOcupado) {
            console.log('\n Error: El nuevo correo ya pertenece a otro cliente.');
            return callback();
        }
    }

    
    pacientes[index] = {
        mascota: datosNuevos.mascota || pacientes[index].mascota,
        especie: datosNuevos.especie || pacientes[index].especie,
        edad: datosNuevos.edad || pacientes[index].edad,
        dueno: datosNuevos.dueno || pacientes[index].dueno,
        correo: datosNuevos.correo || pacientes[index].correo
    };

    guardarPacientes(pacientes);
    console.log('\n Datos del paciente actualizados correctamente.');
    callback();
}


function eliminarPaciente(correoBuscado, callback) {
    let pacientes = leerPacientes();
    const pacientesFiltrados = pacientes.filter(p => p.correo.toLowerCase() !== correoBuscado.toLowerCase());

    if (pacientes.length === pacientesFiltrados.length) {
        console.log('\n Error: No se encontró un paciente asociado a ese correo.');
        return callback();
    }

    guardarPacientes(pacientesFiltrados);
    console.log('\n✅ Paciente dado de baja exitosamente.');
    callback();
}

module.exports = { insertarPaciente, mostrarPacientes, actualizarPaciente, eliminarPaciente };