import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Importar funciones de Firestore
import db from "../../firebase"; // Asegúrate de que la ruta sea correcta
import SuggestedProducts from "./SuggestedProducts/SuggestedProducts";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams(); // Aquí obtienes el ID del documento de Firestore
  console.log(id); // Asegúrate de que el id se obtiene correctamente desde la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducto = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "products", id); // Usar el id de Firestore directamente
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProducto(docSnap.data()); // Guardar la data del producto en el estado
      } else {
        console.log("No se encontró el producto");
        setProducto(null);
      }
    } catch (error) {
      console.error("Error al cargar el producto:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducto();
  }, [id]); // El efecto se ejecutará cada vez que cambie el id

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
            currentProductId={id} // Usamos el id correcto para los productos sugeridos
            currentProductCategory={producto?.categoria} // Usamos la categoría del producto
          />
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
