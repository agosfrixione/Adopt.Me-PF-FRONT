const express = require ('express');
require('../BACK/src/db.js');
const app = express ();

app.set ('port', process.env.PORT || 3001);
app.use(express.json());



app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});




