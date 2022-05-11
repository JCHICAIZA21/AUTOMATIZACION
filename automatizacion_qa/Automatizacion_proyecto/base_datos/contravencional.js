const APPROOT = require('app-root-path');
const { Pool } = require('pg');
const { ORGANISMO_TRANSITO } = require(APPROOT.path + '/varios/organismo_transito.js')

var logger = require('../utils/log');


var idOt = ORGANISMO_TRANSITO.usarOt;
var idOtContravencional = ORGANISMO_TRANSITO.ot[idOt].idcontravencional;
var idOtAdmin = ORGANISMO_TRANSITO.ot[idOt].idadminot;



const pool = new Pool({
    host: "10.11.252.32",
    user: "nuevosmodulostest",
    port: "5432",
    password: "123456789",
    database: "nuevosmodulos",
    max: 200
});
module.exports = pool;

async function getNextSequence() {
    try {
        var maximonumcomp = `select max(numerocomparendo) from contravenciones.comparendo c where autoridadtransito_id = ${idOtContravencional} and numerocomparendo ilike '%${idOtAdmin}%';`;
        const res = await pool.query(maximonumcomp)
        var secuencia = BigInt(res.rows[0].max);
        secuencia++;
        const secuenciaString = secuencia.toString();
        logger.debug(secuenciaString);
        //console.log(secuenciaString);
        return secuenciaString;
    } catch (err) {
        logger.error(err.stack);
        throw err;
    };
};


async function comparendoExistente(nRegistros) {
    try {
        var comparendoexiste = `select numerocomparendo from contravenciones.comparendo c
                  where autoridadtransito_id =${idOtContravencional} and numerocomparendo ilike '%${idOtAdmin}%' order by fecha_ingreso desc limit ${nRegistros};`;
        const res = await pool.query(comparendoexiste);

        let comp = [];
        for (let i = 0; i < nRegistros; i++) {
            var registros = res.rows[i].numerocomparendo;
            var registroString = registros.toString();
            comp.push(registroString)
        }
        logger.debug(comp);
        return comp;
    } catch (err) {
        logger.error(err.stack);
        throw err;
    };

};


//comparendoExistente(10);

async function infoComparendo(comparendo) {
    try {
        var consulta = `select c.* from contravenciones.comparendodigitacion c
        left join contravenciones.infraccion i on c.infraccion_id = i.id
        where c.numerocomparendo ='${comparendo}'`;
        const res = await pool.query(consulta);
        info = [
            fuga = await res.rows[0].reportafuga,
            codigoInfraccion = await res.rows[0].codigo,
            docInfractor = await res.rows[0].documentoinfractor,
            agente = await res.rows[0].entidadagente,
            fechaImpone = await res.rows[0].fechaimposicion,
        ]
        logger.debug(res);
        return info;
    } catch (err) {
        logger.error(err.stack);
        throw err;
    };

};

async function parametroFalloManual(valor) {
    try {
        var activa_parametro = `UPDATE contravenciones.parametroautoridad
        SET  valor= ${valor} 
        WHERE nombre='falloManualResolucion' 
        AND autoridadtransito_id = ${idOtContravencional};`;
        const res = await pool.query(activa_parametro)
        return res;
    } catch (err) {
        logger.error(err.stack);
        throw err;
    };
};

async function entidadAgente() {
    try {
        var idAgente = `select id from contravenciones.entidadagente e where nombre ilike '%agente%' and  autoridadtransito_id =${idOtContravencional};`
        const res = await pool.query(idAgente)
        const resString = res.rows[0].id
        return resString
    } catch (err) {
        logger.error(err.stack);
        throw err;
    };
};

async function codigoInfraccionComparendo(codigo) {
    try {
        var codInfraccion = `select codigo from contravenciones.infraccion i where codigo = '${codigo}'`
        const res = await pool.query(codInfraccion)
        const resString = res.rows[0].codigo
        console.log(resString);
        return resString
    } catch (err) {
        logger.error(err.stack);
        throw err;
    };
};

//codigoInfraccionComparendo('C30');

async function mesesCaducidad() {
    try {
        var val_parametro = `select max(valor)from contravenciones.parametroautoridad p where autoridadtransito_id =${idOtContravencional}
        and nombre ilike '%mesescadu%';`;
        const res = await pool.query(val_parametro)
        var val = BigInt(res.rows[0].max);
        val++;
        const val_str = val.toString();
        const val_int = parseInt(val_str);
        logger.debug(val_int);
        return val_int;
    } catch (err) {
        logger.error(err.stack);
        throw err;
    };
};


/*
async function documentoinfractor() {
    try {
        await conectarbd;
        var documentoinfractor = `select documentoinfractor from contravenciones.comparendo c
        where autoridadtransito_id =29 and numerocomparendo= ${comparendoexistente}; `;
        const res = await client.query(documentoinfractor);
        var cc=BigInt(res.rows[0].max);
        const numdoc= cc.toString();
        logger.debug(numdoc);
        return numdoc;
    } catch (err) {
        logger.error(err.stack);
        throw err;
    } finally {
        desconectarbd;
    };   
    
};
*/




module.exports.comparendoExistente = comparendoExistente;
module.exports.getNextSequence = getNextSequence;
//module.exports.documentoinfractor = documentoinfractor;
module.exports.parametroFalloManual = parametroFalloManual;
module.exports.mesesCaducidad = mesesCaducidad;
module.exports.entidadAgente = entidadAgente;
module.exports.infoComparendo = infoComparendo;
module.exports.codigoInfraccionComparendo = codigoInfraccionComparendo;






