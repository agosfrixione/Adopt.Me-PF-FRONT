import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import getmascotasbyid from "../../Actions/getmascotabyid";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../AdoptarMascota/DetalleMascotas.module.css";
import FloatingUI from "../Floating UI/FloatingUI";


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
            <FloatingUI />
              <div className={stl.imgn} alt="">{detail.imagen}</div>
              <div className={stl.cardDetalles}>                   
              <div className={stl.datosAdopcion}>
              <div className={stl.tituloAdopcion}>Datos de la Mascota</div>
            <div className={stl.datos2}>              
              <div className={stl.titulos2}>Nombre: <p className={stl.details}>{detail.nombre}</p></div>
              <div className={stl.titulos2}>Localidad: <p className={stl.details}>{detail.localidad}</p> </div>              
              <div className={stl.titulos2}>Raza: <p className={stl.details}>{detail.raza}</p></div>
              <div className={stl.titulos2}>Edad: <p className={stl.details}>{detail.edad}</p></div>
              <div className={stl.titulos2}>Estado: <p className={stl.details}>{detail.estado}</p></div>
              <div className={stl.titulos2}>Tamaño: <p className={stl.details}>{detail.tamaño}</p></div>
              <div className={stl.titulos2}>Peso: <p className={stl.details}>{detail.peso}</p></div>
              <div className={stl.titulos2}>Descripcion: <p className={stl.details}>{detail.descripcion}</p></div>
              <div className={stl.titulos2}>Castrado: <p className={stl.details}>{detail.castrado}</p></div>              
              <div className={stl.titulos2}>Vacunado: <p className={stl.details}>{detail.vacunado}</p></div>  
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