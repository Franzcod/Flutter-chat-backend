
const jwt = require('jsonwebtoken');

// web:    jwt.io
const generarJWT = ( uid ) => {

    return new Promise( (resolve, reject) => {
        const payload = {uid};

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24hs',
        }, (er, token) => {
            if(err){
                //No se pude crear el token
                reject('No se pudo generar el JsonWebToken');
            }else{
                // TOKEN!!
                resolve(token);
            }
        })

    });

}

module.exports={
    generarJWT
}