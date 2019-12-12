import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomeComponent from './Home.js';
import ServicesComponent from './Services.js';
import TeamComponent from './Team.js';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

class App extends React.Component {
  // componentDidUpdate(prevProps) {
  //       if (this.props.location.pathname !== prevProps.location.pathname) {
  //           console.log('Route change!');
  //       }
  //   }

  render() {

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <HeaderComponent />

          <Route exact path='/' component={HomeComponent}></Route>
          <Route exact path='/services' component={ServicesComponent}></Route>
          <Route exact path='/team' component={TeamComponent}></Route>

          <FooterComponent />
        </div>
      </Router>
  );
}
}

export default App;
