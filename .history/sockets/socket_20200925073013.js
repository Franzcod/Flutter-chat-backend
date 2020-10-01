const { comprobarJWT } = require('../helpers/jwt');
const {io} = require('../index');
const {comprobarJWT} = require('../helpers/jwt');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');

    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);
    //Const valido??==
    console.log(valido,uid);



    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!', payload);

        io.emit( 'mensaje', {admin: 'Nuevo mensaje'} );
    });

});
