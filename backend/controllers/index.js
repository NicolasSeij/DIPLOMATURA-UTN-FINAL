const { request, response } = require('express');
const { nroEmpleados, nroPendientes, nroPedidos, topMarcas } = require('../models/index');

const redirectIndex = async (req = request, res = response) => {

    res.render('pages/index', {
      data: [await nroEmpleados(), await nroPendientes(), await nroPedidos(), await topMarcas()],
      index: 'active'
    })

}

module.exports = {
  redirectIndex
}