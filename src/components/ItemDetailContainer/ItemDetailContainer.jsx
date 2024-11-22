import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtiene el id del producto de la URL
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

      
      const productoEncontrado = data.find((producto) => producto.id === parseInt(id));
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
      <p className="d-flex align-items-center justify-content-center">Cargando detalles del producto...</p>
    ) : producto ? (
      <div className="card mt-5 d-flex flex-column flex-md-row">
        {/* Imagen del producto */}
        <img
          src={`/assets/${producto.imagen}`}
          alt={producto.nombre}
          className="card-img-top img-fluid" // img-fluid ajusta la imagen al tamaño del contenedor
          style={{
            maxWidth: "500px",  // Limita el tamaño máximo de la imagen
            objectFit: "cover", 
            borderRadius: "8px 8px 0 0", 
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Descripción: {producto.descripcion}</p>
          <p className="card-text">Material: {producto.material}</p>
          <p className="card-text">Tamaño: {producto.tamaño}</p>
          <p className="card-text">Capacidad: {producto.capacidad}</p>
          <p className="card-text">Precio: ${producto.precio}</p>
        </div>
      </div>
    ) : (
      <p>Producto no encontrado</p>
    )}
  </div>
  
  );
};

export default ItemDetailContainer;
