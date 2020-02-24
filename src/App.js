import React from 'react';

import './App.scss';
import ProductPage from './pages/Product';
import SalesPage from './pages/Sales';
import AddProductPage from './pages/Add_Product'
import AddOrders from './pages/Add_Orders';

function App() {
  return (
    <div className='main'>
      <div className="Nav">
        <img></img>
        <div className='company_name'>Inspiration Furniture</div>
        <div>
          <div className='dashboard_section wrap'>
            <h1>Dashboard</h1>
            <div>User</div>
            <div>Profile Settings</div>
            <div>Billing Settings</div>
          </div>
          <div className='sales_section wrap'>
            <h1>Sales</h1>
            <div>Orders</div>
            <div>Returns</div>
            <div>Invoice</div>
            <div>Shipping</div>
          </div>
          <div className='inventory_section wrap'>
            <h1>Inventory</h1>
            <div>Overviews</div>
            <div>Templates</div>
          </div>
          <div className='customer_section wrap'>
            <h1>Customer</h1>
          </div>
        </div>
      </div>
      <div className='solution_container'>
          <SalesPage/>
      </div>
    </div>
  );
}

export default App;
