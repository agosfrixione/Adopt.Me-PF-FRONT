import React from "react";

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
      <div>
        <img src={imagen} alt={nombre} />
      </div>
    </>
  );
}
