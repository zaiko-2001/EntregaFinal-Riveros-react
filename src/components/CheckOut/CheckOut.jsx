import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalItems, removeItem, closeSidebar } = useCart(); // Traemos la función closeSidebar desde el contexto

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  useEffect(() => {
    // Cerramos el carrito cuando lleguemos a la página de checkout
    closeSidebar();
  }, [closeSidebar]); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Resumen de Compra</h2>

      <div className="checkout-items mb-4">
        {cart.items.length === 0 ? (
          <p className="text-center">No tienes productos en tu carrito.</p>
        ) : (
          cart.items.map((item) => (
            <div key={item.id} className="row mb-3 align-items-center">
              <div className="col-4">
                <img
                  src={`/assets/${item.imagen}`}
                  alt={item.nombre}
                  className="img-fluid"
                  style={{
                    maxHeight: "150px",
                    maxWidth: "auto",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div className="col-8">
                <h4>{item.nombre}</h4>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: <strong>${item.precio}</strong></p>
                {/* Botón para eliminar el producto (solo reduce la cantidad) */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="checkout-total text-right mb-4">
        <h4><strong>Total: ${calculateTotal()}</strong></h4>
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-confirmar">Confirmar Compra</button>
        <Link to="/" className="btn btn-vermas">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default Checkout;
