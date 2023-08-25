const { request, response } = require('express');
const { getAllClients } = require('../models/clientes');
const { filtrar } = require('../helpers/funciones');
const { getAllPeds, getPedById, insertPed, getPedJOINClient, updatePed, deletePed, getPedByClientId } = require('../models/pedidos')

//* CREATE GET
const newPedForm = async (req = request, res = response) => {

  res.render('partials/PedForm/newPedForm', {
    clientes: await getAllClients()
  })

}

//* CREATE POST
const newPed = async (req = request, res = response) => {

  const Ped = {
    fecha: req.body.fecha,
    cliente_id: parseInt(ped.body.cliente_id),
    equipo: req.body.equipo,
    marca: req.body.marca,
    modelo: req.body.modelo,
    problemas: req.body.falla,
    presupuesto: parseInt(ped.body.presupuesto),
  }

  await insertPed(ped);
  res.redirect('/Peds')

}

//* READ GET
const redirectPed = async (req = request, res = response) => {
  res.render('pages/pedidos', {
    ped: 'active',
    data: await getAllPeds()
  });

}

const detailsPedForm = async (req = request, res = response) => {
  const orden = await getPedJOINClient(ped.params.id);

  res.render('partials/pedsForm/detailsPedForm', {
    data: orden
  });
}

const getPedsByClient = async (req, res) => {

  res.json(await getPedsByClientId(req.params.id));
}

//* READ POST
const findPed = async (req, res) => {
  const pedidos = await getAllPeds();
  const filtro = req.body.buscar;

  res.render('pages/pedidos', {
    ped: 'active',
    data: filtrar(pedidos, filtro)
  });
}

//* UPDATE GET
const editPedForm = async (req = request, res = response) => {
  const orden = await getPedById(req.params.id);

  res.render('partials/PedsForm/editPedForm', {
    data: orden,
    clientes: await getAllClients()
  });
}

//* UPDATE POST
const pedEdit = async (req = request, res = response) => {
  const orden = {
    fecha: req.body.fecha,
    cliente_id: parseInt(req.body.cliente_id),
    productos: req.body.productos,
    marca: req.body.marca,
    modelo: req.body.modelo,
    dañado: req.body.dañado,
    presupuesto: parseInt(req.body.presupuesto),
    cantidad: req.body.cantidad,
    costo: req.body.costo,
    fecha_preparacion: req.body.fecha_preparacion,
    fecha_entrega: req.body.fecha_entrega
  }

  await updatePed(orden, parseInt(req.params.id));
  res.redirect('/peds')
}

//* DELETE
const pedDelete = async (req, res) => {

  await deletePed(parseInt(req.params.id));
  res.redirect('/peds')

}



module.exports = {
  detailsPedForm,
  editPedForm,
  findPed,
  newPed,
  newPedForm,
  redirectPed,
  pedDelete,
  pedEdit,
  getPedsByClient
}