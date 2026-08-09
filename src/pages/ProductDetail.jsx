import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productsService";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Error al cargar el producto");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="product-detail__loading">Cargando producto...</p>;
  }

  if (error) {
    return <p className="product-detail__error">Error: {error}</p>;
  }

  if (!product) {
    return <p className="product-detail__error">Producto no encontrado.</p>;
  }

  return (
    <div className="product-detail">
      <h2 className="product-detail__title">{product.title}</h2>

      <div className="product-detail__content">
        <img
          src={product.image}
          alt={product.title}
          className="product-detail__image"
        />

        <p className="product-detail__price">{product.price} €</p>

        <p className="product-detail__description">{product.description}</p>
      </div>
    </div>
  );
}
