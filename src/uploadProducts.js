import { collection, addDoc } from "firebase/firestore";
import db from "./firebase.js";

const products = [
    {
      "id": 1,
      "nombre": "Set de Café Rústico",
      "descripcion": "Disfruta de un momento de tranquilidad con nuestro Set de Café Rústico.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 10000,
      "imagen": "taza 1.jpeg"
    },
    {
      "id": 2,
      "nombre": "Taza Minimalista Floreada",
      "descripcion": "Disfruta de tus bebidas favoritas con estilo gracias a nuestra Taza Minimalista Floreada.",
      "categoria": "tazas",
      "material": "Porcelana",
      "tamaño": "7 x 10 cm",
      "capacidad": "250 ml",
      "precio": 5000,
      "imagen": "taza 2.jpeg"
    },
    {
      "id": 3,
      "nombre": "Taza Gatito Encantador",
      "descripcion": "Añade un toque de ternura a tu rutina diaria con nuestra Taza Gatito Encantador.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 6000,
      "imagen": "taza 3.jpeg"
    },
    {
      "id": 4,
      "nombre": "Taza Sinfonía Gatuna",
      "descripcion": "Esta taza celebra la melodía de la creatividad con gatos tocando instrumentos musicales.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5000,
      "imagen": "taza 4.png"
    },
    {
      "id": 5,
      "nombre": "Taza Partida Canina",
      "descripcion": "Esta taza captura la diversión y originalidad de una partida de póker entre perros caricaturizados.",
  "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5700,
      "imagen": "taza 5.png"
    },
    {
      "id": 6,
      "nombre": "Taza el Universo en tus Manos",
      "descripcion": "Esta taza te lleva en un viaje por las estrellas con su impresionante diseño de galaxia.",
     "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5500,
      "imagen": "taza 6.png"
    },
    {
      "id": 7,
      "nombre": "Taza Selva Mistíca",
      "descripcion": "Esta taza presenta un diseño de la selva que te transporta a un mundo de aventuras y misterios.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5300,
      "imagen": "taza 7.png"
    },
    {
      "id": 8,
      "nombre": "Taza Bailarinas en el Viento",
      "categoria": "tazas",
      "descripcion": "Esta taza captura el elegante movimiento de las bailarinas, con un diseño pintado que evoca gracia y armonía.",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5600,
      "imagen": "taza 8.png"
    },
    {
      "id": 9,
      "nombre": "Taza Atardecer en la Playa",
      "descripcion": "Esta taza te hará sentir la brisa marina y el sonido de las olas con cada sorbo, perfecta para quienes extrañan el mar.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5500,
      "imagen": "taza 9.png"
    },
    {
      "id": 10,
      "nombre": "Taza Amanecer Dorado",
      "descripcion": "Con tonos cálidos y brillantes, esta taza es perfecta para esos momentos en los que necesitas un poco de sol en tu vida.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5800,
      "imagen": "taza 10.png"
    },
    {
      "id": 11,
      "nombre": "Taza Bosque Encantado",
      "descripcion": "Sumérgete en la tranquilidad de un bosque encantado con esta taza que presenta un diseño de árboles frondosos y criaturas mágicas.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5300,
      "imagen": "taza 11.png"
    },
    {
      "id": 12,
      "nombre": "Taza Anochecer en la Ciudad",
      "descripcion": "Esta taza captura la magia del anochecer, con un diseño pintado que refleja la impresionante mezcla de luces y sombras sobre la ciudad.",
      "categoria": "tazas",
      "material": "Cerámica",
      "tamaño": "8 x 12 cm",
      "capacidad": "300 ml",
      "precio": 5200,
      "imagen": "taza 12.png"
    },
    {
      "id": 13,
      "nombre": "Plato Amanecer en el Mar",
      "descripcion": "Un plato que captura la serenidad del amanecer sobre el océano, con un diseño suave y tonos cálidos.",
      "categoria": "platos",
      "material": "Porcelana",
      "tamaño": "20 cm",
      "capacidad": "No aplicable",
      "precio": 4500,
      "imagen": "Plato Amanecer en el Mar.png"
    },
    {
      "id": 14,
      "nombre": "Plato Bosque Místico",
      "descripcion": "Este plato decorativo refleja la magia de un bosque nublado, con árboles altos y sombras misteriosas.",
      "categoria": "platos",
      "material": "Cerámica",
      "tamaño": "22 cm",
      "capacidad": "No aplicable",
      "precio": 5200,
      "imagen": "Plato Bosque Místico.png"
    },
    {
      "id": 15,
      "nombre": "Plato Aurora Boreal",
      "descripcion": "Un plato inspirado en las luces del norte, con un diseño de colores vibrantes que simulan una aurora boreal.",
      "categoria": "platos",
      "material": "Porcelana",
      "tamaño": "21 cm",
      "capacidad": "No aplicable",
      "precio": 4700,
      "imagen": "Plato Aurora Boreal.png"
    },
    {
      "id": 16,
      "nombre": "Plato Cielo Estrellado",
      "descripcion": "Este plato evoca la belleza de un cielo estrellado, con detalles brillantes que imitan las estrellas.",
      "categoria": "platos",
      "material": "Cerámica",
      "tamaño": "23 cm",
      "capacidad": "No aplicable",
      "precio": 4900,
      "imagen": "Plato Cielo Estrellado.png"
    },
    {
      "id": 17,
      "nombre": "Plato Jardín Secreto",
      "descripcion": "Un plato que presenta un hermoso jardín secreto, con flores exóticas y colores vibrantes.",
      "categoria": "platos",
      "material": "Porcelana",
      "tamaño": "24 cm",
      "capacidad": "No aplicable",
      "precio": 5300,
      "imagen": "Plato Jardín Secreto.png"
    },
    {
      "id": 18,
      "nombre": "Plato Reflejo en el Lago",
      "descripcion": "Este plato captura la paz de un lago al amanecer, con la suave imagen de montañas reflejadas en el agua.",
      "categoria": "platos",
      "material": "Cerámica",
      "tamaño": "20 cm",
      "capacidad": "No aplicable",
      "precio": 4600,
      "imagen": "Plato Reflejo en el Lago.png"
    },
    {
      "id": 19,
      "nombre": "Plato Tormenta Eléctrica",
      "descripcion": "Un plato de diseño audaz, que representa el poder y la energía de una tormenta eléctrica.",
      "categoria": "platos",
      "material": "Porcelana",
      "tamaño": "21 cm",
      "capacidad": "No aplicable",
      "precio": 5100,
      "imagen": "Plato Tormenta Electrica.png"
    },
    {
      "id": 20,
      "nombre": "Plato Desierto Dorado",
      "descripcion": "Este plato decorativo representa la vasta belleza del desierto, con tonos dorados y arenosos.",
      "categoria": "platos",
      "material": "Cerámica",
      "tamaño": "22 cm",
      "capacidad": "No aplicable",
      "precio": 4800,
      "imagen": "Plato Desierto Dorado.png"
    },
    {
      "id": 21,
      "nombre": "Plato Rayo de Sol",
      "descripcion": "Un plato que transmite la energía del sol con colores cálidos y un diseño que imita rayos dorados.",
      "categoria": "platos",
      "material": "Porcelana",
      "tamaño": "23 cm",
      "capacidad": "No aplicable",
      "precio": 5000,
      "imagen": "Plato Rayo de Sol.png"
    },
    {
      "id": 22,
      "nombre": "Plato Oasis Tropical",
      "descripcion": "Este plato decorativo presenta un vibrante oasis tropical, con palmeras y agua cristalina.",
      "categoria": "platos",
      "material": "Cerámica",
      "tamaño": "21 cm",
      "capacidad": "No aplicable",
      "precio": 4600,
      "imagen": "Plato Oasis Tropical.png"
    },
    {
      "id": 23,
      "nombre": "Plato Reflejo de la Luna",
      "descripcion": "Un plato elegante que captura el reflejo de la luna sobre el mar, con un diseño en tonos plateados y azules.",
      "categoria": "platos",
      "material": "Porcelana",
      "tamaño": "20 cm",
      "capacidad": "No aplicable",
      "precio": 4900,
      "imagen": "Plato Reflejo de la Luna.png"
    },
    {
      "id": 24,
      "nombre": "Plato Noche en la Ciudad",
      "descripcion": "Este plato captura la esencia de la ciudad de noche, con luces brillantes y un fondo oscuro y misterioso.",
      "categoria": "platos",
      "material": "Cerámica",
      "tamaño": "22 cm",
      "capacidad": "No aplicable",
      "precio": 5300,
      "imagen": "Plato Noche en la Ciudad.png"
    }
  ]

    // Función para subir los productos a Firestore
const uploadProducts = async () => {
    try {
      // Obtiene la referencia de la colección "products"
      const productsCollection = collection(db, "products");
  
      // Recorre el array de productos y sube cada uno
      for (const product of products) {
        await addDoc(productsCollection, product);
        console.log(`Producto ${product.nombre} subido correctamente.`);
      }
  
      console.log("Todos los productos se han subido a Firestore.");
    } catch (error) {
      console.error("Error subiendo productos:", error);
    }
  };
  
  // Ejecuta la función para subir los productos
  uploadProducts();