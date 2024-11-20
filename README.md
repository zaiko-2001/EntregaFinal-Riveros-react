# E-Commerce React App

## Descripción

Esta es una aplicación de e-commerce simple construida utilizando **REACT**. La aplicación cuenta con una barra de navegación responsiva, un widget de carrito de compras y un contenedor de mensajes de bienvenida. Además, implementa rutas para navegar entre diferentes categorías y productos, y proporciona la funcionalidad para mostrar detalles de los productos seleccionados.

## Características

- **Barra de Navegación Responsiva**: Una barra de navegación construida con **Bootstrap** que contiene enlaces a diferentes secciones de la aplicación, como el inicio, las categorías, el carrito y más.

- **Widget de Carrito de Compras**: Un ícono de carrito de compras en el navbar que muestra un conteo de ítems **hardcodeado**, permitiendo al usuario ver la cantidad de productos en el carrito.


- **Visualización de Productos por Categoría**: Las categorías de productos, como "Tazas" y "Platos", están accesibles desde el navbar. Al hacer clic en una categoría, la aplicación muestra solo los productos que pertenecen a esa categoría.

- **Detalle de Producto**: Al hacer clic en un producto, el usuario puede ver una página detallada con información completa sobre el producto seleccionado.

## Rutas Configuradas

- `/` - Navega a la página principal donde se muestran todos los productos de ambas categorías.
- `/category/:categoryId` - Muestra los productos correspondientes a la categoría seleccionada (`tazas`, `platos`, etc.).
- `/item/:id` - Muestra el detalle de un producto específico, según el `id`.

## Funcionalidad de Navegación

- **Click en el Brand**: Al hacer clic en el logo o el nombre de la marca, el usuario es redirigido a la página de inicio (`/`).
- **Click en un Producto**: Al hacer clic en un producto, el usuario es redirigido a la página del producto con su detalle completo en `/item/:id`.
- **Click en una Categoría**: Al hacer clic en una categoría en el navbar, el usuario es redirigido a la página que muestra los productos de esa categoría en `/category/:categoryId`.

## Uso de Hooks

- **`useParams()`**: Utilizado para obtener parámetros de la URL como `categoryId` y `id` de los productos, permitiendo cargar datos específicos para cada categoría o producto.
- **`useEffect()`**: Utilizado para cargar los productos y detalles de los productos según los parámetros de la URL, asegurando que la información se actualice dinámicamente cuando se navega entre diferentes categorías o productos.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/PreEntrega2-Riveros-react.git
