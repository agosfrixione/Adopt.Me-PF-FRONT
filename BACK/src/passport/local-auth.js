const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../modelos/usuarios");

// UNA VEZ Q SE AUTENTICA, DE ESOS DATOS SOLO NOS QUEDAMOS CON EL ID(lo que nos intercambiamos entre las pag para verificar q sea de un usuario ya autenticado)
passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

// CUANDO CAMBIE DE PAGINA, CON ESE ID BUSCAMOS SI HAY UN USUARIO CON ESE ID Y VOLVEMOS A TENER LOS DATOS DEL USUARIO EN DICHA PAGINA
passport.deserializeUser(async (id, done) => {
  const usuario = await User.findById(id);
  done(null, usuario);
});

passport.use(
  "local-signup",
  new localStrategy(
    {
      usernameField: "usuario",
      passwordField: "contraseña",
      passReqToCallback: true,
    },
    async (req, usuario, contraseña, done) => {
      console.log("entre al passport local-signup");
      const nuevoUsuario = new User();
      nuevoUsuario.usuario = usuario;
      nuevoUsuario.contraseña = contraseña;
      nuevoUsuario.nombre = req.body.nombre;
      nuevoUsuario.telefono = req.body.telefono;
      nuevoUsuario.mail = req.body.mail;
      nuevoUsuario.nacimiento = req.body.nacimiento;
      nuevoUsuario.localidad = req.body.localidad;
      nuevoUsuario.fotoPerfil = req.body.fotoPerfil;
      await nuevoUsuario.save();
      console.log("usuario guardado");
      done(null, nuevoUsuario);
    }
  )
);
