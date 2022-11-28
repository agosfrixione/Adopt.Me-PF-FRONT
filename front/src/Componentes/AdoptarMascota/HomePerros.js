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
/* import filtradoTamaño from "../../Actions/filtradoTamaño"; */



export default function HomePerros () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allPets = useSelector((state) => state.perros);

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

  /*  function handlerTamaño (e) {
    dispatch(filtradoTamaño(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
} */
        
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
               
               <select className={stl.op}onChange={(e) => handleOrden(e)}>
                    <option disabled selected defaultValue>
                        Alfabeticamente
                    </option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
                {/* <select className={stl.op}>
                    <option disabled selected defaultValue>
                        Localidad
                    </option>
                    <option key={1} value='All'>All</option>
                </select> */}
                {/* <select className={stl.op}>
                    <option disabled selected defaultValue>
                        Tamaño
                    </option>
                    <option key={1} value="Pequeño">Pequeño</option>
                    <option key={2} value="Mediano">Mediano</option>
                    <option key={3} value="Grande">Grande</option>
                </select> */}
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