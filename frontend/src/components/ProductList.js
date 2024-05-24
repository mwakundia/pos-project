import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
