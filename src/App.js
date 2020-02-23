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
      </div>
      <div className='solution_container'>
          <SalesPage/>
      </div>
    </div>
  );
}

export default App;
