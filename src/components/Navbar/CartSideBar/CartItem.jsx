import React from "react";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="carrito-item">
      <img
        src={`/assets/${item.imagen}`} // Suponiendo que la imagen viene en el estado global
        alt={item.nombre}
        className="carrito-img"
      />
      <span>{item.nombre}</span>
      <span>
         <strong>${item.precio}</strong> {item.quantity}
      </span>
      <button
        className="close-btn"
        onClick={() => removeItem(item.id)}
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
