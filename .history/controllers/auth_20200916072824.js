
const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

const {generarJWT} = require('../helpers/jwt');



const crearUsuario = async ( req, res = response) => {

    const { email, password } = req.body;

    try {

        const existeEmail = await Usuario.findOne({ email });
        if( existeEmail){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe una cuenta con este correo'
            });
        }

        const usuario = new Usuario( req.body );
         
        ///Encriptar Contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        //Guarda en Base de Datos
        await usuario.save();

        // Generar Json Web Token
        const token = await

        res.json({
            ok: true,
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    
}

module.exports={
    crearUsuario
}