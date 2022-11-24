import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import getmascotas from "../../Actions/getmascotas";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import stl from './HomeGatos.module.css';



const HomeGatos = () => {

    const dispatch = useDispatch();
    const allCats = useSelector((state)=> state.animales);

    useEffect(()=>{
        dispatch(getmascotas())
    }, [dispatch])

    return (

        <div>
            <NavBar/>
        <div>Listado de Gatos ♥</div>
        <div className={stl.listadoCards}>

            {allCats?.map(g =>{
                return(
                    <Link to ={'detailCat'}>
                        <Card
                        id = {g.id}
                        especie = {g.especie}
                        nombre = {g.nombre}
                        localidad = {g.localidad}
                        imagen = {g.imagen}
                        />
                    </Link>
                )
            })}

        </div>

        </div>
    )
}

export default HomeGatos;