import React, {useEffect} from 'react';

import './App.scss';
import ProductPage from './pages/Product';
import SalesPage from './pages/Sales';
import AddProductPage from './pages/Add_Product'
import AddOrders from './pages/Add_Orders';
import PricingPage from './pages/PricingPlan';
import CheckOutPage from './pages/CheckOutPage';
import Nav from './comps/Nav';
import { BrowserRouter, Route, NavLink, Link, Switch, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='main'>
      <CheckOutPage/>
      {/* <Nav/>
      <div className='solution_container'>
       <Switch>
          <Route path="/Orders">
            <SalesPage/>
          </Route>
          <Route path="/Inventory">
            <ProductPage />
          </Route>
          <Route path="/addeditProduct">
            <AddProductPage />
          </Route>
          <Route path="/addOrder">
            <AddOrders />
          </Route>
        </Switch> 
        <PricingPage />
      </div>*/}
    </div>
    </BrowserRouter>
  );
}

export default App;
