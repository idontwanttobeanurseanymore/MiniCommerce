import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import { getAllProducts, getCategories } from "../services/productsService";

export default function Home() {
  const { products, loading, error } = useProducts();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };

    loadData();
  }, []);

  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "all" ? true : p.category === selectedCategory,
    )
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.trim().toLowerCase()),
    );

  if (loading) {
    return <p className="home__loading">Cargando productos...</p>;
  }

  if (error) {
    return <p className="home__error">{error} Error al cargar productos.</p>;
  }
  return (
    <div className="home">
      <h2 className="home__title">Productos</h2>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">Todas</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <ProductList products={filteredProducts} />
    </div>
  );
}
