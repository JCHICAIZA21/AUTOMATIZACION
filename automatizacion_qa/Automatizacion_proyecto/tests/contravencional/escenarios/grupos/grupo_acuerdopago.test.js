const APPROOT = require('app-root-path');
const MODULOS = { comparendoconsulta, acuerdopago } = require(APPROOT.path + '/tests/modulos.spec.js');
const MODULOSGRUPOS = { grupodigitacion } = require(APPROOT.path + '/tests/modulos.spec.js');
const { FUNCIONESBD } = require(APPROOT.path + '/varios/funciones_bd.js');


async function grupoAcuerdoPago(comparendos) {
    test.describe('Ejecución grupo acuerdo pago', async () => {
        MODULOSGRUPOS.grupodigitacion = { grupoDigitacion }.grupoDigitacion(comparendos);
        MODULOS.acuerdopago = { acuerdoPago }.acuerdoPago(comparendos);
        MODULOS.comparendoconsulta = { moduloConsulta }.moduloConsulta(comparendos);
    });
};



grupoAcuerdoPago(2);

module.exports.grupoAcuerdoPago = grupoAcuerdoPago;




