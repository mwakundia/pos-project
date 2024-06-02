import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
