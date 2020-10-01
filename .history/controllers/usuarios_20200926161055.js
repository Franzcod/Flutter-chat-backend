
const {response} = require('express');


const getUsuarios = (req, res = response) =>{
    res.json({
        ok: true,
        msg: 'getUsuarios'
    })
}


module.exports ={
    getUsuarios
}