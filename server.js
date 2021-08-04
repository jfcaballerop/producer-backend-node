
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { movies } = require('./src/model/movies.js');
// const setDelay = require('./src/utils/index.js');
const axios = require("axios");

require('console-stamp')(console);



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
    // await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec

    // setDelay(30000); //30 sec
    console.log('**** Despues de delay ****', req.params.id);
    res.status(200).send(respuesta);
});
app.get('/redis/getJson/:sessionid', async (req, res) => {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        datos: movies
    };
    console.log('**** Antes de delay ****', req.params.sessionid);
    var sessionId = req.params.sessionid;
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec
    let json = await axios.get('http://suing.logesta.com:8011/redis/getJson/' + sessionId);
    console.log(JSON.stringify(json.data));
    console.log('**** Despues de delay ****', req.params.sessionid);
    res.status(200).send(json.data);
    // res.status(500).send('Internal ERROR');
});
app.get('/redisMock/getJson/:sessionid', async (req, res) => {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        datos: movies
    };
    console.log('**** Antes de delay ****', req.params.sessionid);
    var sessionId = req.params.sessionid;
    // await new Promise(resolve => setTimeout(resolve, 5000)); // 5 sec
    let json = {
        user: "jfcaballero",
        msg: "user ok"
    };
    console.log(json);
    console.log('**** Despues de delay ****', req.params.sessionid);
    // res.status(200).send(json.data);
    // res.status(200).send(json);
    res.status(500).send('Internal ERROR');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});