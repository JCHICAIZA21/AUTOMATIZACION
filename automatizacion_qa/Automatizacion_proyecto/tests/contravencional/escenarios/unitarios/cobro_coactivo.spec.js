const appRoot = require('app-root-path');
const {librerias} = require(appRoot.path + '/varios/librerias.js')
const { consulta_comparendo } = require(appRoot.path + '/tests/Escenarios/contravencional/consulta_comparendo.spec.js');
const {funciones_bd} = require(appRoot.path + '/varios/funciones_bd.js')




async function cobro_coactivo() {
    test('Cobro coactivo', async ({ page }) => {
        await funciones_bd.Bd.parametro_falloManual();

        //Se digita el comparendo de caducidad
        await digitacion('01/01/2021');

        var numcomp = await funciones_bd.Bd.comparendoexistente();

        await page.goto('http://10.11.252.31:8080/Contravencional/webresources/tareas/procesoCoactivo');

        await page.goto('http://10.11.252.31:8080/Contravencional');

        consulta_comparendo(numcomp);

    });

};

module.exports.cobro_coactivo = cobro_coactivo;

