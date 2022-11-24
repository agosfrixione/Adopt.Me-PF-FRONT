import React from "react";
import stl from "../Card/Card.module.css";

export default function Card({
  especie,
  nombre,
  raza,
  edad,
  estado,
  tamaño,
  peso,
  localidad,
  descripcion,
  castrado,
  vacunado,
  imagen,
}) {

  return (
    <>
    <div className={stl.card}>
      <div>
        <img src={imagen} alt={nombre} />
      </div>
      <div> {nombre} </div>
      <div> {especie} </div>
      <div> {raza} </div>
      <div> {edad} </div>
      <div> {estado} </div>
      <div> {tamaño} </div>
      <div> {peso} </div>
      <div> {localidad} </div>
      <div> {descripcion} </div>
      <div> {castrado} </div>
      <div> {vacunado} </div>
      </div>
    </>
  );
}
