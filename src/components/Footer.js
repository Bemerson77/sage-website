import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../App.scss';

function Footer() {

  return (
    <div className="footer-outer">
      <p>Copyright &copy; 2019 Sage Salon</p>
    </div>
  );
}

export default Footer;
