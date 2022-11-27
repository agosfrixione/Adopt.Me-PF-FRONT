import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import createanimal from "../../Actions/createanimal";
import "./formularioDar.css";

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
    ) errors.nombre = "Nombre is required. Must be longer than two characters and cannot contain numbers or special characters.";
                                                
                                        
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
        perro: "",
        gato: "",
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
      
  const [errors, setErrors] = useState({});

    function handleSubmit(e){
         e.preventDefault();

    dispatch(createanimal(input));

    alert("Mascota Agregada");

    setInput({
        perro: "",
        gato: "",
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

  function handleCheck() {
      setIsChecked(!isChecked)
    }

/////////////////////////////////////////////////////////// TE KAVIO EL RETURN  ///////////////////////////////////////////////////

  return (
    
    <>
        <form onSubmit={handleSubmit}>

             <div>
                <label>Gato:</label>
                <input onChange={handleCheck} 
                type="checkbox" name="gato" checked={isChecked} value={input.gato}/>
                 {errors.gato && ( <p>{errors.gato}</p>)}            
            </div> 
            
            <div>
                <label>Perro:</label>
                <input onChange={handleCheck} 
                type="checkbox" name="perro" checked={isChecked} value={input.perro}/>
                 {errors.perro && ( <p>{errors.perro}</p>)}            
            </div>

              <div>
                <label>Nombre:</label>
                <input onChange={handleChange} 
                type="text" name="nombre" value={input.nombre}/>
                 {errors.nombre && ( <p>{errors.nombre}</p>)}            
            </div>
 
            <div>
            <label>Raza:</label>
                <input onChange={handleChange} 
                type="text" name="raza" value={input.raza}/>
                {errors.raza && ( <p>{errors.raza}</p>)} 
            </div>

            <div>
            <label>Edad:</label>
                <input onChange={handleChange}
                type="text" name="edad" value={input.edad}/>
                {errors.edad && ( <p>{errors.edad}</p>)} 
            </div>

            <div>
            <label>Estado:</label>
                <input onChange={handleChange} 
                type="text" name="estado" value={input.estado}/>
                {errors.estado && ( <p>{errors.estado}</p>)} 
            </div>

            <div>
            <label>Tamaño:</label>
                <input onChange={handleChange} 
                type="text" name="tamaño" value={input.tamaño}/>
                {errors.tamaño && ( <p>{errors.tamaño}</p>)} 
            </div>
        
            <div>
            <label>Peso:</label>
                <input onChange={handleChange} 
                type="text" name="peso" value={input.peso}/>
                {errors.peso && ( <p>{errors.peso}</p>)} 
            </div>

            <div>
            <label>Localidad:</label>
                <input onChange={handleChange} 
                type="text" name="localidad" value={input.localidad}/>
                {errors.localidad && ( <p>{errors.localidad}</p>)} 
            </div>

            <div>
            <label>Descripcion:</label>
                <input onChange={handleChange} type="text" name="descripcion" value={input.descripcion}/>
                {errors.descripcion && ( <p>{errors.descripcion}</p>)} 
            </div>

            <div>
            <label>Castrado:</label>
                <input onChange={handleCheck} 
                type="checkbox" name="castrado" checked={isChecked} value={input.castrado}/>
                {errors.castrado && ( <p>{errors.castrado}</p>)} 
            </div> 

            <div>
            <label>Vacunado:</label>
                <input onChange={handleCheck} 
                type="checkbox" name="vacunado"  checked={isChecked} value={input.vacunado}/>
                {errors.vacunado && ( <p>{errors.vacunado}</p>)} 
            </div>    
              
        <div>
             <button type="submit">Dar en Adopcion</button>
        </div>

        </form>
       
    </>
  )}