import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import getmascotasbyid from "../../Actions/getmascotabyid";
import { useParams } from "react-router-dom";

export default function DetallePerro (props) {
    const {id} = useParams();
    // console.log(id);
    
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.animalesdetail);
   

    useEffect(() => {
        dispatch(getmascotasbyid(id))
        // console.log(id);                
    }, [dispatch])

    

    return (

        <div>
        <div>Detalle</div>

        <div >                   
              <img>{detail.imagen}</img>
              <h2>Mascota</h2>              
              <h3>Nombre: {detail.nombre}</h3>
              <h3>Localidad: {detail.localidad} </h3>              
              <h3>Raza: {detail.raza}</h3>
              <h3>Edad: {detail.edad}</h3>
              <h3>Estado: {detail.estado}</h3>
              <h3>Tamaño: {detail.tamaño}</h3>
              <h3>Peso: {detail.peso}</h3>
              <h3>Descripcion: {detail.descripcion}</h3>
              <h3>Castrado: {detail.castrado}</h3>
              <h3>Vacunado: {detail.vacunado}</h3>     
        </div>

        <Link to='/contacto'>
                <button>ADOPTAR</button>
        </Link>

        </div>

    );
};