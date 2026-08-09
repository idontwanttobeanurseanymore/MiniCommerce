import React from "react";

export default function Cart() {
  return (
    <div className="cart">
      <h2 className="cart__title">Carrito</h2>
      <div className="cart__items">
        <p className="cart__placeholder">Tu carrito está vacío.</p>
      </div>
    </div>
  );
}
