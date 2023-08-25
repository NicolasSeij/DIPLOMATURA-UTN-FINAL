const express = require('express');

const isAdmin = (req, res, next) => {

    if(req.session.admin!==1){
        res.render('pages/401');
    };
    
    next();
}

const isLoggedIn = (req, res, next) => {

    if (!req.session.nombre) {
        res.redirect('/auth');
    }else{
        next();   
    };    
}

module.exports = {
    isAdmin,
    isLoggedIn
};