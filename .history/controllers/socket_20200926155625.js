
const Usuario = require('../models/usuario');


const usuarioConectado = async (uid = '') => {

    const usuario = await Usuario.findById(uid);
    usuario.online = true;

    await usuario.save();


    return usuario;
}



module.exports={
    usuarioConectado
}







