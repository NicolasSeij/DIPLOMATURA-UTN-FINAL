const { pool } = require('../models/db');


const nroEmpleados = async () => {
    try{
        const query = "SELECT count(es_empleado) as kpi FROM usuario WHERE es_empleado = true";
        const res = await pool.query(query);
        return {
            kpi: res[0].kpi,
            title: 'empleado',
            class: "GridCardKpi"
        };
    }catch(error){
        return {};
    }
}

const nroPendientes = async () => {
    try{
        const query = "SELECT (COUNT(orden_id)-COUNT(fecha_entrega)) as kpi FROM pedidos";
        const res = await pool.query(query);
        return {
            kpi: res[0].kpi,
            title: 'ord. pendientes',
            class: "GridCardKpi"
        };
    }catch(error){
        return {};
    }
}

const nroPedidos = async () => {
    try{
        const query = "SELECT COUNT(fecha_entrega) as kpi FROM pedidos";
        const res = await pool.query(query);
        return {
            kpi: res[0].kpi,
            title: 'pedidos',
            class: "GridCardKpi"
        };
    }catch(error){
        return {};
    }
}

const topMarcas = async () => {
    try{
        const query = "SELECT marca as kpi FROM `pedidos` GROUP by marca ORDER BY count(marca)  DESC limit 5;";
        const response = await pool.query(query);
        let result = "";
        response.forEach(kpi => result += kpi.kpi + " - ");
        return {
            kpi: result,
            title: 'top 5 marcas',
            class: "GridCardList"
        };
    }catch(error){
        return {};
    }
}

module.exports ={
    nroEmpleados,
    nroPendientes,
    nroPedidos,
    topMarcas
}