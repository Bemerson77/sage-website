import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  socialLink: {
    textDecoration: 'none'
  },
  socialIcons: {
    fontSize: '30px',
    margin: '5px',
    color: 'rgba(178, 186, 165, 1)'
  },
}));

function Footer() {
  const classes = useStyles();

  function FooterSocial() {
    return(
      <div>
        <a className={classes.socialLink} href="https://www.facebook.com/SageSalon19/" target="_blank">
          <FontAwesomeIcon className={classes.socialIcons} icon={faFacebook} />
        </a>
        <a className={classes.socialLink} href="https://www.instagram.com/sagesalon19/" target="_blank">
          <FontAwesomeIcon className={classes.socialIcons} icon={faInstagram} />
        </a>
      </div>

    )
  }

  function FooterInfo() {
    return(
      <p>hello1</p>
    )
  }

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FooterSocial />
          </Grid>
          <Grid item xs={12}>
            <FooterInfo />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
