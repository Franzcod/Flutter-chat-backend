
const { response } = require('express');

const crearUsuario = ( req, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear Usuarie'
    });
}

module.exports={
    crearUsuario
}