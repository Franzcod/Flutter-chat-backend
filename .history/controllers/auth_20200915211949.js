
const { response } = require('express');

const crearUsuario = () => {
    res.json({
        ok: true,
        msg: 'Crear Usuario'
    });
}

module.exports={
    crearUsuario
}