const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { redirectClientes, newClientForm, newClient, editClientForm, clientEdit, clientDelete, findClient } = require('../controllers/clientes');

//*MIDDLEWARES
const { isLoggedIn } = require('../middlewares/rolValidate');
router.use(isLoggedIn)

//*RUTAS /clientes

//* CREATE
router.get('/new/', newClientForm);
router.post('/', newClient);

//* READ
router.get('/', redirectClientes);
router.post('/findClient', findClient);

//* UPDATE
router.get('/edit/:id', editClientForm);
router.post('/edit/:id', clientEdit);

//* DELETE
router.post('/delete/:id', clientDelete);


module.exports = router;