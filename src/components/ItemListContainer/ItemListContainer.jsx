import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Extrae el parámetro de la categoría
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define los títulos según las rutas
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Nuestros Productos";
      case "/category/tazas":
        return "Tazas";
      case "/category/platos":
        return "Platos";
    }
  };
  
  const fetchProductos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/products.json"); // Ruta al archivo JSON
      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }
      const data = await response.json();

      // Filtra los productos según la categoría si categoryId está presente
      const productosFiltrados = categoryId
        ? data.filter((producto) => producto.categoria === categoryId)
        : data;

      setProductos(productosFiltrados);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, [categoryId]);

  return (
    <div>
      {location.pathname === '/' && <HeroSection />} 
      <h1 className="d-flex align-items-center justify-content-center">{getTitle()}</h1>
      {loading ? (
        <p className="d-flex align-items-center justify-content-center">Cargando productos...</p>
      ) : productos.length > 0 ? (
        <div className="row" id="productos">
          {productos.map((producto) => (
            <div className=" col-6 col-md-4 col-lg-3 mt-5" key={producto.id}>
              <div className="card mx-4 " style={{ height: "100%" }}>
                <img
                  src={`/assets/${producto.imagen}`} 
                  alt={producto.nombre}
                  className="card-img-top"
                  style={{ height: "250px",width:"auto", objectFit: "cover",
                    borderRadius: "4px" }} 
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
      ) : (
        <p className="d-flex align-items-center justify-content-center">No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
