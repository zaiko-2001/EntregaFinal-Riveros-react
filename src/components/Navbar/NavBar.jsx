import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#631A86" }}
    >
      <div className="container px-4">
        <Link className="navbar-brand" to="/">
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "26px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            MercadoMágico
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{ fontWeight: 500 }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/tazas">
                TAZAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/platos">
                PLATOS
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                CONTACTO
              </a>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" id="toggleCarrito">
                <CartWidget />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
