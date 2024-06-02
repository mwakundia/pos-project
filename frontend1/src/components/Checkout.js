import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the checkout form data
    console.log('Checkout details:', formData);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Shipping Information</h3>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Address:</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>City:</label>
          <input 
            type="text" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>State:</label>
          <input 
            type="text" 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input 
            type="text" 
            name="zip" 
            value={formData.zip} 
            onChange={handleChange} 
            required 
          />
        </div>

        <h3>Payment Information</h3>
        <div>
          <label>Card Number:</label>
          <input 
            type="text" 
            name="cardNumber" 
            value={formData.cardNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input 
            type="text" 
            name="expirationDate" 
            value={formData.expirationDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>CVV:</label>
          <input 
            type="text" 
            name="cvv" 
            value={formData.cvv} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
