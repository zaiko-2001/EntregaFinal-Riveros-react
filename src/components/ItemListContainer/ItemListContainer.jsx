import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Nuestros Productos";
      case "/category/tazas":
        return "Tazas";
      case "/category/platos":
        return "Platos";
      default:
        return "Productos";
    }
  };

  const fetchProductos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/products.json");
      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }
      const data = await response.json();

      const productosFiltrados = categoryId
        ? data.filter((producto) => producto.categoria === categoryId)
        : data;

      setProductos(productosFiltrados);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, [categoryId]);

  return (
    <div>
      {location.pathname === "/" && <HeroSection />}
      <h1 className="d-flex align-items-center justify-content-center">{getTitle()}</h1>
      {loading ? (
        <p className="d-flex align-items-center justify-content-center">Cargando productos...</p>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} /> // Renderiza el nuevo componente
      ) : (
        <p className="d-flex align-items-center justify-content-center">
          No hay productos disponibles en esta categoría.
        </p>
      )}
    </div>
  );
};

export default ItemListContainer;
