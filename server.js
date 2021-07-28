
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {movies} = require('./src/model/movies.js');
// const setDelay = require('./src/utils/index.js');

require( 'console-stamp' )( console );



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuario = {
    nombre: '',
    apellido: ''
};
let respuesta = {
    error: false,
    codigo: 200,
    mensaje: '',
    datos: {}
};

app.get('/api/movies/:id', async (req, res) => {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        datos: movies
    };
    console.log('**** Antes de delay ****', req.params.id);
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec

    // setDelay(30000); //30 sec
    console.log('**** Despues de delay ****', req.params.id);
    res.status(200).send(respuesta);
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});