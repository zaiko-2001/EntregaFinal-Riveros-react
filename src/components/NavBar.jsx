import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CartWidget from "./CartWidget";


function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{ backgroundColor: "#631A86" }}
      >
        {" "}
        <div className="container px-4">
          {" "}
          <a className="navbar-brand" href="/">
            {" "}
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "26px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              {" "}
              MercadoMágico
            </span>{" "}
          </a>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon"></span>{" "}
          </button>{" "}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {" "}
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ fontWeight: 500 }}
            >
              {" "}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#inicio">
                  INICIO
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#productos">
                  PRODUCTOS
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#footer">
                  CONTACTO
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <button className="nav-link" id="toggleCarrito">
                 <CartWidget/>
                </button>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </nav>
    </>
  );
}

export default NavBar;
