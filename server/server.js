require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');

// parse aplication/x-www.form-uelencoded
app.use(bodyparser.urlencoded({ extended: false }));

//parse formato a application/json
app.use(bodyparser.json());

// Archivo agrupador de rutas
app.use(require('./routes/index'));


//Conexion a base de datos
mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err, resp) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto', process.env.PORT);
});