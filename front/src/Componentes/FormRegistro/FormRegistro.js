import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import stl from "../FormRegistro/FormRegistro.module.css";

import createuser from "../../Actions/createuser";

export default function FormRegistro() {
  const params = useParams();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const navigate = useNavigate(); // Metodo de router que me redirige a la ruta que yo le diga
  const users = useSelector((state) => state.users); // (o el estado global que usemos para guardar todos los usuarios)

  const [input, setInput] = useState({
    usuario: "",
    contraseña: "",
    repitaContraseña: "",
    nombre: "",
    telefono: "",
    mail: "",
    nacimiento: "",
    localidad: "",
    fotoPerfil: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(true);

  function validation(input) {
    let errors = {};

    if (!input.usuario) {
      errors.usuario = "Tenes que ingresar un nombre de usuario";
    } else if (
      !/^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{1,15}$/.test(input.usuario)
    ) {
      // max 15 caracteres alfanumericos
      errors.usuario = "El nombre de usuario no es válido";
    }

    if (!input.contraseña) {
      errors.contraseña = "Tenes que ingresar una contraseña";
    } else if (/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(input.contraseña)) {
      errors.contraseña =
        "La contraseña debe tener mínimo 8 caracteres, al menos una letra y un número";
    }

    if (!input.repitaContraseña) {
      errors.repitaContraseña = "Tenes que repetir la contraseña";
    } else if (input.repitaContraseña != input.contraseña) {
      errors.repitaContraseña = "Las contraseñas no coincide";
    }

    if (!input.nombre) {
      errors.nombre = "Tenes que ingresar un nombre";
    } else if (!/^[a-z\s]+$/i.test(input.nombre)) {
      errors.nombre = "El nombre no es válido";
    }

    if (!input.telefono) {
      errors.telefono = "Tenes que ingresar un telefono";
    } else if (input.telefono.length > 15) {
      errors.telefono = "El teléfono no es válido";
    }

    if (!input.mail) {
      errors.mail = "Tenes que ingresar un e-mail";
    } else if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(input.mail)) {
      errors.mail = "El e-mail no es válido";
    }

    if (!input.nacimiento) {
      errors.nacimiento = "Tenes que ingresar una fecha de nacimiento";
    } else if (
      input.nacimiento.length > 10 ||
      !/^[0-9-]+$/.test(input.nacimiento)
    ) {
      errors.nacimiento = "Tenes  que ingresar una fecha válida (dd-mm-yyyy)";
    }

    if (Object.keys(errors).length === 0) {
      setisSubmit(false);
    }

    return errors;
  }

  function handleSubmit(e) {
    console.log("Formulario recibido estos son los input:" + input);

    e.preventDefault();
    let noRepeatUser = users.filter((u) => u.usuario === input.usuario);
    let noRepeatMail = users.filter((u) => u.mail === input.mail);

    console.log(input);
    console.log("Voy a despachar la action con esos datos");
    dispatch(createuser(input));
    setInput({
      usuario: "",
      contraseña: "",
      repitaContraseña: "",
      nombre: "",
      telefono: "",
      mail: "",
      nacimiento: "",
      localidad: "",
      fotoPerfil: "",
    });

    /*
    if (noRepeatUser.length) {
      errors.usuario = `El nombre de usuario ${input.usuario} no está disponible`;
    } else if (noRepeatMail) {
      errors.mail = "Ya existe una cuenta vinculada a ese mail";
    } else {
      if (
        !input.usuario ||
        !input.contraseña ||
        !input.repitaContraseña ||
        !input.nombre ||
        !input.telefono ||
        !input.mail ||
        !input.nacimiento ||
        !input.localidad
      ) {
        console.log("falta info");
        alert("Falta información");
      } else {
        console.log("entro al else del handleSubmit");
        dispatch(createuser(input));
        setInput({

            usuario:"",
            contraseña:"",
            repitaContraseña:"",
            nombre:"",
            telefono:"",
            mail:"",
            nacimiento:"",
            localidad:"",
            fotoPerfil:""

        }); // Reinicio el formulario
      }
      */
  }

  /*
    navigate("/confirmation");*/

  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); // e.target.name seria el input que se va a estar modificando
    setErrors(
      validation({
        // voy a tomar el valor del input que se modifico y voy a ir llenando el estado
        ...input,
        [e.target.name]: [e.target.value],
      })
    );
    /*
      navigate('/confirmation')*/
  }

  function handleOpenWidget(e) {
    const imagen = document.querySelector("#user-photo");
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dvw0vrnxp",
        uploadPreset: "usuarios",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // console.log('Done! Here is the image info: ', result.info);
          imagen.src = result.info.secure_url;
          setInput((prev) => ({
            ...prev,
            [e.target.name]: result.info.secure_url,
          }));
        }
      }
    );
    myWidget.open();
  }

  return (
    <div className={stl.registro} key={params.id}>
      <NavBar />

      <div className={stl.form} key={params.id}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action="/usuarios/signup"
          method="POST"
        >
          <div key={params.id}>
            <label>NOMBRE DE USUARIO </label>
            <input
              type="text"
              required
              name="usuario"
              value={input.usuario}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.usuario && <p>{errors.usuario}</p>}
          </div>

          <div key={params.id}>
            <label>CONTRASEÑA </label>
            <input
              type="password"
              name="contraseña"
              value={input.contraseña}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.contraseña && <p>{errors.contraseña}</p>}
          </div>

          <div key={params.id}>
            <label>REPITA CONTRASEÑA </label>
            <input
              type="password"
              name="repitaContraseña"
              value={input.repitaContraseña}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.repitaContraseña && <p>{errors.repitaContraseña}</p>}
          </div>

          <div key={params.id}>
            <label>NOMBRE Y APELLIDO / REFUGIO </label>
            <input
              type="text"
              required
              name="nombre"
              value={input.nombre}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.nombre && <p>{errors.nombre}</p>}
          </div>

          <div key={params.id}>
            <label>TELÉFONO DE CONTACTO </label>
            <input
              type="text"
              required
              name="telefono"
              value={input.telefono}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.telefono && <p>{errors.telefono}</p>}
          </div>

          <div key={params.id}>
            <label>E-MAIL </label>
            <input
              type="email"
              required
              name="mail"
              value={input.mail}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.mail && <p>{errors.mail}</p>}
          </div>

          <div key={params.id}>
            <label>FECHA DE NACIMIENTO </label>
            <input
              required
              type="date"
              name="nacimiento"
              value={input.nacimiento}
              placeholder="dd-mm-yyyy"
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.nacimiento && <p>{errors.nacimiento}</p>}
          </div>

          <div key={params.id}>
            <label>LOCALIDAD </label>
            <input
              type="text"
              required
              name="localidad"
              value={input.localidad}
              onChange={(e) => handleChange(e)}
            />{" "}
            <span></span>
            {errors.localidad && <p>{errors.localidad}</p>}
          </div>

          <div key={params.id}>
            <img
              src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              id="user-photo"
              alt="profile picture"
              height="150"
              width="150"
            />

            <button
              id="btn-foto"
              name="fotoPerfil"
              onClick={(e) => handleOpenWidget(e)}
            >
              SELECCIONE FOTO DE PERFIL
            </button>
            <span></span>
            {errors.fotoPerfil && <p>{errors.fotoPerfil}</p>}
          </div>

          <button className={stl.buttons} type="submit">
            ACEPTAR
          </button>
        </form>
      </div>

      <Link to="/givepet">
        <button className={stl.buttons}>CANCELAR</button>
      </Link>

      <Footer />
    </div>
  );
}
