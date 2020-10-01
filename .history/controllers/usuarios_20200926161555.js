
const {response} = require('express');
const Usuario = require('../models/usuario');


const getUsuarios = (req, res = response) =>{
    res.json({
        ok: true,
        msg: 'getUsuarios'
    })
}


module.exports ={
    getUsuarios
}