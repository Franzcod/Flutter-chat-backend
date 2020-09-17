
const { response } = require('express');

const crearUsuario = () => {
    res.json({
        ok: true,
        msg: 'Crear Usuarie'
    });
}

module.exports={
    crearUsuario
}