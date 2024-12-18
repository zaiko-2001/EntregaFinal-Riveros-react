// CartWidget.js
import React from "react";
import { useCart } from "../../context/CartContext";
import CartSideBar from "../CartSideBar/CartSideBar";
import "./CartWidget.css";

function CartWidget() {
  const { totalItems, toggleSidebar } = useCart();

  return (
    <span className="carrito" onClick={toggleSidebar}>
      <i className="bi bi-cart icon cart-widget"></i>
      {totalItems > 0 && <span>{totalItems}</span>} {/* Muestra el contador solo si hay productos */}
    </span>
  );
}

export default CartWidget;
