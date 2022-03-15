import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../App.scss';
import sageLogo from '../img/sage-logo.png';

function Footer() {

  return (
    <div className="footer-outer">
      <p>Copyright &copy; 2022 Sage Salon</p>
      <div className="footer-logo-wrapper">
        <img src={sageLogo} className="sage-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
