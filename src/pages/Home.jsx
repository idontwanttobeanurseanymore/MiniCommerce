import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllProducts } from "../services/productsService";

export default function Home() {
  useEffect(() => {
    async function load() {
      const products = await getAllProducts();
      console.log(products);
    }

    load();
  }, []);
  return (
    <div className="home">
      <h2 className="home__title">Home</h2>
      <ul className="home__list">
        <li className="home__item">
          <Link to="/product/1" className="home__link">
            Ver producto 1
          </Link>
        </li>

        <li className="home__item">
          <Link to="/product/2" className="home__link">
            Ver producto 2
          </Link>
        </li>
      </ul>
    </div>
  );
}
