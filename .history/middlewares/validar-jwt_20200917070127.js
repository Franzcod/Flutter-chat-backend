
const jwt = require('jsonwebtoken');


const validarJWT = ( req, res, next) => {

    //Leer Token

    const token = req.header('x-token');

    console.log(token);


}



module.exports = {
    validarJWT,
}