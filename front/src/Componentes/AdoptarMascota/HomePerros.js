import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getperros from "../../Actions/getperros";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import stl from "./HomePerros.module.css";
import NavBar from "../NavBar/NavBar";

export default function HomePerros () {

    const dispatch = useDispatch();
    const alldogs = useSelector((state) => state.perros);


    useEffect(() => {
        if (alldogs.length === 0) {
            dispatch(getperros())
        }
    }, [alldogs.length, dispatch])

    return (
        <div>
            <NavBar />
        <div>Listado de perros</div>

        <div className={stl.listadoCards}> 
     
        {alldogs.length > 1 && alldogs.map(p => {
                   
            return (                                          
                  <Link to ={"/detailDog"}>
                     <Card 
                     id={p.id}
                     perro = {p.perro}
                     nombre={p.nombre}
                     localidad={p.localidad}
                     imagen={p.imagen}
                     />
                  </Link>                                          
            )})     
                                  
        }
        
      </div>
    </div>
    )
}