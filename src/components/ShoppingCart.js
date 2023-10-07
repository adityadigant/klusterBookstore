import React from 'react';
import { useCart } from '../CartContext';
import "../styles/ShoppingCart.css"

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>Author: {item.author}</p>
            <p>Price: ${item.price}</p>
            <div className="quantity">
              <button
                onClick={() => {
                  if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
                }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <strong>Total: ${calculateTotalPrice()}</strong>
      </div>
    </div>
    
  );
};

export default ShoppingCart;
