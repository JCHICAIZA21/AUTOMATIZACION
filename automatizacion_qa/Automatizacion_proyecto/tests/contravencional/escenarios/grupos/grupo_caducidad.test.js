const appRoot = require('app-root-path');
const { test } = require('@playwright/test');
const {funciones_bd} = require(appRoot.path + '/varios/funciones_bd.js')
const { digitacion } = require(appRoot.path + '/tests/Escenarios/contravencional/digitacion.spec.js');
const { consulta_comparendo } = require(appRoot.path + '/tests/Escenarios/contravencional/consulta_comparendo.spec.js');
const { obtenerComparendoCaducidad, eliminarCompcaducidadLocalStorage } = require(appRoot.path + '/varios/setLocalStorage.js');
const { caducidad } = require(appRoot.path + '/tests/Escenarios/contravencional/caducidad.spec.js');


V = true
F = false

async function grupo_caducidad() {
  test.describe('Ejecución grupo caducidad', async () => {

    //Se realiza update de parametro
    await funciones_bd.Bd.parametro_falloManual(V)

    //Se digita el comparendo de caducidad
    digitacion('01/01/2021');

    //Se realiza consulta y se guarda en el localstorage
    var comparendo_cad = await obtenerComparendoCaducidad();

    if (typeof comparendo_cad  === "undefined" || comparendo_cad === null) {
     comparendo_cad
  }

    //Se realiza caducidad
    caducidad(comparendo_cad);

    //Se consulta comparendo
    consulta_comparendo(`${comparendo_cad}`);

    //Se elimina registro del localstorage
    eliminarCompcaducidadLocalStorage();

    await funciones_bd.Bd.parametro_falloManual(F)

  })


}

grupo_caducidad();

