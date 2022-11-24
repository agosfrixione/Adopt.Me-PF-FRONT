import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../BuscarMascota/BuscarMascota.module.css";

export default function BuscarMascota() {
  const params = useParams();

  return (
    <>
      <div key={params.id}></div>
      <NavBar />
      <div>
        <h1 className={stl.titulo}>BUSCA AQUI TU MASCOTA PERDIDA</h1>
      </div>
      <Card />
      <button className={stl.boton}>BUSCAR</button>
      <Link to="/homepage">
        <button className={stl.boton}>VOLVER</button>
      </Link>

      <Footer />
    </>
  );
}
