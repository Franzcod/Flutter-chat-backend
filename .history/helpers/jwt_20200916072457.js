
const jwt = require('jsonwebtoken');

// web:    jwt.io
const generarJWT = ( uid ) => {

    const payload = {uid};

    jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: '24hs',
    }, (er, token) => {
        if(err){
            //No se pude crear el token
        }else{
            // TOKEN!!
        }
    })


}

module.exports={
    generarJWT
}