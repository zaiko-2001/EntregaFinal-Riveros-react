import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { collection, getDocs } from "firebase/firestore"; // Importar Firestore
import db from "../../../firebase"; // Tu configuración de Firebase
import "./CartSideBar.css";

const CartSideBar = () => {
  const { cart, removeItem, clearCart, totalItems, isSidebarOpen, toggleSidebar } = useCart();
  const [productosFirestore, setProductosFirestore] = useState([]); // Productos desde Firestore

  // Fetch de productos desde Firestore
  const fetchProductos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products")); // Colección de productos
      const productos = [];
      querySnapshot.forEach((doc) => {
        productos.push({ id: doc.id, ...doc.data() }); // Añadir id y data
      });
      setProductosFirestore(productos);
      console.log("Productos cargados desde Firestore:", productos); // Verificación de los productos cargados
    } catch (error) {
      console.error("Error al obtener productos desde Firestore:", error);
    }
  };

  useEffect(() => {
    fetchProductos(); // Llamada inicial para obtener los datos
  }, []);

  // Calcular el total del carrito sincronizando con Firestore
  const calculateTotal = () => {
    if (productosFirestore.length === 0) {
      console.log("Esperando a que los productos se carguen...");
      return 0; // No calcular el total hasta que los productos estén cargados
    }

    console.log("Calculando total..."); // Log para ver el inicio del cálculo

    return cart.items.reduce((total, item) => {
      // Buscar el producto en Firestore
      const productoFirestore = productosFirestore.find((prod) => prod.id === item.id);
      if (!productoFirestore) {
        console.log(`Producto no encontrado en Firestore: ${item.id}`);
      }

      const precio = productoFirestore ? productoFirestore.precio : item.precio;
      console.log(`Calculando total: Producto ${item.id} Precio ${precio} Cantidad ${item.quantity}`);
      
      return total + precio * item.quantity;
    }, 0);
  };

  return (
    <>
      {/* Sidebar del carrito */}
      <div id="carrito-sidebar" className={isSidebarOpen ? "show" : ""}>
        <div className="carrito-header">
          <h4>Tu Carrito</h4>
          <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        </div>

        <div id="carrito-items">
          {cart.items.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            cart.items.map((item) => {
              const productoFirestore = productosFirestore.find((prod) => prod.id === item.id);
              return (
                <CartItem
                  key={item.id}
                  item={{
                    ...item,
                    precio: productoFirestore ? productoFirestore.precio : item.precio,
                  }}
                  removeItem={removeItem}
                />
              );
            })
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <strong>Total:</strong>
          <span>${calculateTotal()}</span>
        </div>
        <Link to="/checkout" className="btn btn-confirmar">
        Finalizar Compra
      </Link>
      </div>
    </>
  );
};

export default CartSideBar;
