
const { Schema, model} = require('mongoose');


const UsuaioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },
    online: {
        type: Boolean,
        default: false
    },


});

module.exports = model('Usuario', UsuarioSchema);