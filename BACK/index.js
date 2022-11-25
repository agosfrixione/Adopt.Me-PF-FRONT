const express = require ('express');
require('../BACK/src/db');
const app = express ();
const cors = require('cors')
const animalRutas = require('../BACK/src/rutas/animales');
const usuarioRutas = require('../BACK/src/rutas/usuarios');
const pagosPayPalRutas = require('../BACK/src/rutas/pagosPayPal');
const pagosMercadoPago = require('../BACK/src/rutas/mercadoPago');
const morgan = require('morgan')
require('dotenv').config();


app.use(cors());
app.set ('port', process.env.PORT || 3001);
app.use(express.json());

//middlewares
app.use(morgan('dev'));


app.use('/animales', animalRutas);
app.use('/usuarios', usuarioRutas);
app.use('/pagos', pagosPayPalRutas);
app.use('/pagosMp', pagosMercadoPago);


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});




