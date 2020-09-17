
const { response } = require('express');
const Usuario = require('../models/usuario');


const crearUsuario = ( req, res = response) => {
    
    const usuario = new Usuario( req.body );


    res.json({
        ok: true,
        body: req.body
    });
}

module.exports={
    crearUsuario
}