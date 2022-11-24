import React from "react";
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function Confirmacion () {
    const params = useParams();
    return (

        <div key={params.id}>

            <NavBar/>

            <Link to='/homepage'>
            <input 
            type="checkbox" 
            id="cbox2" 
            value="checkbox"/> 
            </Link>
            <label for="cbox2">REGISTRO COMPLETADO EXITOSAMENTE</label>

            <Link to='/homepage'>
                <button>VOLVER</button>
            </Link>
            
            <Footer />

        </div>
    );
};