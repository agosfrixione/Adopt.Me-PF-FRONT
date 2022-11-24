const express = require ('express');
require('../BACK/src/db');
const app = express ();
const cors = require('cors')
const animalRutas = require('../BACK/src/rutas/animales');
const usuarioRutas = require('../BACK/src/rutas/usuarios');
const pagosPayPalRutas = require('../BACK/src/rutas/pagosPayPal');
const morgan = require('morgan')


app.use(cors());
app.set ('port', process.env.PORT || 3001);
app.use(express.json());
app.use(morgan('dev'));


app.use('/animales', animalRutas);
app.use('/usuarios', usuarioRutas);
app.use('/pagos', pagosPayPalRutas);


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});




