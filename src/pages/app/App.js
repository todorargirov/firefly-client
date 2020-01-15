import React from 'react';
import logo from './logo.svg';

import Example from '../../components/NewAPIs';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Example text='hello' />
      </header>
    </div>
  );
}

export default App;
