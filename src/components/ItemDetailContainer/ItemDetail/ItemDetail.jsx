import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";
import Description from "./Description";
import AddItemButton from "./AddItemButton";

const ItemDetail = ({ producto }) => {
  const { addItem } = useCart(); // Función para agregar al carrito desde el contexto
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada

  // Incrementar y decrementar cantidad
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Agregar producto al carrito
  const handleAddToCart = () => addItem(producto, quantity);

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
        
        {/* Descripción del producto */}
        <Description producto={producto} />

        {/* Selector de cantidad */}
        <ItemQuantitySelector
          quantity={quantity}
          increment={incrementQuantity}
          decrement={decrementQuantity}
        />

        {/* Botones */}
        <div className="botones">
          <Link to={`/`} className="btn btn-vermas me-2">
            Volver
          </Link>
          <AddItemButton onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
