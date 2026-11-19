const fs = require('fs');
const RUTA_ARCHIVO = './pacientes.json';

function leerPacientes() {
    if (!fs.existsSync(RUTA_ARCHIVO)) {
        fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify([], null, 2));
        return [];
    }
    const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8');
    try {
        return JSON.parse(contenido);
    } catch (error) {
        return [];
    }
}

function guardarPacientes(pacientes) {
    fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(pacientes, null, 2));
}

module.exports = { leerPacientes, guardarPacientes };