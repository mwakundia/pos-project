import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ProductContext } from '../contexts/ProductContext';
import { OrderContext } from '../contexts/OrderContext';
import ProductList from './ProductList';
// Import other components or utilities as needed

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { products } = useContext(ProductContext);
  const { orders } = useContext(OrderContext);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <h2>Dashboard</h2>
      <div>
        <h3>Products</h3>
        <ProductList />
      </div>
      <div>
        <h3>Orders</h3>
        {/* Render a list of orders or a component that handles this */}
      </div>
      <div>
        <h3>User Management</h3>
        {/* Render a user management component if needed */}
      </div>
      {/* Add more sections or components as needed */}
    </div>
  );
};

export default Dashboard;
