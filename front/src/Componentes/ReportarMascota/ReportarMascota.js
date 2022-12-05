import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import createAnimalPerdido from '../../Actions/createAnimalPerdido';
import './ReportarMascota.module.css'
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import stl from "../ReportarMascota/ReportarMascota.module.css"
import FloatingUI from "../Floating UI/FloatingUI";
import imagenDefault from "../../Imagenes/imagenDefault.png"
import Toast from 'light-toast';


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
 
 export default function ReportarMascotaPerdida() {
 
 
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const [input, setInput] = useState({
        perro: false,
        gato: false,        
        estado: [],
        tama: [],
        peso: "",
        localidad: "",
        descripcion: "",        
        imagen: ""
      });
console.log(input)
  const [imagenes, setImagenes] = useState([]);
      
  const [errors, setErrors] = useState({});

    function handleSubmit(e){
         e.preventDefault();

    dispatch(createAnimalPerdido(input, imagenes));

    setInput({
      perro: false,
      gato: false,        
      estado: [],
      tama: [],
      peso: "",
      localidad: "",
      descripcion: "",        
      imagen: ""
    })
    
    // setImagenes([])
    Toast.success("Mascota agregada", 3000, () => {
      navigate("/homepage")
    });
 }

 /////////////////////////// EXTRAYENDO URL DE CLAUDINARY /////////////////////////////////////////////////////////////////////

 const img = []
 for (let i = 0; i < imagenes.length; i++) {
    img.push(imagenes[i])
 }

 let imgUrl = img.map(({ url }) => url)

 let urlImagen = imgUrl.toString();

  function handleImagen() {
    setInput({
      ...input,
      imagen: urlImagen
    })
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7

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


   function handleTamaño(e) {
    if (input.tama.length === 0)
    setInput({
      ...input,
      tama: [...input.tama, e.target.value]
    })
 } 
 function handleEstado(e) {
  if (input.estado.length === 0)
  setInput({
    ...input,
    estado: [...input.estado, e.target.value]
  })
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

  ///////////////////////////// HANDLE DELETE FOTO

  // function handleDelete(f) {
  //   setImagenes({
  //     ...imagenes,
  //     id: imagenes.id.filter((id) => id !== f)
  //   });
  // }

/////////////////////////////////////////////////////////// TE KAVIO EL RETURN  ///////////////////////////////////////////////////

  return (
    
  <div className={stl.paginareportar}>
    <NavBar />
    <FloatingUI />
          
          <div className={stl.tituloperdido}>Registra los datos de Mascota Perdida</div>
   
        <form className={stl.formul} onSubmit={handleSubmit}>

      {errors.gato && ( <p class="error2">{errors.gato}</p>)} 
      {errors.perro && ( <p class="error2">{errors.perro}</p>)}
      {errors.descripcion && ( <p class="error2">{errors.descripcion}</p>)} 
      

          
      <div className={stl.imageContainer2}>

        <div >
            <img
        src={imagenDefault}
          id="default-photo"
          alt=""
          height="150"
          width="150"
          />

        <button
            id="btn-foto"
         name="imagen"
         onClick={(e) => handleOpenWidget(e)}
         className={stl.botonFoto2}
          >
            AGREGAR FOTO
            </button>
          <span></span>
            </div>
            </div>
                  
            <div className={stl.contenedordatos2}>
       <div className={stl.gatoPerro2}>
         <div className={stl.opciones2}>
                <label className={stl.titulos2}>Gato:</label>
                <input className={stl.inputs2} onChange={ (e) => { handleCheck(e); handleGato(e); }}
                type="checkbox" name="gato" checked={isChecked} value={input.gato}/>                       
            </div> 
          
            <div className={stl.opciones2}>
                <label className={stl.titulos2}>Perro:</label>
                <input className={stl.inputs2} onChange={ (e) => { handleCheck2(e); handlePerro(e); }}
                type="checkbox" name="perro" checked={isChecked2} value={input.perro}/>                        
            </div>
            </div>

            <div className={stl.opciones}>                                     
            <label className={stl.titulos}>Estado:</label>
            <select className={stl.tamaño} onChange={handleEstado}>
                       <option></option>
                       <option>Perdido</option>
                       <option>Encontrado</option>                       
                       </select>
                        </div>

            <div className={stl.opciones}>                                     
            <label className={stl.titulos}>Tamaño:</label>
            <select className={stl.tamaño} onChange={handleTamaño}>
                       <option></option>
                       <option>Chico</option>
                       <option>Mediano</option>
                       <option>Grande</option>
                       </select>
                        </div>
        

            <div className={stl.opciones}>
              <Link to ="/lostpets">
                <button className={stl.botonubicacion}>Establecer ubicacion donde se perdio o vio por ultima vez
                  la mascota
                </button>
                  </Link>        
            </div>

            <div className={stl.opciones}>
            <label className={stl.titulos}>Descripcion:</label>
                <input onChange={handleChange} type="text" name="descripcion" value={input.descripcion}/>
               
           </div>
          </div>

            <button className={stl.botonperdido} onClick={handleImagen}>Reportar</button>
             {/* <button className={stl.boton} type="submit">Dar en Adopcion</button> */}

        </form>
        <Footer />
    </div>
  
  )}