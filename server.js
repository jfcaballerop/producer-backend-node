
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import { movies } from './src/model/movies.js';

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

app.get('/api/movies', (req, res) => {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        datos: movies
    };
    res.status(200).send(respuesta);
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});