import React, { useState, useEffect } from 'react';

const ProductCatalog = () => {
  // Sample product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/150'
    }
  ]);

  // Use useEffect to fetch product data from an API
  useEffect(() => {
    // Fetch products from an API
    // For example:
    // fetch('/api/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
