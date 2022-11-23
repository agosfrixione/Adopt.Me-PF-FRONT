import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import stl from "../FormRegistro/FormRegistro.module.css";

export default function FormRegistro () {

    const params = useParams();
    // const dispatch = useDispatch();
    const navigate = useNavigate(); // Metodo de router que me redirige a la ruta que yo le diga

    const [input, setInput] = useState({
        usuario:"",
        contraseña:"",
        repitaContraseña:"",
        nombre:"",
        telefono:"",
        mail:"",
        nacimiento:"",
        localidad:""
    });

    const [errors, setErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(true);

    function validation(input) {
        let errors = {}

        if(!input.usuario) {
          errors.usuario = "Tenes que ingresar un nombre de usuario";
        } else if (typeof input.name !== "string") {
          errors.name = "El nombre de usuario no es válido";
        } else if (input.name.length > 20) {
          errors.name = "El nombre de usuario es muy largo (máx 20 caracteres)";
        }

        if(!input.contraseña) {
          errors.contraseña = "Tenes que ingresar una contraseña";
        } else if (/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(input.contraseña)) {
          errors.contraseña = "La contraseña debe tener mínimo 8 caracteres, al menos una letra y un número"
        }

        if(!input.repitaContraseña) {
          errors.repitaContraseña = "Tenes que repetir la contraseña";
        } else if (input.repitaContraseña !== input.contraseña) {
          errors.repitaContraseña = "La contraseña no coincide"
        }

        if(!input.nombre){
          errors.nombre = "Tenes que ingresar un nombre";
        }

        if(!input.telefono) {
            errors.telefono = "Tenes que ingresar un telefono";
          } else if (input.telefono > 15) {
            errors.telefono = "El teléfono no es válido"
          }

        if(!input.mail) {
            errors.mail = "Tenes que ingresar un e-mail";
          }

        if(!input.nacimiento) {
            errors.nacimiento = "Tenes que ingresar una fecha de nacimiento";
          } else if (input.nacimiento.length > 10 || !/^[0-9-]+$/.test(input.nacimiento)) {
            errors.nacimiento = "Tenes  que ingresar una fecha válida (dd-mm-yyyy)"
          }

        if ((Object.keys(errors).length) === 0){
            setisSubmit(false)
          };
        
        return errors;
    }


    function handleSubmit(e) {
        e.preventDefault();
        if(!input.usuario || !input.contraseña || !input.repitaContraseña || !input.nombre || !input.telefono || !input.mail || !input.nacimiento || !input.localidad){
          alert("Falta información")
      }else {
        // dispatch(createUser(input))
        setInput({
            usuario:"",
            contraseña:"",
            repitaContraseña:"",
            nombre:"",
            telefono:"",
            mail:"",
            nacimiento:"",
            localidad:""
        }); // Reinicio el formulario

        navigate('/confirmation')
      }
}


    function handleChange(e) {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); // e.target.name seria el input que se va a estar modificando
        setErrors(validation({                                              // voy a tomar el valor del input que se modifico y voy a ir llenando el estado
          ...input,
          [e.target.name]: [e.target.value]
        })                                  
        )
      }



    return (

        <div className={stl.registro} key={params.id}>

            <NavBar/>

            <div key={params.id}>
                      
              <div key={params.id}>
                  <label>NOMBRE DE USUARIO </label>
                  <input
                  type="text"
                  required
                  name="usuario"
                  value={input.usuario}
                  onChange={(e) => handleChange(e)}/>
                  </div>

                  <div key={params.id}>
                  <label>CONTRASEÑA </label>
                  <input
                  type="text"
                  name="contraseña"
                  value={input.contraseña}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>REPITA CONTRASEÑA </label>
                  <input
                  type="text"
                  name="repitaContraseña"
                  value={input.repitaContraseña}
                  onChange={(e) => handleChange(e)}/>
                  </div>

              <div key={params.id}>
                  <label>NOMBRE Y APELLIDO / REFUGIO </label>
                  <input
                  type="text"
                  required
                  name="nombre"
                  value={input.nombre}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>TELÉFONO DE CONTACTO </label>
                  <input
                  type="text"
                  required
                  name="telefono"
                  value={input.telefono}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>E-MAIL </label>
                  <input
                  type="email"
                  required
                  name="mail"
                  value={input.mail}
                  pattern=".+@globex\.com"
                  size="30"
                  onChange={(e) => handleChange(e)}/>
                  </div>
                  
              <div key={params.id}>
                <label>FECHA DE NACIMIENTO </label>
                <input
                required
                type='date'
                name="nacimiento"
                value={input.nacimiento}
                placeholder='dd-mm-yyyy'
                onChange={(e) => handleChange(e)}
                /> <span className='barra'></span>
                {errors.released && (
                <p className='danger'>{errors.released}</p>
                )}
                </div>

              <div key={params.id}>
                  <label>LOCALIDAD </label>
                  <input
                  type="text"
                  required
                  name="localidad"
                  value={input.localidad}
                  onChange={(e) => handleChange(e)}/>
                  </div>
                  
                  <div key={params.id}>

            </div>

            <Link to='/givepet'>
                <button className={stl.buttons}>CANCELAR</button>
            </Link>
            
            <Footer />
            
        </div>
    );
};
