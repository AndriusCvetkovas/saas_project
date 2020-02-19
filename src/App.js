import React from 'react';

import './App.scss';
import ProductPage from './pages/Product';

function App() {
  return (
    <div className='main' style ={{display: 'flex', flexDirection: 'row'}}>
      <div className="Nav" style = {{flex: 1, maxWidth: '240px', minWidth:'240px', height: '100', backgroundColor: 'white'}}>
      </div>
      <div className='solution_container' style ={{flex: 5}}>
          <ProductPage/>
      </div>
    </div>
  );
}

export default App;
