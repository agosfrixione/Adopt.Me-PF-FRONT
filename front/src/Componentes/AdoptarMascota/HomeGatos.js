import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import getgato from "../../Actions/getgatos";
import CardGato from "../Card/CardGato";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import stl from './HomeGatos.module.css';



const HomeGatos = () => {

    const dispatch = useDispatch();

    const allPets = useSelector((state) => state.gatos);

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 


    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

    useEffect(()=>{
        dispatch(getgato())
    }, [dispatch])
   
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