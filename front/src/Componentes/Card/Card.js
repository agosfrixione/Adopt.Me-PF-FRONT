import React from "react";
// import stl from "../Card/Card.module.css";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ nombre, raza, localidad,id, perro }) {

  return (
    <div class="cardstodas">
    <div class="cards">
  <div class="viendo">
    <div href="" class="card">
            <Link to = {`/animales/${id}`}>
      <img src="https://t1.ea.ltmcdn.com/es/posts/2/6/8/la_presentacion_de_un_perro_y_un_gato_adultos_21862_1_600.jpg" class="card__image" alt="" />
            </Link>
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__thumb" />
          <div class="card__header-text">
            <div class="card__title">{nombre}</div>            
            <div class="card__status">{raza}</div>
            <div>{perro}</div>
            {/* <div>{id}</div> */}
          </div>
        </div>
        <p class="card__description">Esta mascota esta ubicada en: {localidad}</p>
      </div>
    </div>      
  </div>
</div>
    </div>
  );
}
