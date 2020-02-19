import React from 'react';

import './App.scss';
import { findByLabelText } from '@testing-library/react';

function App() {
  return (
    <div className='main' style ={{display: 'flex', flexDirection: 'row'}}>
      <div className="Nav" style = {{flex: 1, maxWidth: '240px', height: '100vh', backgroundColor: 'white'}}>
      </div>
      <div className='solution_container' style ={{flex: 5}}>
          
      </div>
    </div>
  );
}

export default App;
