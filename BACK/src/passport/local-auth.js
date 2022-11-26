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

      // Verificamos que el mail no este en uso
      const userMail = await User.findOne({ mail: req.body.mail });
      if (userMail) {
        return done(
          null,
          false/*,
          req.flash("signupMessage", "El mail ya esta en uso")*/
        );
      }

      // Verificamos que el userName no este en uso
      const userName = await User.findOne({ usuario: usuario });
      if (userName) {
        return done(
          null,
          false /*,
          req.flash("signupMessage", "El mail ya esta en uso")*/
        );
      }

      // Si no exisate un usuario con ese mail y ese userName, lo creamos
      const nuevoUsuario = new User();
      nuevoUsuario.usuario = usuario;
      nuevoUsuario.nombre = req.body.nombre;
      nuevoUsuario.telefono = req.body.telefono;
      nuevoUsuario.mail = req.body.mail;
      nuevoUsuario.nacimiento = req.body.nacimiento;
      nuevoUsuario.localidad = req.body.localidad;
      nuevoUsuario.fotoPerfil = req.body.fotoPerfil;
      nuevoUsuario.contraseña = await nuevoUsuario.encryptPassword(contraseña); // encriptamos la contraseña antes de guardarla
      await nuevoUsuario.save();
      console.log("Usuario guardado");
      done(
        null,
        nuevoUsuario/*,
        req.flash("signupMessage", "Usuario creado correctamente")*/
      );
    }
  )
);

passport.use(
  "local-signin",
  new localStrategy(
    {
      usernameField: "usuario",
      passwordField: "contraseña",
      passReqToCallback: true,
    },
    async (req, usuario, contraseña, done) => {
      const user = await User.findOne({ mail: req.body.mail });
      if (!user) {
        return done(
          null,
          false /*,
          req.flash("signinMessage", "Usuario no encontrado")*/
        );
      }
      if (!user.compararContraseña(contraseña)) {
        // El compararContraseña revuelve un booleano, true si coincide, false si no.
        return done(
          null,
          false/*,
          req.flash("signinMessage", "Contraseña incorrecta")*/
        );
      }
      done(null, user);
    }
  )
);
