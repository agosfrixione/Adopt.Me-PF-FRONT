import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getmascotas from "../../Actions/getmascotas";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import stl from "./HomePerros.module.css";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import Footer from "../Footer/Footer";


export default function HomePerros () {

    const dispatch = useDispatch();
    const alldogs = useSelector((state) => state.animales);
    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(3)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentVgames = alldogs.slice(firstPetIndex,lastPetIndex) 

    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

    useEffect(() => {
        if (alldogs.length === 0) {
            dispatch(getmascotas())
        }
    }, [alldogs.length, dispatch])

    return (
        <div>
            <NavBar />
        <div>Listado de perros</div>

        <Paging mascotasPerPage={mascotasPerPage} alldogs={alldogs.length} currpage={currentPage} actualPage={actualPage}/>

        <div className={stl.listadoCards}> 
     
        {currentVgames.length > 1 && currentVgames.map(p => {
                   
            return (                                          
                  <Link to ={"/detailDog"}>
                     <Card 
                     id={p.id}
                     especie={p.especie}
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