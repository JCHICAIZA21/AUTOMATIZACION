const APPROOT = require('app-root-path');
const { MODULOS } = require(APPROOT.path + '/tests/modulos.spec.js');

/* async function tipoFechaImposicion(tipo) {
    const date = new Date();
    function calcularFecha(fecha, dias) {
        return tipoFecha = {
            dia: fecha.setDate(fecha.getDate() + dias),
            mes: fecha.setDate(fecha.getMonth() + dias),
            anio: fecha.setDate(fecha.getFullYear() + dias),
        }
    }

    const fechaActual = date.toLocaleDateString();
    var fechaBase = calcularFecha(date, -0);
    const fechaCambia = {
        "descuento 50%": fechaBase,
        "descuento 25%": fech,
    }
    
    //console.log(fechaCambia["descuento 50%"]);
 */

function calcularFecha(dias, meses) {
    const fecha = new Date();
    tipoFecha = {
        dia: fecha.getDate() + dias,
        mes: (fecha.getMonth() + 1) + meses,
        anio: fecha.getFullYear(),

    }

    if (tipoFecha.dia < 10 && tipoFecha.mes < 10) {
        var agregarCeroDia = '0' + tipoFecha.dia;
        var agregarCeroMes = '0' + tipoFecha.mes;

    } else {
        if (tipoFecha.dia >= 10 && tipoFecha.mes >= 10) {
            var agregarCeroMes = '0' + tipoFecha.mes;
        }
        var dia = tipoFecha.dia;
        var mes = tipoFecha.mes;
    }
    return console.log( (`${(agregarCeroDia || dia)}`+ / + ` ${(agregarCeroMes || mes)}` + ` / ${tipoFecha.anio} `));
}


calcularFecha(1, 8);
