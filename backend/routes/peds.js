const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { redirectPed, newPedForm, detailsPedForm, editPedForm, newPed, pedDelete, pedEdit, findPed } = require('../controllers/pedidos');

//*MIDDLEWARES
const { isLoggedIn } = require('../middlewares/rolValidate');
router.use(isLoggedIn)

//* RUTAS /peds

//*CREATE
router.get('/new/', newPedForm);
router.post('/', newPed);

//* READ
router.get('/', redirectPed);
router.get('/details/:id', detailsPedForm);
router.post('/findPed', findPed);

//* UPDATE
router.get('/edit/:id', editPedForm);
router.post('/edit/:id', pedEdit);

//* DELETE
router.post('/delete/:id', pedDelete);


module.exports = router;