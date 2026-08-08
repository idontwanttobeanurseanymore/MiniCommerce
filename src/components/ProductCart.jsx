//tarjeta de cada producto
import React from "react";

export default function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      <h3 className="product-card__title">Lorem ipsum product</h3>
      <p className="product-card__price">99.99€</p>
      <button className="product-card__button">Ver producto</button>
    </div>
  );
}
