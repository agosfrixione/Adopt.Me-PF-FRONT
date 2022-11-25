import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import getgato from "../../Actions/getgatos";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Paging from "../Pagination/Pagination";
import stl from './HomeGatos.module.css';



const HomeGatos = () => {

    const dispatch = useDispatch();
    const allPets = useSelector((state)=> state.gatos);

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(3)

    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex) 


    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}

    useEffect(()=>{
        dispatch(getgato())
    }, [dispatch])
    // if(allPets.map(e=>e.perro === true))
    return (

        <div>
            <NavBar/>
        <div>Listado de Gatos ♥</div>

        <Paging
        mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
        />

        <div className={stl.listadoCards}>

            {allPets?.map(g =>{
                return(
                    <Link to ={'/detailCat'}>
                        <Card
                        id = {g.id}
                        gato = {g.gato}
                        nombre = {g.nombre}
                        localidad = {g.localidad}
                        imagen = {g.imagen}
                        />
                    </Link>
                )
            })}

        </div>

        </div>
    )
}

export default HomeGatos;