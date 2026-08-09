import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const { products, loading, error } = useProducts();
  if (loading) {
    return <p className="home__loading">Cargando...</p>;
  }

  if (error) {
    return <p className="home__error">{error}</p>;
  }
  return (
    <div className="home">
      <h2 className="home__title">Home</h2>
      <ul className="home__list">
        {products.map((product) => (
          <li key={product.id} className="home__item">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
