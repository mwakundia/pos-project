import React, { useState } from 'react';

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      quantity: 3,
    }
  ]);

  // Calculate total cost
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <h3>Total Cost: ${calculateTotal()}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
