import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
    </div>
  );
}
