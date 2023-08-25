const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { validarUsuario, defaultLogin, logOut } = require('../controllers/auth')

//* RUTAS /auth

//*LOGIN ADMIN
router.get('/', defaultLogin);
router.post('/', validarUsuario);

router.get('/logOut', logOut);


module.exports = router;