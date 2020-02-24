import React, {useEffect} from 'react';

import './App.scss';
import ProductPage from './pages/Product';
import SalesPage from './pages/Sales';
import AddProductPage from './pages/Add_Product'
import AddOrders from './pages/Add_Orders';
import { BrowserRouter, Route, NavLink, Link, Switch, useLocation } from "react-router-dom";

function App() {
  const usePage = () => {
      
  }
  return (
    <BrowserRouter>
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
            <NavLink 
              activeStyle={{
                fontWeight: "bold",
                fontSize: 16
              }} 
            to ='/Orders'>Orders</NavLink>
            <div>Returns</div>
            <div>Invoice</div>
            <div>Shipping</div>
          </div>
          <div className='inventory_section wrap'>
            <h1>Inventory</h1>
            <NavLink 
              activeStyle={{
              fontWeight: "bold",
              fontSize: 16
            }} 
            to='/Inventory'>Overviews</NavLink>
            <div>Templates</div>
          </div>
          <div className='customer_section wrap'>
            <h1>Customer</h1>
          </div>
        </div>
      </div>
      
      <div className='solution_container'>
        <Switch>
          <Route path="/Orders">
            <SalesPage/>
          </Route>
          <Route path="/Inventory">
            <ProductPage usePageViews = {usePage()} />
          </Route>
          <Route path="/addeditProduct">
            <AddProductPage />
          </Route>
          <Route path="/addOrder">
            <AddOrders />
          </Route>
        </Switch>
          
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
