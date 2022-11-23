import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import stl from "../FormRegistro/FormRegistro.module.css";

export default function FormRegistro () {

    const params = useParams();
    const navigate = useNavigate(); // Metodo de router que me redirige a la ruta que yo le diga

    const [input, setInput] = useState({
        institucion:[],
        responsable:"",
        telefono:"",
        repiteTelefono:"",
        correo:"",
        repiteCorreo:"",
        facebookURL:"",
        twitterURL:"",
        instagramURL:"",
        logo:[]
    });

    const [institucion, setinstitucion] = useState(false);
    const [adoptante, setadoptante] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        if(!input.institucion.length || !input.responsable || !input.telefono || !input.repiteTelefono || !input.correo || !input.repiteCorreo){
          alert("Missing info")
      }else {
        // dispatch(createUser(input))
        setInput({
            institucion:[],
            responsable:"",
            telefono:"",
            repiteTelefono:"",
            correo:"",
            repiteCorreo:"",
            facebookURL:"",
            twitterURL:"",
            instagramURL:"",
            logo:[]
        }); // Reinicio el formulario

        navigate('/confirmation')
      }
}


    function handleChange(e) {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); // e.target.name seria el input que se va a estar modificando
        // setErrors(validation({                                              // voy a tomar el valor del input que se modifico y voy a ir llenando el estado
        //   ...input,
        //   [e.target.name]: [e.target.value]
        // })                                  
        // )
      }
    function handleInstitucion(e) {
        if(!input.institucion.includes(e.target.value)) {
          setInput({
            ...input,
            institucion: [...input.institucion, e.target.value]
          })
        }
      }

    function handleFormInstitucion(e) {
        e.preventDefault();
        institucion ? setinstitucion(false) : setinstitucion(true)
      }

    function handleFormAdoptante(e) {
        e.preventDefault();
        adoptante === false ? setadoptante(true) : setadoptante(false)
      }
      



    return (

        <div className={stl.registro} key={params.id}>

            <NavBar/>

            <div key={params.id}>
            <h1 className={stl.registroTitulo}>REGISTRO</h1>
            <h2 className={stl.nota}>NOTA: LOS CAMPOS CON * SON OBLIGATORIOS</h2>

            <div>
            <button className={stl.buttons} onClick={(e) => handleFormAdoptante(e)}>QUIERO ADOPTAR</button>
            {adoptante && institucion === false && (
              <form className={stl.form} onSubmit={e => handleSubmit(e)}>
                      
              <div key={params.id}>
                  <label>NOMBRE Y APELLIDO* </label>
                  <input
                  type="text"
                  required
                  name="responsable"
                  value={input.responsable}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>TELÉFONO DE CONTACTO* </label>
                  <input
                  type="text"
                  required
                  name="telefono"
                  value={input.telefono}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>REPITE TELÉFONO* </label>
                  <input
                  type="text"
                  required
                  name="repiteTelefono"
                  value={input.repiteTelefono}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>CORREO* </label>
                  <input
                  type="text"
                  required
                  name="correo"
                  value={input.correo}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>REPITE CORREO* </label>
                  <input
                  type="text"
                  required
                  name="repiteCorreo"
                  value={input.repiteCorreo}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>Facebook URL </label>
                  <input
                  type="text"
                  name="facebookURL"
                  value={input.facebookURL}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
              <div key={params.id}>
                  <label>Twitter URL </label>
                  <input
                  type="text"
                  name="twitterURL"
                  value={input.twitterURL}
                  onChange={(e) => handleChange(e)}/>
                  </div>
                  
              <div key={params.id}>
                  <label>Instagram URL </label>
                  <input
                  type="text"
                  name="instagramURL"
                  value={input.instagramURL}
                  onChange={(e) => handleChange(e)}/>
                  </div>
  
                  <div key={params.id}>
                  <label>FOTO DE PERFIL </label>
                  <input
                  type="file"
                  name="logo"
                  value={input.logo}
                  onChange={(e) => handleChange(e)} />
                  </div>
                  
                  <div key={params.id}>
                      <button className={stl.buttons} type="submit">ACEPTAR</button>
                      </div>
  
          </form>
            )}
            </div>
            

            <div>
            <button className={stl.buttons} onClick={(e) => handleFormInstitucion(e)}>QUIERO DAR EN ADOPCION</button>
            {institucion && adoptante === false && (
            <form className={stl.form} onSubmit={e => handleSubmit(e)}>

            <div className={stl.selects} key={params.id}>
                <label>INSTITUCION* </label>
                <select defaultValue="default" onChange={(e) => handleInstitucion(e)}>
                    <option value="default" disabled hidden>ALBERGUE - FUNDACION - PROTECTOR INDEPENDIENTE</option>
                    <option value="albergue">ALBERGUE</option>
                    <option value="fundacion" selected>FUNDACIÓN</option>
                    <option value="independiente">PROTECTOR INDEPENDIENTE</option>
                    </select>
                    </div>
                    
            <div key={params.id}>
                <label>RESPONSABLE* </label>
                <input
                type="text"
                required
                name="responsable"
                value={input.responsable}
                onChange={(e) => handleChange(e)}/>
                </div>

            <div key={params.id}>
                <label>TELÉFONO DE CONTACTO* </label>
                <input
                type="text"
                required
                name="telefono"
                value={input.telefono}
                onChange={(e) => handleChange(e)}/>
                </div>

            <div key={params.id}>
                <label>REPITE TELÉFONO* </label>
                <input
                type="text"
                required
                name="repiteTelefono"
                value={input.repiteTelefono}
                onChange={(e) => handleChange(e)}/>
                </div>

            <div key={params.id}>
                <label>CORREO* </label>
                <input
                type="text"
                required
                name="correo"
                value={input.correo}
                onChange={(e) => handleChange(e)}/>
                </div>

            <div key={params.id}>
                <label>REPITE CORREO* </label>
                <input
                type="text"
                required
                name="repiteCorreo"
                value={input.repiteCorreo}
                onChange={(e) => handleChange(e)}/>
                </div>

            <div key={params.id}>
                <label>Facebook URL </label>
                <input
                type="text"
                name="facebookURL"
                value={input.facebookURL}
                onChange={(e) => handleChange(e)}/>
                </div>

            <div key={params.id}>
                <label>Twitter URL </label>
                <input
                type="text"
                name="twitterURL"
                value={input.twitterURL}
                onChange={(e) => handleChange(e)}/>
                </div>
                
            <div key={params.id}>
                <label>Instagram URL </label>
                <input
                type="text"
                name="instagramURL"
                value={input.instagramURL}
                onChange={(e) => handleChange(e)}/>
                </div>

                <div key={params.id}>
                <label>LOGO </label>
                <input
                type="file"
                name="logo"
                value={input.logo}
                onChange={(e) => handleChange(e)} />
                </div>
                
                <div key={params.id}>
                    <button className={stl.buttons} type="submit">ACEPTAR</button>
                    </div>

        </form>
            )}
            </div>

            </div>

            <Link to='/givepet'>
                <button className={stl.buttons}>CANCELAR</button>
            </Link>
            
            <Footer />

        </div>
    );
};
