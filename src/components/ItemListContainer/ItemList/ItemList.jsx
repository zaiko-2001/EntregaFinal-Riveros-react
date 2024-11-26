import React from "react";
import { Link } from "react-router-dom";


const ItemList = ({ productos }) => {
  return (
    <div className="row" id="productos">
      {productos.map((producto) => (
        <div className="col-6 col-md-4 col-lg-3 mt-5" key={producto.id}>
          <div className="card mx-4" style={{ height: "100%" }}>
            <img
              src={`/assets/${producto.imagen}`}
              alt={producto.nombre}
              className="card-img-top"
              style={{
                height: "250px",
                width: "auto",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Precio: ${producto.precio}</p>
              <Link to={`/item/${producto.id}`} className="btn btn-vermas me-1">
                Ver más
              </Link>
              <button className="btn btn-carrito">
                <i className="bi bi-cart icon"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
