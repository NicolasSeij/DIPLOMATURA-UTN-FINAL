const { getAll, getFirstWith, insert, deleteById, update, pool } = require('./db');

const tabla = `pedidos`;
const class_id = `orden_id`;

const getPedById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);
}

const getAllPeds = async () => {
    return await getAll(tabla)
}

const insertPed = async (rep) => {
    return await insert(tabla, rep)
}

const deletePed = async (id) => {
    return await deleteById(tabla, class_id, id)
}

const updatePed = async (rep, id) => {
    return await update(tabla, rep, class_id, id)
}

const getPedJOINClient = async (id) => {
    const query = `SELECT * FROM pedidos INNER JOIN cliente ON pedidos.cliente_id = cliente.cliente_id WHERE orden_id = ${id}`

    try {
        const orden = await pool.query(query);
        return orden[0];
    }
    catch (error) {
        throw error;
    }

}

const getPedsByUser = async (id) => {
    
    const query = `SELECT * FROM reparacion INNER JOIN usuario ON reparacion.user_id = usuario.user_id WHERE usuario.user_id = ${id}`

    try {
        return await pool.query(query);
    }
    catch (error) {
        throw error;
    }

}

const getPedsByClientId = async (id) => {
    const query = `SELECT orden_id, equipo, marca, modelo, fecha, fecha_reparacion, fecha_entrega FROM reparacion INNER JOIN cliente ON reparacion.cliente_id = cliente.cliente_id WHERE cliente.cliente_id = ${id}`

    try {
        return await pool.query(query);;
    }
    catch (error) {
        throw error;
    }

}
module.exports = {
    getAllPeds,
    getPedById,
    insertPed,
    deletePed,
    updatePed,
    getPedJOINClient,
    getPedsByUser,
    getPedsByClientId

}