import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import Card from "../Card/Card";
import stl from "./HomePerros.module.css";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import Footer from "../Footer/Footer";

import getperro from "../../Actions/getperros";



export default function HomePerros () {

    const dispatch = useDispatch();

    const allPets = useSelector((state) => state.perros);

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 


    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

        useEffect(() => {
            if (allPets.length === 0) {
                dispatch(getperro())
            }
        }, [allPets.length, dispatch])

    return (
        <div className={stl.paginaadopcionperros}>
            <NavBar />
        <div className={stl.tituloPerros}>Perros en Adopcion</div>

        <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
        />

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