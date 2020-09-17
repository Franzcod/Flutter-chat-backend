const express = require('express');
const path = require('path');
require('dotenv').config();


// App de Express
const app = express();


// Node Server
const server = require('http').createServer();
const io = require('socket.io')(server);



// Mensaje de Socket
io.on('connection', client => {
    console.log('Cliente onectado');


    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
     });
});


//Path publico
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));






server.listen(process.env.PORT, (err) =>{
    if(err) throw new Error(err);
    console.log('Servidor corriendo en puerto ', process.env.PORT);
});