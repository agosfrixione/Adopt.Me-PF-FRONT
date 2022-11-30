import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardPerdidos from '../../Componentes/CardPerdidos/CardPerdidos';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../BuscarMascota/BuscarMascota.module.css";
import FloatingUI from "../Floating UI/FloatingUI";
import getAnimalesPerdidos from "../../Actions/getAnimalesPerdidos";
import getTamañoPerdidos from "../../Actions/getTamAnimPerd";
import getTamañofiltro from "../../Actions/getTamañoFiltro";
import {useSelector, useDispatch} from 'react-redux';
import { useState } from "react";
import Paging from "../Pagination/Pagination";

export default function BuscarMascota() {
  const params = useParams();
  const dispatch = useDispatch();
  const tamaño = useSelector((state)=>state.filtroPerdidos)
  const allPets = useSelector((state)=>state.animalesPerdidos)

    const [currentPage, setCurrentPage] = useState(1) 
    const [mascotasPerPage] = useState(4)
    const lastPetIndex = currentPage * mascotasPerPage 
    const firstPetIndex = lastPetIndex - mascotasPerPage 
    const currentPets = allPets.slice(firstPetIndex,lastPetIndex);
    const actualPage = (pageNumber) => {setCurrentPage(pageNumber)}


  useEffect(()=>{
    dispatch(getTamañoPerdidos())
    dispatch(getAnimalesPerdidos())
  }, [dispatch]);

  const handleTamaño = (e)=>{
    e.preventDefault();
    setCurrentPage(1)
    dispatch(getTamañofiltro(e.target.value))
    console.log(e.target.value);
  }

  return (
    <>
      <div key={params.id}></div>
      <NavBar />
      <FloatingUI />
      <div>
        <h1 className={stl.titulo}>BUSCA AQUI TU MASCOTA PERDIDA</h1>
      </div>
       <Paging
       mascotasPerPage={mascotasPerPage} 
        allPets={allPets.length} 
        currentPage={currentPage} 
        actualPage={actualPage}
        currentPets={currentPets}
       />

       
       {/* TODAVIA NO ANDA BIEN EL FILTRO POR TAMAÑOS, PERO LO DEJO COMENTADO PARA SEGUIR */}
      <div>
      {/* <select onChange={(e)=>handleTamaño(e)}>
                <option value='All'>Tamaño</option>
                <option value = 'mediano'>{tamaño.tama}</option>
                <option value = 'grande'>{tamaño.tama}</option>
                <option value = 'chico'>{tamaño.tama}</option>             
            </select>   */}

            
      </div>

      {currentPets.length > 0 && currentPets.map(a =>{
        return(  
        <CardPerdidos
        id = {a._id}
        gato = {a.gato}
        perro = {a.perro}
        tama = {a.tama}       
        localidad = {a.localidad}
        />                  
)
})}
      <button className={stl.boton}>BUSCAR</button>
      <Link to="/homepage">
        <button className={stl.boton}>VOLVER</button>
      </Link>

      <Footer />
    </>
  );
}
