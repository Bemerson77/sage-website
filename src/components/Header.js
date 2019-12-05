import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import '../styles/header.scss';
import sageLogo from '../img/Sage-logo-round.png';

function HeaderComponent (){
  return (
    <div className="header-outer">
      <div className="header-inner">
        <div className="logo-wrapper">
          <img src={sageLogo} className="sage-logo" alt="logo" />
        </div>
        <ul className="nav-link-outer">
          <li className="nav-link-item">
            <Link to="/"> Home </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/services"> Services </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/team"> Team </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent;
