/*
    PAth: /api/mensajes

*/ 


const { Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');


const router = Router();



router.get('/:de', validarJWT ,getUsuarios );











module.exports=router;