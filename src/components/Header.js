import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function HeaderComponent (){
  return (
    <div className="header-outer">
      

    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/services"> Services </Link>
      </li>
      <li>
        <Link to="/team"> Team </Link>
      </li>
    </ul>
    </div>
  )
}

export default HeaderComponent;
