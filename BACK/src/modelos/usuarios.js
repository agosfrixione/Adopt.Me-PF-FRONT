const mongoose = require("mongoose");
const { schema } = mongoose;

const UsuarioSchema = newSchema({
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

module.export = {
  UsuarioSchema,
};
