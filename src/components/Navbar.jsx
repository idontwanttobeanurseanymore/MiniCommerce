import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Tiendita</h1>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>

        <li className="navbar__item">
          <Link to="/cart" className="navbar__link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
