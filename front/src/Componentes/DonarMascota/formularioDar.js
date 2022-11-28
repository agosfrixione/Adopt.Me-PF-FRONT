import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import createanimal from "../../Actions/createanimal";
import "./formularioDar.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import stl from "../DonarMascota/formularioDar.module.css"
import FloatingUI from "../Floating UI/FloatingUI";

////////////////////////////////////////////////////// VALIDACION ///////////////////////////////////////////////////////////////

function validation(input){
    let errors = {};
    const whitespace = /\S+/;
    const validString = /^[a-z]+$/i;
    const validNumber = /^\d+$/;
 
  
   if (
     !whitespace.test(input.nombre) ||                
     !validString.test(input.nombre) ||               
     input.nombre.length < 3                          
    ) errors.nombre = "Nombre Requerido. Debe contener mas de dos caracteres y no incluir ningun simbolo o caracter especial";
                                                
                                        
   if ( 
       !validNumber.test(input.edad) ||      
       parseInt(input.edad) < 1      ||      
       parseInt(input.edad) > 20            
     ) errors.edad = "Edad is required. Must be higher than 1 and less than 20.";
                                   
                                    
     if (!input.descripcion) {
       errors.descripcion = "Tienes que agregar una descripcion informativa de la mascota";
     } else if (!/^[a-z\s]+$/i.test(input.descrpcion)) {
       errors.descripcion = "La descripcion no es válida";
     }
                                
     return errors
 }

 //////////////////////////////////////////////////// PA ADOPTAR AMEGO ////////////////////////////////////////////////////////////
 
 export default function DarEnAdopcion() {
       

 const navigate = useNavigate();
 const dispatch = useDispatch();

 const [input, setInput] = useState({
        perro: false,
        gato: false,
        nombre: "",
        raza: "",
        edad: "",
        estado: "",
        tamaño: "",
        peso: "",
        localidad: "",
        descripcion: "",
        castrado: "",
        vacunado: ""
      });

  const [imagenes, setImagenes] = useState([]);
      
  const [errors, setErrors] = useState({});

    function handleSubmit(e){
         e.preventDefault();

    dispatch(createanimal(input, imagenes));

    alert("Mascota Agregada");

    setInput({
        perro: false,
        gato: false,
        nombre: "",
        raza: "",
        edad: "",
        estado: "",
        tamaño: "",
        peso: "",
        localidad: "",
        descripcion: "",
        castrado: "",
        vacunado: ""
    })

    setImagenes([])

    navigate("/homepage")
 }


 function handleChange(e) {

    setInput({
       ...input,
       [e.target.name]: e.target.value
    })

    setErrors(
        validation({
            ...input,
            status: e.target.value,
        })
    )
  }

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  
 /////////////////////// HANDLE DE GATO
 
  function handleCheck() {  
    setIsChecked(!isChecked)
    } 

    function handleGato(e) {
      if(e.target.checked === !isChecked) { 
        setInput({
          ...input,
          [e.target.name]: e.target.checked
       })
  } else {
      setInput({
      ...input,
      [e.target.name]: false
     })
  }}

  ///////////////////////////// HANDLE DE PERRO

    function handleCheck2() {     
        setIsChecked2(!isChecked2)
      }

      function handlePerro(e) {
        if(e.target.checked === !isChecked2) { 
        setInput({
         ...input,
        [e.target.name]: e.target.checked
       })
    } else {
        setInput({
        ...input,
        [e.target.value]: false
       })
    }}


  ///////////////////////////// HANDLE DE CLOUDINARY

    function handleOpenWidget(e) {
      // console.log("Entre el handleOpenWidget");
      e.preventDefault();
      var myWidget = window.cloudinary.createUploadWidget(
          {
              cloudName: "dvw0vrnxp",
              uploadPreset: "mascotas",
          },
          (error, result) => {
              if (!error && result && result.event === "success") {
              console.log('Done! Here is the image info: ', result.info);

              setImagenes((prev) => [
                ...prev, {
                  url: result.info.secure_url, 
                  id: result.info.public_id
                }])
              }
            }
          );

      myWidget.open();
      }

/////////////////////////////////////////////////////////// TE KAVIO EL RETURN  ///////////////////////////////////////////////////

  return (
    
  <div className={stl.formDarAdopcion}>
    <NavBar />
    <FloatingUI />
   
        <form className={stl.formularito} onSubmit={handleSubmit}>

         <div className={stl.error}>
      {errors.gato && ( <p class="error2">{errors.gato}</p>)} 
      {errors.perro && ( <p class="error2">{errors.perro}</p>)}
      {errors.nombre && ( <p class="error2">{errors.nombre}</p>)} 
      {errors.edad && ( <p class="error2">{errors.edad}</p>)} 
      {errors.descripcion && ( <p class="error2">{errors.descripcion}</p>)} 
      </div> 

          <div className={stl.titulo}>Registra los datos de tu Mascota</div>
          
          <div className={stl.imageContainer}>
            {imagenes.map((f) => {
              return (
              <div className={stl.imagePreview}>
                <img src= {f.url}/>
                </div>
                );
                })}
                <div className={stl.imagePreview}>
                  <img src= "https://www.sourcedogg.com/wp-content/uploads/2015/05/default-placeholder.png"/>
                  </div>
                  </div>
                  <div>
                    <button
                    id="btn-foto"
                    name="fotos"
                    onClick={(e) => handleOpenWidget(e)}>
                      AGREGAR FOTOS
                      </button>
                      </div>
       
       <div className={stl.gatoPerro}>
         <div className={stl.opciones2}>
                <label className={stl.titulos2}>Gato:</label>
                <input className={stl.inputs2} onChange={ (e) => { handleCheck(e); handleGato(e); } }
                type="checkbox" name="gato" checked={isChecked} value={input.gato}/>                       
            </div> 
            
            <div className={stl.opciones2}>
                <label className={stl.titulos2}>Perro:</label>
                <input className={stl.inputs2} onChange={ (e) => { handleCheck2(e); handlePerro(e); } }
                type="checkbox" name="perro" checked={isChecked2} value={input.perro}/>                         
            </div>
            </div>

              <div className={stl.opciones}>
                <label className={stl.titulos}>Nombre:</label>
                <input onChange={handleChange} 
                type="text" name="nombre" value={input.nombre}/>                        
            </div>
 
            <div className={stl.opciones}>
            <label className={stl.titulos}>Raza:</label>
                <input onChange={handleChange} 
                type="text" name="raza" value={input.raza}/>           
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Edad (Solo Numeros):</label>
                <input onChange={handleChange}
                type="text" name="edad" value={input.edad}/>           
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Estado de la mascota:</label>
                <input onChange={handleChange} 
                type="text" name="estado" value={input.estado}/>          
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Tamaño (Chico/Mediano/Grande):</label>
                <input onChange={handleChange} 
                type="text" name="tamaño" value={input.tamaño}/>            
            </div>
        
            <div className={stl.opciones}>
            <label className={stl.titulos}>Peso (Solo Numeros):</label>
                <input onChange={handleChange} 
                type="text" name="peso" value={input.peso}/>           
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Localidad:</label>
                <input onChange={handleChange} 
                type="text" name="localidad" value={input.localidad}/>            
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Descripcion:</label>
                <input onChange={handleChange} type="text" name="descripcion" value={input.descripcion}/>
               
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Esta Castrado? (Si/No):</label>
                <input onChange={handleChange}type="text" name="castrado" value={input.castrado}/>
            </div> 

            <div className={stl.opciones}>
            <label className={stl.titulos}>Esta Vacunado? (Si/No):</label>
                <input onChange={handleChange} type="text" name="vacunado"  value={input.vacunado}/>
            </div>    
              
             <button className={stl.boton} type="submit">Dar en Adopcion</button>

        </form>
        <Footer />
    </div>
  
  )}