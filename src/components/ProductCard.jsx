import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />

        <h3 className="product-card__title">{product.title}</h3>

        <p className="product-card__price">${product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
}
