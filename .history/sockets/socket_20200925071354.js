const {io} = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');

    console.log(client.handshake.headers['x-token']);

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!', payload);

        io.emit( 'mensaje', {admin: 'Nuevo mensaje'} );
    });

});
