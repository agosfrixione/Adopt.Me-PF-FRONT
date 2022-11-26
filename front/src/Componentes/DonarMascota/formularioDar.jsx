import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createuser } from "../../actions" //acomodar de donde importo el archivo



function validation(){
    let errors = {};
    const whitespace = /\S+/;
    const validString = /^[a-z]+$/i;
const validNumber = /^\d+$/;
const validUrl = /^(ftp|http|https):\/\/[^ "]+$/;
 
   // Name validation
   if (
     !whitespace.test(input.nombre) ||                // Si contiene espacio en blanco
     !validString.test(input.nombre) ||               // Si contiene characteres que no sean letras
     input.nombre.length < 3                          // Si contiene menos de 3 characteres
   ) errors.nombre = "Nombre is required. Must be longer than two characters and cannot contain numbers or special characters."
 
 /* function validate(input){
     let errors = {};
     if(!!/^[a-zA-Z\s]*$/.test(input.nombre) ||
     !input.nombre ||
     input.nombre.length <3)
     {
         errors.nombre = "Debe completar este campo";
       }
   } */
   
                                                      // tipo Validation
   if (
       input.tipo.length === 0 ||                   // Si no hay ningún type seleccionado
       input.tipo.length > 5                        // no hay problema con elegir hasta 5 tipos seleccionados
     ) errors.types = "Tipo is required. You can select up to 5 types.";
   
 
                                             //Edad Validation
   if ( 
       !validNumber.test(input.edad) ||       // Si no es un número (0-9)
       parseInt(input.edad) < 1      ||       // Si es un número menor a 1
       parseInt(input.edad) > 20             // Si es un número mayor a 20
     ) errors.edad = "Edad is required. Must be higher than 1 and less than 20.";
   
                                       // Tamaño validation  // agregar pequeño, mediano, grande
     if (
       !validNumber.test(input.tamaño) || 
       parseInt(input.tamaño) < 1 ||
       parseInt(input.tamaño) > 3
     ) errors.tamaño = "Tamaño is required. Must be higher than 1 and less than 3.";
     
                                         // Sociabilidad validation
     if (
       !validNumber.test(input.sociabilidad) || 
       parseInt(input.sociabilidad) < 1 ||
       parseInt(input.sociabilidad) > 5
     ) errors.sociabilidad = "Sociabilidad is required. Must be higher than 1 and less than 5.";
   
                                       //salud validation
     if (
       !validNumber.test(input.salud) || 
       parseInt(input.salud) < 1 ||
       parseInt(input.salud) > 3
     ) errors.weight = "Salud is required. Must be higher than 1 and less than 3.";
     
                                        // Image validation 
     if (
       !validUrl.test(input.image)                   // Si no es una URL válida
     ) errors.image = "Image is required. Must be a valid URL.";
 
                                     // Descripcion validation
     if (!input.descripcion) {
       errors.descripcion = "Tienes que agregar una descripcion informativa de la mascota";
     } else if (!/^[a-z\s]+$/i.test(input.descrpcion)) {
       errors.descripcion = "La descripcion no es válida";
     }
   
   
                                  //falta poner la ubicacion si lo requiere
     return errors
 }
 
 export default function Validate(input) {
       
    

 const history = useHistory();
const dispatch = useDispatch();
  const tipo = useSelector((state) => state.tipos);
  const tamaño = useSelector((state) => state.tamaño);
  const sociabilidad = useSelector((state) => state.sociabilidad);
  const salud = useSelector((state) => state.salud);
  const ubicacion = useSelector((state) => state.ubicacion);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
        nombre: "",
        sexo: [],
        edad: "",
        tamaño: [],
        Social: [],
        img: "",
        descripcion: "",
        salud: [],
        ubicacion:[],
      });
      

    
    function handleSexo(e) {
        setInput({
            ...input,
            sexo: [...input.sexo, e.targe.value],
        });
    }
   
    function handleAltura(e) {
        setInput({
            ...input,
            altura: [...input.altura, e.targe.value],
        });
    }

    function handleSocial(e) {
        setInput({
            ...input,
            social: [...input.social, e.targe.value],
        });
    }

    function handleSalu(e) {
        setInput({
            ...input,
            salu: [...input.salu, e.targe.value],
        });
    }


    /* function handleDelete(el) {
        setInput({
            ...input,
            tipo: input.tipo.filter((tipo)=> tipo!== el)
        });
    } */

 function handleSubmit(e){
    e.preventDefault();
    dispatch(createuser(input));
    alert("Mascota Agregada");
    setInput({
        nombre: "",
        tipo: [macho, hembra],
        edad: "",
        tamaño: [pequeño, mediano, grande],
        Sociabilidad: [Timido,             
                        Independiente, 
                        Agresivo, 
                        Alegre,
                        Compañero,
                        Inteligente,
                        Leal,
                        Tranquilo,
                        Guardian,
                        Vigilante,
                        Amigable,
                        Desconfiado,
                        Cariñoso,
                        Testarudo,
                        Activo,
                        Jugueton,
                        Agil,
                        Rapido,
                        Amable ],
        image: "",
        descripcion: "",
        salud: [vacunado, desparacitado, esterilizado],
        ubicacion:[],
    });
    history.push("/sigup") // acomodar si no va en home 
 }


  function handleChange(e){
    setInput({
        ...input,
        [e.target.nombre]: e.target.value,
    });
    setErrors(
        validation({
            ...input,
            status: e.target.value,
        })
    )
  }
  //useEffect(() => {dispatch(getmascotas())}, [dispatch]);

  return (
    <body class="body4">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label class="fontLabel">Nombre:</label>
                <input class="label"
                       type="text"
                       value={input.nombre}
                       name="nombre"
                       onChange={(e) => handleChange(e)} />
                       <p>{errors.nombre}</p>
            </div>

            <div>
                <label class="fontLabel">Tipo:</label>                  //es un array
                <select class="checkbox" onChange={handleSexo}>
                    {tipo.map((t)=>(
                        <option key={t.id} value={t}>
                            {t}
                        </option>
                        ))}
                        
                    </select>
                <ul>
                    <li>{input.tipo.map((el)=> el + " ,")}</li>
                </ul>
            </div>

            <div>
                <label class="fontLabel">Edad:</label>
                <input class="label"
                       type="number"
                       value={input.edad}
                       name="edad"
                       onChange={(e) => handleChange(e)} />
            </div>

            <div>
                <label class="fontLabel">Tamaño:</label>       //es un array
                <select class="checkbox" onChange={handlealtura}>
                    {tamaño.map((ta)=>(
                        <option key={ta.id} value={ta}>
                            {ta}
                        </option>
                    ))}
                    </select>
                <ul>
                    <li>{input.tamaño.map((el)=> el + " ,")}</li>
                </ul>
            </div>

            <div>
                <label class="fontLabel">Sociabilidad:</label>                   //es un array 
                <select class="typesLabel" onChange={handleSocial}>
                    {sociabilidad.map((s)=>(
                        <option key={s.id} value={s}>
                            {s}            
                        </option>
                    ))}
                    <select className={opcionesSociabilidad}>
                    
                    </select>
                </select>
                
                
              
                <ul>
                    <li>{input.sociabilidad.map((el)=> el + " ,")}</li>
                </ul>
            </div>

            {/* <div>
            <label class="fontLabel">Caracter:</label> 
                <input class="label"
                       type="text"
                       value={input.caracter}
                       name="caracter"
                       onChange={(e) => handleChange(e)} />
            </div> */}

            <div>
            <label class="fontLabel">Description:</label> 
                <input class="label"
                       type="text"
                       value={input.description}
                       name="description"
                       onChange={(e) => handleChange(e)} />
            </div>

            <div>
            <label class="fontLabel">Salud:</label>        //es un array 
            <select class="typesLabel" onChange={handleSalu}>
                    {salud.map((s)=>(
                        <option key={tipos.id} value={s}>
                            {s}
                        </option>
                    ))}
                        
                </select>
                <ul>
                    <li>{input.salud.map((el)=> el + " ,")}</li>
                </ul>
            </div>

            <div>
            <label class="fontLabel">Image:</label>
            <input
              class="label"
              type="text"
              value={input.image}
              name="image"
              onChange={(e) => handleChange(e)}
            />
            </div>

            <div>
            <label class="fontLabel">Ubicacion:</label>       //es un array pero puede que no sea por la geolocalizacion
            <select class="typesLabel" onChange={(e)}>
                    {ubicacion.map((ubicacion)=>(
                        <option key={ubicacion.id} value={ubicacion.nombre}>
                            {ubicacion.name}
                        </option>
                    ))}
                </select>
                <ul>
                    <li>{input.ubicacion.map((el)=> el + " ,")}</li>
                </ul>
            </div>

        </form>
        
    </body>
  )}
                    