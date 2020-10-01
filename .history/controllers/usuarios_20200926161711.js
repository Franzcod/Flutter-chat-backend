
const {response} = require('express');
const Usuario = require('../models/usuario');


const getUsuarios = async (req, res = response) =>{

    const usuarios =  await Usuario.find();


    res.json({
        ok: true,
        usuarios
    })
}


module.exports ={
    getUsuarios
}