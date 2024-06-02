
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import { OrderProvider } from './contexts/OrderContext';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <ProductProvider>
          <OrderProvider>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/products" component={ProductList} />
            </Switch>
          </OrderProvider>
        </ProductProvider>
      </UserProvider>
    </Router>
  );
};

export default App;