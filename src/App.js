import React from 'react';

import './App.scss';
import ProductPage from './pages/Product';
import AddProductPage from './pages/Add_Product';
import AddOrders from './pages/Add_Orders';

function App() {
  return (
    <div className='main'>
      <div className="Nav">
      </div>
      <div className='solution_container'>
          <AddOrders/>
      </div>
    </div>
  );
}

export default App;
