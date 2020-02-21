import React from 'react';

import './App.scss';
import ProductPage from './pages/Product';
import AddProductPage from './pages/Add_Product'

function App() {
  return (
    <div className='main'>
      <div className="Nav">
      </div>
      <div className='solution_container'>
          <AddProductPage/>
      </div>
    </div>
  );
}

export default App;
