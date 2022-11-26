const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const User = require("../modelos/usuarios")

// UNA VEZ Q SE AUTENTICA, DE ESOS DATOS SOLO NOS QUEDAMOS CON EL ID(lo que nos intercambiamos entre las pag para verificar q sea de un usuario ya autenticado)
passport.serializeUser((usuario, Done) => {
    Done(null, usuario.id);
});

// CUANDO CAMBIE DE PAGINA, CON ESE ID BUSCAMOS SI HAY UN USUARIO CON ESE ID Y VOLVEMOS A TENER LOS DATOS DEL USUARIO EN DICHA PAGINA
passport.deserializeUser( async (id, Done) => {
    const usuario = await User.findById(id);
    Done(null, usuario);
});

passport.use("local-signup", new localStrategy({
    campoUsuario: "usuario",
    campoContraseña: "contraseña",
    campoNombre: "nombre",
    campoTelefono: "telefono",
    campoMail: "mail",
    campoNacimiento: "nacimiento",
    campoLocalidad: "localidad",
    campoFotoPerfil: "fotoPerfil",
    passReqToCallback: true
}, async (req, usuario, contraseña, nombre, telefono, mail, nacimiento, localidad, fotoPerfil, Done) => { 
    console.log("entre al passport local-signup")
    const nuevoUsuario = new User();
    nuevoUsuario.usuario = usuario;
    nuevoUsuario.contraseña = contraseña; 
    nuevoUsuario.nombre = nombre; 
    nuevoUsuario.telefono = telefono; 
    nuevoUsuario.mail = mail; 
    nuevoUsuario.nacimiento = nacimiento; 
    nuevoUsuario.localidad = localidad; 
    nuevoUsuario.fotoPerfil = fotoPerfil;
    await nuevoUsuario.save();
    Done(null, nuevoUsuario);
}))