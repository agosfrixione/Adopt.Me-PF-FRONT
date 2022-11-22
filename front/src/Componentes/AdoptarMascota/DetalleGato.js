import React from "react";
import { Link, useParams } from 'react-router-dom';

export default function DetalleGato () {

    const params = useParams();

    return (

        <div key={params.id}>

        <div>Detalle de gato</div>


        <Link to='/contacto'>
                <button>ADOPTAR</button>
        </Link>
        </div>

    )
}