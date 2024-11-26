import React from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ producto }) => {
  return (
    <div className="card mt-5 d-flex flex-column flex-md-row">
      <img
        src={`/assets/${producto.imagen}`}
        alt={producto.nombre}
        className="card-img-top img-fluid"
        style={{
          height: "100%",
          maxWidth: "500px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">Material: {producto.material}</p>
        <p className="card-text">Tamaño: {producto.tamaño}</p>
        <p className="card-text">Capacidad: {producto.capacidad}</p>
        <p className="card-text">Precio: ${producto.precio}</p>
        <div className="botones">
          <Link to={`/`} className="btn btn-vermas me-1">
            Volver
          </Link>
          <button className="btn btn-carrito">
            <i className="bi bi-cart icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
