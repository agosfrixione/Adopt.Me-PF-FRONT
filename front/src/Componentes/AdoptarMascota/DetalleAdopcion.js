import React from "react";
import { Link, useParams } from 'react-router-dom';

export default function InfoProceso () {

    const params = useParams();

    return (

        <div key={params.id}>
            <div>
            <h1>ADOPTA A TU NUEVA MASCOTA</h1>
            </div>

            <div>
            <h2>DATOS DEL RESPONSABLE:</h2>
            <h3>(Aca irian los datos del usuario que vienen del back)</h3>
            </div>

            <div>
            <h1>GRACIAS POR CONFIAR EN ADOPT.ME!</h1>
            </div>

            <Link to='/homepage'>
                <button>VOLVER</button>
            </Link>
        </div>
    );
};