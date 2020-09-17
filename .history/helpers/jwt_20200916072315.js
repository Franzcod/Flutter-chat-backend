
const jwt = require('jsonwebtoken');

// web:    jwt.io
const generarJWT = ( uid ) => {

    const payload = {uid};

    jwt.sign(payload, process.env.JWT_KEY)


}

module.exports={
    generarJWT
}