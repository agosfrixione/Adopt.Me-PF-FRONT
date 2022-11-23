const express = require("express");
require("../db");
const UsuarioModel = require("../modelos/usuarios");
const router = express.Router();
const infoUser = require("../controllers/userInfo");
const flash = require('connect-flash');

router.post("/", postUsuario);

router.get("/", getUsuarios);

router.get("/:id", getDetalleUsuario);

router.put("/:id", putUsuario);

router.delete("/:id", deleteUsuario);

router.post("/sigup", async (req, res) => {
    console.log(req.body)
    const { nombre, mail, contraseña, validar_contraseña } = req.body;
    const errors = [];

    // Checkeamos que no envien el formulario con un campo vacio
    if (nombre.length <= 0 || mail.length <= 0 || contraseña.length <= 0 | validar_contraseña.length <= 0) { 
        errors.push({text: "Por favor completa todos los campos"})
    }
   
    // Checkeamos que las contraseñas coincidan y q sea mayor a 4 digitos
    if (contraseña != validar_contraseña) {
        errors.push({ text: "Las contraseñas no coinciden" })
    }
    if (contraseña.length < 4) {
        errors.push({ text: "La contraseña debe contener por lo menos 4 caracteres" })
    }

    //renderizar el formulario con los errores , sino confirma la creacion.
    if (errors.length > 0) {
        res.render("/sigup", { errors, nombre, mail, contraseña, validar_contraseña })
        //Cuando haya un error y renderice con los datos que ya escribio el usuario y no se vuelva a renderizar el formulario vacio, hay q agregarle el value a los imputs
    } else { 
        const mailUser = await UsuarioModel.findOne({ mail: mail })
        if (mailUser) { /*
            req.flash("error_msg", "El mail ya esta en uso") */// HAY QUE ENVIAR ERROR ANTES DE REDIRIGIR
            res.redirect("/usuarios/sigup")
        }

        const nuevoUsuario = new UsuarioModel({ nombre, mail, contraseña }) // llenamos los datos del usuario
        nuevoUsuario.contraseña = await nuevoUsuario.encryptPassword(contraseña) // cambiamos la contraseña normal por la hasheada
        await nuevoUsuario.save() // lo guardamos
        /*req.flash("succes_msg","Usuario registrado correctamente") */// HAY QUE INDICAR QUE SE CREO EXITOSAMENTE ANTES DE REDIRIGIR
        res.redirect("/homepage") // deberiamos redirigirlo al /signIn
    }
    
})

module.exports = router;
