import React from "react";
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function Confirmacion () {
    const params = useParams();
    return (

        <div key={params.id}>

            <NavBar/>


            <div>
                <h1>REGISTRO DE INSTITUCIÒN PROTECTORA</h1>
            </div>

            <Link to='/homepage'>
            <input 
            type="checkbox" 
            id="cbox2" 
            value="checkbox"/> 
            </Link>
            <label for="cbox2">TU REGISTRO SE HA COMPLETADO, EN BREVE RECIBIRAS UN CORREO CON LOS PASOS A SEGUIR PARA INGRESAR A TU CUENTA.</label>

            <Link to='/homepage'>
                <button>VOLVER</button>
            </Link>

            <div id="footer">
                <Footer />
                </div>
        </div>
    );
};