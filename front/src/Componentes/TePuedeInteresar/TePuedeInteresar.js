import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function TePuedeInteresar () {

    const params = useParams();

    return (

        <div key={params.id}>
            
            <NavBar />

            <h1>TE PUEDE INTERESAR</h1>

            <Link to = '/reportarmaltrato'> 
            <button>REPORTAR MALTRATO ANIMAL</button>
            </Link>

            <Link to = '/directorio'> 
            <button>DIRECTORIO DE HOGARES DE TRANSITO, VETERINARIAS, ONG'S.</button>
            </Link>

            <button>BLOG</button>

            <Link to='/homepage'>
                <button>VOLVER</button>
            </Link>
            
            <Footer />

        </div>
    )
}