import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {useNavigate}  from "react-router-dom"
import Card from "../Card/Card";
import stl from "./HomePerros.module.css";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import FloatingUI from "../Floating UI/FloatingUI";
import getperro from "../../Actions/getperros";
import getDogByName from "../../Actions/getDogByName";
import ordenAlfabetico from "../../Actions/ordenAlfabetico";
import getDogsLocal from "../../Actions/getDogsLocal";
 import filtradoTamaño from "../../Actions/filtradoTamaño"; 
import getDogstamaño from "../../Actions/getDogTamaño";



export default function HomePerros () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allPets = useSelector((state) => state.perros);
    const allTamaños = useSelector((state) => state.tamañosDog)

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 

    const [input, setInput] = useState("");
    const [orden, setOrden] = useState("");
    const [searchDog, setSearchDog] = useState("");
    const [localDog, setlocalDog] = useState("");

    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

        useEffect(() => {
            dispatch(getperro())
        }, [dispatch])

        const handleClick = (e) => {
            e.preventDefault()
            window.location.reload();
        }
        
        const handleInput = (e) => {//cambia cada caracter
        e.preventDefault();
        setSearchDog(e.target.value)
    }

    const handleInputLocal = (e) => {//cambia cada caracter
        e.preventDefault();
        setlocalDog(e.target.value)
    }

    const handleSubmit = (e) => {//mando la accion y me trae el dog
        e.preventDefault();
        if(searchDog){
        dispatch(getDogByName(searchDog))
        setInput("")
        navigate("/adoptdog") 
        actualPage(1)
        }
   }

   const handleLocalSubmit = (e) => {//mando la accion y me trae el dog
    e.preventDefault();
    if(localDog){
    dispatch(getDogsLocal(localDog))
    setlocalDog("")
    navigate("/adoptdog") 
    actualPage(1)
    }
}

   const handleOrden = (e) => {
     dispatch(ordenAlfabetico(e.target.value))
     setCurrentPage(1)
     setOrden(`Ordenado ${e.target.value}`)
   }

//    function handleTamaño(e) {
//     e.preventDefault();
//     dispatch(filtradoTamaño(e.target.value))
//     setCurrentPage(1)
// }

// useEffect (() => {
//     dispatch(getDogstamaño())
//   }, [dispatch])
        
   return(
        <div className={stl.paginaadopcionperros}>
            <NavBar />
            <FloatingUI />
        <div className={stl.tituloPerros}>Perros en Adopcion</div>

        <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
        />

        <div>
        <label className={stl.labelSearch}>Nombre:</label>
           <input className={stl.inputNav}
               value={searchDog}
               type="text"
               placeholder=" Nombre..."
               onChange={handleInput}>
           </input>
           <button className={stl.btnNav}
               type="submit"
               onClick={handleSubmit}>Ir</button>  

        <label className={stl.labelSearch}>Localidad:</label>
           <input className={stl.inputNav}
               value={localDog}
               type="text"
               placeholder=" Localidad..."
               onChange={handleInputLocal}>
           </input>
           <button className={stl.btnNav}
               type="submit"
               onClick={handleLocalSubmit}>Ir</button>    
        </div>

        <div className={stl.filtros}>Filtar: 
               
               <select className={stl.op} onChange={(e) => handleOrden(e)}>
                    <option disabled selected defaultValue>
                        Alfabeticamente
                    </option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
              
                {/* <div>                    
                  <select className={stl.op} onChange={e => handleTamaño(e)}>
                    { allTamaños && allTamaños.sort().map(e => {
                      return <option value={e} key={e}>{e}</option>
                    }) }      
                  </select>
                </div> */}
        </div>
        <br/>
        <div>
            <button className={stl.btnNavHome} onClick={handleClick}>HomePerros</button>
        </div>

        <div className={stl.listadoCards}> 
     

        {currentPets.length > 0 && currentPets.map(p => {

                   
            return (                                          
                
                     <Card
                     id={p._id}
                     perro = {p.perro}
                     nombre={p.nombre}
                     localidad={p.localidad}
                     imagen={p.imagen}
                     />
                    
                
                                                         
            )})     
                                  
        }
        
      </div>

      <Footer />
    </div>
    )
}