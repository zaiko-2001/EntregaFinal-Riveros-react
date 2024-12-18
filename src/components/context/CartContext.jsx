import React, { createContext, useContext, useReducer, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// Crea el contexto
export const CartContext = createContext();

// Estado inicial del carrito
const initialState = {
  items: [],
};

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };

    case "REMOVE_ITEM":
      const updatedItems = state.items
        .map((item) => {
          if (item.id === action.payload) {
            // Si la cantidad es mayor a 1, restamos 1
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            // Si la cantidad es 1, eliminamos el item
            return null;
          }
          return item;
        })
        .filter((item) => item !== null); // Filtramos los productos null

      return {
        ...state,
        items: updatedItems,
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar el sidebar

  const addItem = (product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity } });

    // Mostrar notificación de Toastify cuando el producto se agrega al carrito
    Toastify({
      text: `${product.nombre} ha sido agregado al carrito.`,
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      backgroundColor: "#4caf50",
    }).showToast();
  };

  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Función para cambiar el estado del sidebar
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Función para cerrar el sidebar
  };

  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        isSidebarOpen, // Pasamos el estado al contexto
        toggleSidebar, // Pasamos la función para alternar el estado del sidebar
        closeSidebar, // Pasamos la función para cerrar el sidebar
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);
