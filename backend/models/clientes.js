const { getAll, getFirstWith, insert, deleteById, update } = require('../models/db');

const tabla = `cliente`;
const class_id = `cliente_id`;
 
const getClientById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);   
}

const getClientByTel = async (tel) => {
    
    return await getFirstWith(tabla, `telefono = ${tel}`);   
}

const getAllClients = async () =>{
    return await getAll(tabla)
}

const insertClient = async (client) =>{
    return await insert(tabla, client)
}

const deleteClient = async (id) =>{
    return await deleteById(tabla, class_id, id)
}

const updateClient = async (client, id) =>{
    return await update(tabla, client, class_id, id)
}



module.exports ={
    getAllClients,
    getClientById,
    updateClient,
    deleteClient,
    insertClient,
    getClientByTel   
}