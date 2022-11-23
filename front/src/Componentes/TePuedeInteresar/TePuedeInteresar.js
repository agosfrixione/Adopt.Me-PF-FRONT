import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import stl from "../TePuedeInteresar/TePuedeInteresar.module.css";

export default function TePuedeInteresar () {

    const params = useParams();

    return (

        <div className={stl.pagina} key={params.id}>
            
            <NavBar />

            <h1 className={stl.titulo}>TE PUEDE INTERESAR</h1>

            <p className={stl.texto}>En esta seccion encontraras datos utiles como veterinarias y hogares de transito<br></br>
            <br>
            </br>
            Ademas tendras acceso el blog para compartir tu experiencias con otras personas</p>

            <div className={stl.vacunacion}></div>

            <Link to = '/directorio'> 
            <button className={stl.boton}>DIRECTORIO DE HOGARES DE TRANSITO, VETERINARIAS, ONG'S.</button>
            </Link>

            <button className={stl.boton}>BLOG</button>

            <Link to='/homepage'>
                <button className={stl.boton}>VOLVER</button>
            </Link>
            
            <Footer />

        </div>
    )
}