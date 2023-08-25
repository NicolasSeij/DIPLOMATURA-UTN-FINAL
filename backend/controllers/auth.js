const { request, response } = require('express');
const { getUserByPN } = require('../models/usuarios')

const defaultLogin = (req = request, res = response) => {

    res.render('admin/login', {
        layout: 'admin/layout'
    });
}

const validarUsuario = async (req = request, res = response) => {

    const user = await getUserByPN(req.body.pass, req.body.usuario);

    if (user !== undefined) {
        req.session.nombre = user.nombre;
        req.session.admin = user.es_admin;
        req.session.user_id = user.user_id;
        return res.redirect('/')
    }
    else {
        return res.render('admin/login', {
            layout: 'admin/layout',
            error: 'Error en usuario o contraseña'
        });
    }
};

const logOut = (req = request, res = response) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports = {
    validarUsuario,
    defaultLogin,
    logOut
}