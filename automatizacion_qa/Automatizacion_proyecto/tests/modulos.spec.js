const APPROOT = require('app-root-path');
const MODULOS = {
    persona: { crearPersona, datosPersona } = require(APPROOT.path + '/tests/contravencional/escenarios/unitarios/crear_persona.spec.js'),
    digitacomparendo: { digitacion } = require(APPROOT.path + '/tests/contravencional/escenarios/unitarios/digitacion.spec.js'),
    acuerdopago: { acuerdoPago } = require(APPROOT.path + '/tests/contravencional/escenarios/unitarios/acuerdo_pago.spec.js'),
    comparendoconsulta: { moduloConsulta } = require(APPROOT.path + '/tests/contravencional/escenarios/unitarios/consulta_comparendo.spec.js'),
    /*  cobrocoactivo: { crearPersona } = require(APPROOT.path + '/tests/Escenarios/contravencional/crear_persona.spec.js'),
     falloaudiencia: { crearPersona } = require(APPROOT.path + '/tests/Escenarios/contravencional/crear_persona.spec.js'),
     caducidad: { crearPersona } = require(APPROOT.path + '/tests/Escenarios/contravencional/crear_persona.spec.js'),
     solicitudaudiencia: { crearPersona } = require(APPROOT.path + '/tests/Escenarios/contravencional/crear_persona.spec.js'),
     grupoacuerdopago: { crearPersona } = require(APPROOT.path + '/tests/Escenarios/contravencional/crear_persona.spec.js'),
     grupocaducidad: { crearPersona } = require(APPROOT.path + '/tests/Escenarios/contravencional/crear_persona.spec.js') */

};

const MODULOSGRUPOS = {
    grupodigitacion: { grupoDigitacion } = require(APPROOT.path + '/tests/contravencional/escenarios/grupos/grupo_digitacion.test.js'),
}

module.exports.MODULOS = MODULOS;
module.exports.MODULOSGRUPOS = MODULOSGRUPOS;

