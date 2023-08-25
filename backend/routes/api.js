const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { getPedsByClient } = require('../controllers/pedidos');
const { sendEMail } = require('../controllers/mail');

//* RUTA /api

//*READ
router.get('/:id', getPedsByClient);
router.post('/mail', sendEMail);



module.exports = router;