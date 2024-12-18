import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; // Importamos funciones de Firestore
import db from "../../../firebase"; // Importa tu configuración de Firebase

const SuggestedProducts = ({ currentProductId, currentProductCategory }) => {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true);

  // Función para cargar productos desde Firebase
  const fetchProductos = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products")); // Obtenemos todos los productos desde Firestore
      const productosArray = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Incluye el id del documento
        ...doc.data(), // Incluye los demás campos del documento
      }));

      // Filtrar productos diferentes al actual y con la misma categoría
      const productosFiltrados = productosArray.filter(
        (producto) =>
          producto.id !== currentProductId && // Excluir el producto actual
          producto.categoria === currentProductCategory // Coincidir la categoría
      );

      setProductos(productosFiltrados.slice(0, 4)); // Limitar a 4 productos
    } catch (error) {
      console.error("Error al cargar los productos sugeridos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, [currentProductId, currentProductCategory]);

  return (
    <div className="mt-5">
      <h4 className="mb-4 d-flex align-items-center justify-content-center">
        Productos que te podrían gustar
      </h4>
      {loading ? (
        <p>Cargando productos sugeridos...</p>
      ) : (
        <div className="row">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <div key={producto.id} className="col-6 col-md-3 mb-4">
                <div className="card h-100">
                  <img
                    src={`/assets/${producto.imagen}`} // Asegúrate de que la ruta de la imagen sea correcta
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
            ))
          ) : (
            <p>No hay productos sugeridos disponibles.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SuggestedProducts;
