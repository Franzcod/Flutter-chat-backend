const Mensaje = require('../models/mensaje');


const obtenerChat = async () => {

    const miId = req.uid;
    const mensajeDe= req.params.de;

    const last30 = await Mensaje.find({
        $op: [{de: miId,  para: mensajeDe}, {de: mensajeDe, para: miId} ]
    })
    .sort({createdAt: 'desc'})
    .limit(30);


    res.json({
        ok: true,
        msg: 'Hola Mensaje',
        mensajes:last30
    });

}



module.exports={
    obtenerChat
}