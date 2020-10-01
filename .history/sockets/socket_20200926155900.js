
const {io}           = require('../index');
const {comprobarJWT} = require('../helpers/jwt');
const {usuarioConectado, usuarioDesconectado} = require('../controllers/socket');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');

    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);

    //Verificar autenticacion
    if(!valido) {return client.disconnect();}

    //Cliente autenticado






    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!', payload);

        io.emit( 'mensaje', {admin: 'Nuevo mensaje'} );
    });

});
