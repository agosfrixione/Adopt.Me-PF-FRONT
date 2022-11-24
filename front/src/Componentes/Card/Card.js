import React, { useEffect } from "react";
import { link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { getmascotas } from "../../Actions/getmascotas";

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
  let estadoanimales = useSelector((state) => state.animales);
  const dispatch = useDispatch();

  //useEffect(() => {
  //  dispatch(getmascotas());
  //}, []);

  return (
    <>
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
    </>
  );
}
