import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../App.scss';
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
        <div className="social-outer">
          <a className="social-link" id="fb-icon" href="https://www.facebook.com/SageSalon19/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="social-icons" icon={faFacebook} />
          </a>
          <a className="social-link" href="https://www.instagram.com/sagesalon19/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon className="social-icons" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent;
