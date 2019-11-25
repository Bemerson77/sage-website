import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomeComponent from './Home.js';
import ServicesComponent from './Services.js';
import TeamComponent from './Team.js';
import HeaderComponent from './Header';

class App extends React.Component {
  render() {
  return (
    <Router>
        <div>
          <HeaderComponent />

          <Route exact path='/' component={HomeComponent}></Route>
          <Route exact path='/services' component={ServicesComponent}></Route>
          <Route exact path='/team' component={TeamComponent}></Route>
        </div>
      </Router>
  );
}
}

export default App;
