import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  // Link,
  HashRouter
} from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import HomeComponent from './Home.js';
import ServicesComponent from './Services.js';
import TeamComponent from './Team.js';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

function App() {
  return (
    <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <HeaderComponent />
          <Routes>
            <Route exact path='/' element={<HomeComponent />}></Route>
            <Route exact path='/services' element={<ServicesComponent />}></Route>
            <Route exact path='/team' element={<TeamComponent />}></Route>
          </Routes>
          <FooterComponent />
        </div>
      </HashRouter>
    );
  }

  export default App;
