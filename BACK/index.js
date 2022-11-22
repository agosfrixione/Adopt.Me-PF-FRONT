const express = require ('express');
require('../BACK/src/db');
const app = express ();
const AnimalModel = require ('../BACK/src/modelos/animales.js');


// Descomentar el codigo de abajo en caso de ver como llega la informacion desde la base de datos, hasta obtener una ruta
// AnimalModel.find(function (err,animales){console.log(animales)});


app.set ('port', process.env.PORT || 3001);
app.use(express.json());



app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});




