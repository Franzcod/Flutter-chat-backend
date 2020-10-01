
/**
 * path: api/usuarios
 */

const { Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');



const router = Router();



router.get('/renew', validarJWT ,renewToken );











module.exports=router;