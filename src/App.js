import React from 'react';
import salonImg from './img/SageSalon105.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={salonImg} className="salon-img" alt="logo" />
      <h1 className="coming-soon-txt">Coming Soon!</h1>
    </div>
  );
}

export default App;
