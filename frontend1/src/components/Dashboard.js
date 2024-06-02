import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ProductContext } from '../contexts/ProductContext';
import { OrderContext } from '../contexts/OrderContext';
import ProductList from './ProductList';
import OrderList from './OrderList';
import UserManagement from './UserManagement';

const Dashboard = () => {
  const { user } = useContext(UserContext);

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
        <OrderList />
      </div>
      <div>
        <h3>User Management</h3>
        <UserManagement />
      </div>
    </div>
  );
};

export default Dashboard;
