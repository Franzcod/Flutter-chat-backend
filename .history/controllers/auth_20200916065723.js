
const { response } = require('express');
const Usuario = require('../models/usuario');


const crearUsuario = async ( req, res = response) => {

    const { email } = req.body;

    try {
        const usuario = new Usuario( req.body );
        await usuario.save();


        res.json({
            ok: true,
            body: req.body
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    
    
}

module.exports={
    crearUsuario
}