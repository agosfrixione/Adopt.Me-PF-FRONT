const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

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
    type: String,/*
    required: true,*/
  },
  nacimiento: {
    type: Date,/*
    required: true,*/
  },
  publicaciones: {
    type: String,
  },
});

// METODO PARA HASHEAR CONTRASEÑA
UsuarioSchema.methods.encryptPassword = async (contraseña) => {
  const salt = await bcrypt.genSalt(10); // veces q aplica el algoritmo para obtener el hash
  const hash = bcrypt.hash(contraseña, salt); // combinamos hash y contraseña para encriptarla
  return hash
}

// METODO PARA TOMAR LA CONTRASEÑA Y HASHEARLA PARA COMPARARLA CON LA HASHEADA EN LA DB
UsuarioSchema.methods.compararContraseña = async function(contraseña){
  return await bcrypt.compare(contraseña, this.contraseña)
}



const UsuarioModel = mongoose.model('usuarios', UsuarioSchema)
module.exports = UsuarioModel;
