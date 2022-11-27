import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import stl from "../FormSignIn/FormSignIn.module.css";
import signinUser from "../../Actions/signinUser";

export default function FormSignIn() {
  const params = useParams();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const navigate = useNavigate(); // Metodo de router que me redirige a la ruta que yo le diga
  const users = useSelector((state) => state.users); // (o el estado global que usemos para guardar todos los usuarios)

  const [input, setInput] = useState({
    usuario: "",
    contraseña: "",
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
    console.log("entro al handlesubmit");
    e.preventDefault();

    // Checkeamos que el usuario exista
    let usuarioExistente = users.filter((i) => i.usuario === input.usuario);

    // Si existe despachamos la accion que va a validar los datos
    if (usuarioExistente.length) {
      return alert("Usuario no existe");
    } else {
      console.log(
        "OK. Formulario recibido. Despacho la action con estos datos:"
      );
      console.log(input);
      dispatch(signinUser(input));
      setInput({
        usuario: "",
        contraseña: "",
      });
      console.log("Input reseteado. Vamos a redirigir al /homepage");
      navigate("/homepage");
      alert("Ingreso exitoso. Bienvenido");
    }
  }

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
        <form onSubmit={(e) => handleSubmit(e)}>
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
