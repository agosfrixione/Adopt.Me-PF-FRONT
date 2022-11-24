import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import getmascotasbyid from "../../Actions/getmascotabyid";

export default function DetallePerro (id) {

    const dispatch = useDispatch();
    const detail = useSelector((state) => state.animalesdetail) 
    console.log("en el reducer", detail)

    useEffect(() => {
        dispatch(getmascotasbyid(id))
        console.log("este es el id:", id)
    })

    return (

        <div>

        <div>Detalle de perro</div>

        <img src={detail.imagen} alt=""/>

        <div>
            <h2>{detail.nombre}</h2>
        </div>

        <div>
            <h2>{detail.raza}</h2>
        </div>

        <div>
            <h2>{detail.edad}</h2>
        </div>

        <div>
            <h2>{detail.estado}</h2>
        </div>

        <div>
            <h2>{detail.tamaño}</h2>
        </div>

        <div>
            <h2>{detail.peso}</h2>
        </div>

        <div>
            <h2>{detail.localidad}</h2>
        </div>

        <div>
            <h2>{detail.descripcion}</h2>
        </div>

        <div>
            <h2>{detail.castrado}</h2>
        </div>

        <div>
            <h2>{detail.vacunado}</h2>
        </div>



        <Link to='/contacto'>
                <button>ADOPTAR</button>
        </Link>
        </div>

    )
}