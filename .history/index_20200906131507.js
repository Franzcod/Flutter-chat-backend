const express = require('express');
const path = require('path');
require('dotenv').config();

// Node Server

const server = require('http').createServer();

const app = express();


//Path publico

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));


app.listen(process.env.PORT, (err) =>{
    if(err) throw new Error(err);
    console.log('Servidor corriendo en puerto ', process.env.PORT);
});