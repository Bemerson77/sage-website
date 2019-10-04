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
    fontSize: '40px',
    margin: '5px',
    color: 'rgba(178, 186, 165, 1)'
  },
  infoBorder: {
    marginRight: '10px',
    paddingRight: '10px',
    borderRight: '1px solid #000000'
  },
}));

function Footer() {
  const classes = useStyles();

  function FooterSocial() {
    return(
      <div>
        <a className={classes.socialLink} href="https://www.facebook.com/SageSalon19/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className={classes.socialIcons} icon={faFacebook} />
        </a>
        <a className={classes.socialLink} href="https://www.instagram.com/sagesalon19/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className={classes.socialIcons} icon={faInstagram} />
        </a>
      </div>

    )
  }

  function FooterInfo() {
    return(
      <div>
        <a href='mailto:sagesalon730@gmail.com' className={classes.infoBorder}>sagesalon730@gmail.com</a>
        <a href='tel:864-349-1309' className={classes.infoBorder}>864-349-1309</a>
        <a href='https://www.google.com/maps/place/730+S+Pleasantburg+Dr+Suite+M,+Greenville,+SC+29607/data=!4m2!3m1!1s0x88582fc1d5fa241d:0x8955f0c0780fa530?sa=X&ved=2ahUKEwjxmaC9u4HlAhUOCKwKHcMJD-EQ8gEwAHoECAoQAQ' rel="noopener noreferrer" target='_blank'>730 S Pleasantburg Dr Suite M Greenville, SC</a>
      </div>
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
