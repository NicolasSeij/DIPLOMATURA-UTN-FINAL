const express = require('express');
const router = express.Router();

//*CONTROLADOR
const { redirectIndex } = require('../controllers/index');

//*MIDDLEWARES
const { isLoggedIn } = require('../middlewares/rolValidate');


//* RUTAS /

//* READ
router.get('/', isLoggedIn, redirectIndex);


module.exports = router;
