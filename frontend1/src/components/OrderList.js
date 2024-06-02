import React, { useContext } from 'react';
import { OrderContext } from '../contexts/OrderContext';

const OrderList = () => {
  const { orders } = useContext(OrderContext);

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <h4>Order #{order.id}</h4>
          <p>Status: {order.status}</p>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
