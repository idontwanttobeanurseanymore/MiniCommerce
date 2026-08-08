//navegación
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar__logo">SwiftCart</h2>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/cart" className="navbar__link">
          Cart
        </Link>
      </div>
    </nav>
  );
}
