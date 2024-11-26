import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SuggestedProducts from "./SuggestedProducts/SuggestedProducts";
import ItemDetail from "./ItemDetail/ItemDetail";
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
          <ItemDetail producto={producto} />
          {/* Productos sugeridos */}
          <SuggestedProducts
            currentProductId={id}
            currentProductCategory={producto?.categoria}
          />
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
