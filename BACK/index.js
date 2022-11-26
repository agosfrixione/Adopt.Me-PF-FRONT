const express = require ('express');
const cors = require('cors')
const animalRutas = require('../BACK/src/rutas/animales');
const usuarioRutas = require('../BACK/src/rutas/usuarios');
const pagosPayPalRutas = require('../BACK/src/rutas/pagosPayPal');
const pagosMercadoPago = require('../BACK/src/rutas/mercadoPago');
const morgan = require('morgan');
require('dotenv').config();
const passport = require("passport");
const session = require("express-session");

//inicializacion
const app = express ();
require('../BACK/src/db');
require("./src/passport/local-auth")
app.use(cors());
app.set ('port', process.env.PORT || 3001 );
app.use(express.json());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: "mysecretsession",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/animales', animalRutas);
app.use('/usuarios', usuarioRutas);
app.use('/pagos', pagosPayPalRutas);
app.use('/pagosMp', pagosMercadoPago);


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});




