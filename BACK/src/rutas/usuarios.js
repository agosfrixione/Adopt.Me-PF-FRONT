const express = require("express");
require("../db");
const UsuarioModel = require("../modelos/usuarios");
const router = express.Router();
const infoUser = require("../controllers/userInfo");
const flash = require("connect-flash");
const passport = require("passport");
const { setRandomFallback } = require("bcryptjs");

router.post("/", postUsuario);

router.get("/", getUsuarios);

router.get("/:id", getDetalleUsuario);

router.put("/:id", putUsuario);

router.delete("/:id", deleteUsuario);


router.get("/signup", (req, res) => {
  res.render(/*view del formulario*/)
})

router.post("/signup", passport.authenticate("local-signup" /*, {
    successRedirect: "/usuarios/signin",
    failureRedirect: "/usuarios/signup",
    passReqToCallback: true,
}*/));
  
module.exports = router;
