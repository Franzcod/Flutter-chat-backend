
const {io}           = require('../index');
const {comprobarJWT} = require('../helpers/jwt');
const {usuarioConectado, usuarioDesconectado} = require('../controllers/socket');
const usuario = require('../models/usuario');


// Mensajes de Sockets
io.on('connection', client => {

    console.log('Cliente Conectado');
    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);

    //Verificar autenticacion
    if(!valido) {return client.disconnect();}

    //Cliente autenticado
    usuarioConectado(uid);

    //? Ingresar al usuario a una sala
    //Sala global ((todos los dispositivos conectados))
    client.join(uid);

    // Escuchar del cliente el mensaje-personal

    client.on('mensaje-personal', (payload)=>{
        console.log(payload);
    })

    // client.to(uid).emit('');



    client.on('disconnect', () => {
        usuarioDesconectado(uid);
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!', payload);

        io.emit( 'mensaje', {admin: 'Nuevo mensaje'} );
    });

});
