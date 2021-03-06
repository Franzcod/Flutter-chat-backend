
/**
 * path: api/login
 */

const { Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario , login} = require('../controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');


const router = Router();


router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es incorrecta').not().isEmpty(),
    validarCampos
] , crearUsuario);



router.post('/',[
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es incorrecta').not().isEmpty(),
    validarCampos
], login);

module.exports=router;