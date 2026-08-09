import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";

export default function Home() {
  const { products, loading, error } = useProducts();
  if (loading) {
    return <p className="home__loading">Cargando productos...</p>;
  }

  if (error) {
    return <p className="home__error">{error} Error al cargar productos.</p>;
  }
  return (
    <div className="home">
      <h2 className="home__title">Productos</h2>

      <ProductList products={products} />
    </div>
  );
}
