const { getAll, getFirstWith, insert, deleteById, update } = require('../models/db');
const md5 = require('md5');

const tabla = `usuario`;
const class_id = `user_id`;

const getUserByName = async (username) => {
    return await getFirstWith(tabla, `username = '${username}'`);
}
  
const getUserById = async (id) => {
    return await getFirstWith(tabla, `${class_id} = ${id}`);  
}

const getUserByPN = async (pass, username) => {
    return await getFirstWith(tabla, `username = '${username}' and pass = '${md5(pass)}'`);
}

const getAllUsers = async () =>{
    return await getAll(tabla)
}

const insertUser = async (user) =>{
    return await insert(tabla, user)
}

const deleteUser = async (id) =>{
    return await deleteById(tabla, class_id, id)
}

const updateUser = async (user, id) =>{
    return await update(tabla, user, class_id, id)
}

module.exports ={
    getAllUsers,
    getUserById,
    getUserByName,
    getUserByPN,
    insertUser,
    deleteUser,
    updateUser
}