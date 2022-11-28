import React from "react";
import UploadImages from "../UploadImages/UploadImages";
import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import stl from "../ReportarMascota/ReportarMascota.module.css";
import FloatingUI from "../Floating UI/FloatingUI";

export default function ReportarMascota() {
  const params = useParams();
  return (
    <div key={params.id}>
      <NavBar />
      <FloatingUI />
      <div>
        <h1 className={stl.titulo}>REPORTA UNA MASCOTA PERDIDA</h1>
      </div>
      <UploadImages />
      <button className={stl.boton}>REPORTAR</button>
      <Link to="/homepage">
        <button className={stl.boton}>VOLVER</button>
      </Link>
      <Footer />
    </div>
  );
}
