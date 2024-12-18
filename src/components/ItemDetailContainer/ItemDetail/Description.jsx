import React from "react";

const Description = ({ producto }) => {
  return (
    <>
      <p className="card-text">{producto.descripcion}</p>
      <p className="card-text">Material: {producto.material}</p>
      <p className="card-text">Tamaño: {producto.tamaño}</p>
      <p className="card-text">Capacidad: {producto.capacidad}</p>
      <p className="card-text">Precio: ${producto.precio}</p>
    </>
  );
};

export default Description;
