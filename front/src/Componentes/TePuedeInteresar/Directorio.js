import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function Directorio () {

    const params = useParams();

    return (
        <div key={params.id}>
            
            <NavBar />

            <h1>DIRECTORIO</h1>
            <h2>Aca irian los telefonos y direcciones</h2>

            <Link to='/tepuedeinteresar'>
                <button>VOLVER</button>
            </Link>
            
            <Footer />

        </div>
    )
}