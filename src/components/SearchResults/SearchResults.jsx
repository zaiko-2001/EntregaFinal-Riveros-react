import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q"); // Extrae la consulta de la URL
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar todos los productos
  const fetchProductos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/products.json"); // Ruta del archivo JSON
      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar productos según la consulta
  useEffect(() => {
    fetchProductos();
  }, []);

  useEffect(() => {
    if (query && productos.length > 0) {
      const resultados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProductos(resultados);
    } else {
      setFilteredProductos([]);
    }
  }, [query, productos]);

  return (
    <div className="container mt-4">
      <h4>Resultados para: "{query}"</h4>
      {loading ? (
        <p>Cargando resultados...</p>
      ) : filteredProductos.length > 0 ? (
        <div className="row">
          {filteredProductos.map((producto) => (
            <div key={producto.id} className="col-6 col-md-3 mb-4">
              <div className="card h-100">
                <img
                  src={`/assets/${producto.imagen}`}
                  alt={producto.nombre}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">Precio: ${producto.precio}</p>
                  <Link
                    to={`/item/${producto.id}`}
                    className="btn btn-vermas btn-sm"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default SearchResults;
