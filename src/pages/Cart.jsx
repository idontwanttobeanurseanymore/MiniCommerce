import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }

    return acc;
  }, []);
  const total = groupedItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return <p>Tu carrito está vacío</p>;
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Carrito</h2>

      {groupedItems.map((item) => (
        <div key={item.id} className="cart__item">
          <img src={item.image} alt={item.title} className="cart__image" />

          <div className="cart__info">
            <h3 className="cart__name">{item.title}</h3>
            <p className="cart__price">{item.price}€</p>
            <p className="cart__quantity">Cantidad: {item.quantity}</p>
          </div>
          <div className="cart__controls">
            <button
              className="cart__btn"
              onClick={() => removeFromCart(item.id)}>
              -
            </button>

            <span className="cart__quantity-number">{item.quantity}</span>

            <button className="cart__btn" onClick={() => addToCart(item)}>
              +
            </button>
          </div>
        </div>
      ))}
      <div className="cart__summary">
        <h3 className="cart__total">Total: {total.toFixed(2)}€</h3>
      </div>
    </div>
  );
}
