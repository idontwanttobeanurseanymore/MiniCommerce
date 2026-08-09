import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div className="product-detail">
      <h2 className="product-detail__title">Producto {id}</h2>
      <div className="product-detail__content">
        <p className="product-detail__text">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
