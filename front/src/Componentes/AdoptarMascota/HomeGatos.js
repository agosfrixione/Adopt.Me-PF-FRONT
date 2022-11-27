import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import  {useNavigate}  from "react-router-dom"
import getgato from "../../Actions/getgatos";
import CardGato from "../Card/CardGato";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import stl from './HomeGatos.module.css';
import ordenAlfaGato from "../../Actions/ordenAlfaGato";
import getCatByName from "../../Actions/getCatByName";



const HomeGatos = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allPets = useSelector((state) => state.gatos);

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 


    const [input, setInput] = useState("");
    const [orden, setOrden] = useState("");
    const [searchCat, setSearchCat] = useState("");

    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

    useEffect(()=>{
        dispatch(getgato())
    }, [dispatch])
    // if(allPets.map(e=>e.perro === true))

    const handleInput = (e) => {
        e.preventDefault();
        setSearchCat(e.target.value)
    }

    const handleSubmit = (e) => {//mando la accion y me trae el dog
        e.preventDefault();
        if(searchCat){
        dispatch(getCatByName(searchCat))
        setInput("")
        navigate("/adoptcat") 
        actualPage(1)
        }
   }

   const handleOrden = (e) => {
    dispatch(ordenAlfaGato(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }
    return (

        <div className={stl.paginaadopcionperros}>
            <NavBar/>
        <div className={stl.tituloGatos}>Gatos en Adopcion</div>

       <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
        />
        <div>
        <label className={stl.labelSearch}><strong>Buscar:</strong> </label>
          <input className={stl.inputNav}
              value={searchCat}
               type="text"
               placeholder=" Nombre..."
              onChange={handleInput}>  
           </input> 
           <button className={stl.btnNav}
               type="submit"
               onClick={handleSubmit}>Ir</button>   
        </div>
        <div>Filtros:
                <select onChange={e => handleOrden(e)}>
                    <option disabled selected defaultValue>
                        Alfabeticamente
                    </option>
                    <option key={1} value='A-Z'>A-Z</option>
                    <option key={2} value='Z-A'>Z-A</option>
                </select>

                    <select>
                    <option disabled selected defaultValue>
                        Localidad
                    </option>
                    <option key={1} value='All'>All</option>
                </select>
              
                     <select>
                    <option disabled selected defaultValue>
                        Tamaño
                    </option>
                    <option key={1} value="0_a_20_cm">0 a 20 cm</option>
                    <option key={1} value="20_a_40_cm">20 a 40 cm</option>
                    <option key={1} value="40_cm_en_adelante">40 cm en adelante</option>
                </select>
        </div>

        <div className={stl.listadoCards}>


            {currentPets.length > 0 && currentPets.map(g =>{

                return(
                  
                        <CardGato
                        id = {g._id}
                        gato = {g.gato}
                        nombre = {g.nombre}
                        localidad = {g.localidad}
                        />                  
                )
            })}
            

        </div>

        </div>
    )
}

export default HomeGatos;