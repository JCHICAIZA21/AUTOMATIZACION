const APPROOT = require('app-root-path');

const FUNCIONESBD = {
    bd: { getNextSequence, comparendoexistente, parametro_falloManual, meses_caducidad, entidadAgente, infoComparendo, comparendoExistente, codigoInfraccionComparendo } = require(APPROOT.path + '/base_datos/contravencional.js'),
}

module.exports.FUNCIONESBD = FUNCIONESBD;