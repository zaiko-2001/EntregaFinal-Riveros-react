import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { collection, getDocs } from "firebase/firestore"; // Importar funciones de Firebase
import db from "../../../firebase"; // Importa tu configuración de Firebase

const ItemList = () => {
  const { addItem } = useCart();
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true);

  // Función para cargar los productos desde Firebase
  const fetchProductos = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products")); // Trae todos los documentos de la colección "products"
      const productosArray = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Incluye el id del documento de Firebase
        ...doc.data(), // Incluye los demás campos del documento
      }));
      setProductos(productosArray); // Guarda los productos en el estado
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos(); // Cargar productos al montar el componente
  }, []);

  const handleAddToCart = (producto) => {
    addItem({ ...producto, quantity: 1 });
  };

  return (
    <div className="row" id="productos">
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        productos.map((producto) => (
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
                <button
                  className="btn btn-carrito"
                  onClick={() => handleAddToCart(producto)}
                >
                  <i className="bi bi-cart icon"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
