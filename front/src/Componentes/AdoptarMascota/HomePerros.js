import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getperros from "../../Actions/getperros";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import stl from "./HomePerros.module.css";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import Footer from "../Footer/Footer";


export default function HomePerros () {

    const dispatch = useDispatch();

    const allPets = useSelector((state) => state.perros);

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(3)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 


    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

        useEffect(() => {
            if (allPets.length === 0) {
                dispatch(getperros())
            }
        }, [allPets.length, dispatch])

    return (
        <div>
            <NavBar />
        <div>Listado de perros</div>

        <Paging 
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
        />

        <div className={stl.listadoCards}> 
     

        {currentPets.length > 1 && currentPets.map(p => {

                   
            return (                                          
                  <Link to ={"/detailDog"}>
                     <Card 
                     id={p.id}
                     perro = {p.perro}
                     nombre={p.nombre}
                     localidad={p.localidad}
                     imagen={p.imagen}
                     />
                  </Link>                                          
            )})     
                                  
        }
        
      </div>

      <Footer />
    </div>
    )
}