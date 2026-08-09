import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.length > 99 ? "99+" : cartItems.length;
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
            {totalItems > 0 && (
              <span className="navbar__badge">{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
