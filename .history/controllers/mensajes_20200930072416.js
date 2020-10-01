const Mensaje = require('../models/mensaje');


const obtenerChat = async () => {

    const miId = req.uid;
    const mensajeDe= req.params.de;


    res.json({
        ok: true,
        msg: 'Hola Mensaje'
    });

}



module.exports={
    obtenerChat
}