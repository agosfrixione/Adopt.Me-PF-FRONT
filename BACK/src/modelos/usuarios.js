const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  localidad: {
    type: String,
    required: true,
  },
  nacimiento: {
    type: Date,
    required: true,
  },
  publicaciones: {
    type: String,
  },
});

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema)

module.exports = UsuarioModel;
