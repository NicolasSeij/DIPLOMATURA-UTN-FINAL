const { request, response } = require('express');
const { filtrar } = require('../helpers/funciones');
const { getAllClients, getClientByTel, insertClient, getClientById, updateClient, deleteClient} = require('../models/clientes')

//* CREATE GET
const newClientForm = (req, res) => {
  res.render('partials/clientsForm/newClientForm')
}

//* CREATE POST
const newClient = async (req, res) => {

  const client = {
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    obs: req.body.obs,
  }

  if (await getClientByTel(client.telefono) !== undefined) {

    res.render('partials/clientsForm/newClientForm', {
      data: client,
      aviso:"cliente existente con el mismo número de telefono"
    });

  }else{
    await insertClient(client);
    res.redirect('/clientes')  
  }
  
}

//* READ GET
const redirectClientes = async (req = request, res = response) => {
    res.render('pages/clientes', {
      clientes: 'active',
      data: await getAllClients()
    });
}

//* READ POST
const findClient = async (req, res) => {
  
  const clientes = await getAllClients();
  const filtro = req.body.buscar;
  
  res.render('pages/clientes', {
    clientes: 'active',
    data: filtrar(clientes, filtro)
  });

}
//* UPDATE GET
const editClientForm = async (req, res) => {

  const client = await getClientById(req.params.id);
  res.render('partials/clientsForm/editClientForm',{
    data: client
  });
 
}

//* UPDATE POST
const clientEdit = async (req, res) => {

  const client = {
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    obs: req.body.obs,
  }

  await updateClient(client, parseInt(req.params.id));
  res.redirect('/clientes')  
}

//* DELETE
const clientDelete = async (req, res) => {
    
    await deleteClient(parseInt(req.params.id));
    res.redirect('/clientes')  

}

module.exports = {
  redirectClientes,
  newClientForm,
  newClient,
  editClientForm,
  clientEdit,
  clientDelete,
  findClient
}