const APPROOT = require('app-root-path');
const { LIBRERIAS } = require(APPROOT.path + '/varios/librerias.js');
const { FUNCIONESBD } = require(APPROOT.path + '/varios/funciones_bd.js');
const { MODULOS } = require(APPROOT.path + '/tests/modulos.spec.js');

const  LocalStorage = LIBRERIAS.localstorage.LocalStorage;

async function num_comp() {
    try {
        var comp_bd = await comparendoexistente();
        return comp_bd;
    } catch (error) {
        console.log('salió error en la consulta del comparendo digitado' + error);
    };
};

//set de comparendo digitado en el localstorage
async function set_comparendo_caducidad_localStorage(path) {
    if (typeof localStorage === "undefined" || localStorage === null) {
        var localStorage = new LocalStorage('./scratch');
        localStorage.setItem('numero_comparendo_caducidad', await num_comp());
    }
}


async function obtenerComparendoCaducidad() {
    const localStorage = LocalStorage('./scratch');
    await set_comparendo_caducidad_localStorage();
    var num_comp_cad = await localStorage.getItem('numero_comparendo_caducidad');
    return num_comp_cad;
}



async function eliminarCompcaducidadLocalStorage() {
    test('Función eliminar comparendo caducidad localStorage', async () => {
        const localStorage = LocalStorage('./scratch');
        const eliminar_comp_localStorage = localStorage.removeItem('numero_comparendo_caducidad')
    });

}



module.exports.obtenerComparendoCaducidad = obtenerComparendoCaducidad;
module.exports.eliminarCompcaducidadLocalStorage = eliminarCompcaducidadLocalStorage;

