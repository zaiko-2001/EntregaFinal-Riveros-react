import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SuggestedProducts from "./SuggestedProducts/SuggestedProducts";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducto = async () => {
    setLoading(true);
    try {
      const response = await fetch("/products.json");
      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }
      const data = await response.json();

      const productoEncontrado = data.find(
        (producto) => producto.id === parseInt(id)
      );
      setProducto(productoEncontrado);
    } catch (error) {
      console.error("Error al cargar el producto:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducto();
  }, [id]);

  return (
    <div className="container">
      {loading ? (
        <p className="d-flex align-items-center justify-content-center">
          Cargando detalles del producto...
        </p>
      ) : producto ? (
        <>
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
              <p className="card-text">Descripción: {producto.descripcion}</p>
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
          {/* Productos sugeridos */}
          <SuggestedProducts currentProductId={id} />
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
