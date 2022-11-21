require('dotenv').config();
const mongoose = require ('mongoose');
const {PASSWORD} = process.env;

const uri = `mongodb+srv://Noesneda:${PASSWORD}@cluster0.3kiucr5.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri, console.log('DB is conected'))
