import React from 'react';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-center text-white"
      style={{ backgroundColor: 'rgb(99, 26, 134)', padding: '10px 0', marginTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          {/* Sección de información */}
          <div className="col-md-4 mb-3">
            <h5>Sobre Nosotros</h5>
            <p>
              Somos una tienda dedicada a ofrecer los mejores productos digitales a pocos clics de distancia.
            </p>
          </div>

          {/* Sección de contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contáctanos</h5>
            <p>Email: contacto@tienda.com</p>
            <p>Teléfono: +56 9 1234 5678</p>
            <p>Ubicación: Santiago, Chile</p>
          </div>
          {/* Sección de Dónde encontrarnos */}
          <div className="col-md-4 mb-3">
            <h5>¿Dónde encontrarnos?</h5>
            <div style={{ width: '100%', height: '150px', border: '0' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.780164350383!2d-70.6482688844412!3d-33.44819838069758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5c02c9fd2bb%3A0xe1d27c899c877346!2sPlaza%20de%20Armas%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sus!4v1635432511309!5m2!1ses-419!2sus"
                style={{ border: '0', width: '100%', height: '150px' }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 Paulo Riveros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
