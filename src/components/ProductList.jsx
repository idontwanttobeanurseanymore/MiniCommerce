import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-list__item">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
