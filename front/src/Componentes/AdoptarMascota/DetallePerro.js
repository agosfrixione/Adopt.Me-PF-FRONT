import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import getmascotasbyid from "../../Actions/getmascotabyid";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../AdoptarMascota/DetalleMascotas.module.css";


export default function DetallePerro () {
    const {id} = useParams();
    // console.log(id);
    
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.animalesdetail);

    useEffect(() => {
        dispatch(getmascotasbyid(id))               
    }, [id, dispatch])
   
   
    return (

        <div className={stl.paginaAdopcion}>
            
            <NavBar />

              <div className={stl.imgn} alt="">{detail.imagen}</div>
              <div className={stl.cardDetalles}>                   
              <div className={stl.datosAdopcion}>
              <div className={stl.tituloAdopcion}>Datos de la Mascota</div>
            <div className={stl.datos2}>              
              <div className={stl.titulos2}>Nombre: {detail.nombre}</div>
              <div className={stl.titulos2}>Localidad: {detail.localidad} </div>              
              <div className={stl.titulos2}>Raza: {detail.raza}</div>
              <div className={stl.titulos2}>Edad: {detail.edad}</div>
              <div className={stl.titulos2}>Estado: {detail.estado}</div>
              <div className={stl.titulos2}>Tamaño: {detail.tamaño}</div>
              <div className={stl.titulos2}>Peso: {detail.peso}</div>
              <div className={stl.titulos2}>Descripcion: {detail.descripcion}</div>
              <div className={stl.titulos2}>Castrado: {detail.castrado}</div>              
              <div className={stl.titulos2}>Vacunado: {detail.vacunado}</div>  
            </div>
               
              <Link to='/contacto'>
                <button className={stl.botonDarAdopcion}>ADOPTAR</button>
        </Link>  
        </div> 
        </div>

        <Footer />

        </div>

    );
};