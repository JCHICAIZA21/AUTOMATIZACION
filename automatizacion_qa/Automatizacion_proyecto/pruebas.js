const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const { FUNCIONESBD } = require(APPROOT.path + '/varios/funciones_bd.js');
const MODULOS = { persona } = require(APPROOT.path + '/tests/modulos.spec.js');




async function name() {
    /* var comparendoExiste = await FUNCIONESBD.bd.comparendoExistente(4);
    for (let i = 0; i < comparendoExiste.length; i++) {
        const comp = comparendoExiste[i];
        const infoComp = await FUNCIONESBD.bd.infoComparendo(comp);
        var perro = infoComp.info = docInfractor
        console.log(perro); */
    var comparendoConsulta = await FUNCIONESBD.bd.comparendoExistente(2);
    for (let i = 0; i < comparendoConsulta.length; i++) {
        const comp = comparendoConsulta[i];
        test.describe(`Ejecución consulta  ${i}`, async () => {
            await moduloConsulta(comp);
        });
    };


};

name();
