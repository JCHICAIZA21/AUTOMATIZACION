const APPROOT = require('app-root-path');
const MODULOS = { persona, digitacomparendo, comparendoconsulta } = require(APPROOT.path + '/tests/modulos.spec.js');



async function grupoDigitacion(cantidadComp) {
    /* test.describe('Ejecución creación persona digitación', async () => {
        MODULOS.persona = { crearPersona }.crearPersona();
    });  */

    for (let i = 0; i < cantidadComp; i++) {
        test.describe(`Ejecución digitación ${i}`, async () => {
            //var usarPersona = MODULOS.persona = datosPersona.numeroDoc;
            await (MODULOS.digitacomparendo = { digitacion }.digitacion('05/03/2022', '7184391671', i,'C24'));
        });
    };

     /* test.describe('Consulta comparendo', async () => {
        await (MODULOS.comparendoconsulta = { moduloConsulta }.moduloConsulta(cantidadComp));
    }); */



};

grupoDigitacion(100);


module.exports.grupoDigitacion = grupoDigitacion; 





