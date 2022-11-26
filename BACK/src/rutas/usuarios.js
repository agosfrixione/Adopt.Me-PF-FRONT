const express = require("express");
require("../db");
const UsuarioModel = require("../modelos/usuarios");
const router = express.Router();
const infoUser = require("../controllers/userInfo");
const flash = require("connect-flash");
const passport = require("passport");

router.post("/", postUsuario);

router.get("/", getUsuarios);

router.get("/:id", getDetalleUsuario);

router.put("/:id", putUsuario);

router.delete("/:id", deleteUsuario);

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/homepage",
    failureRedirect: "/homepage",
    passReqToCallback: true,
  })
);

module.exports = router;
