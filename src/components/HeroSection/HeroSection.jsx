import React from "react";
 import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section id="inicio" className="hero d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="hero-titulo">
          Comercio Digital a pocos clicks de distancia
        </h1>
        <p className="hero-parrafo">
          Descubre cómo el comercio digital está transformando la manera en que conectamos con el mundo.
        </p>
        <div>
          <a className="hero-ancla" href="#productos">
            Mira nuestros productos aquí!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
