const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        console.log('iniciado dase de datos');
        // mongoose.connect('')

    } catch (error){
        console.log(error);
        throw new Error('Error en la base de datos - Hable con el admin');
    }
}


module.exports={
    dbConnection
}