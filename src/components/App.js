import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import salonImg from '../img/SageSalon105.png';
import sageLogo from '../img/sage-logo.png'
import '../App.css';
import Footer from './Footer.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  salonImg: {
    height: '60vmin'
  },
  sageLogo: {
    height: '150px'
  },
  logoWrapper: {
    marginTop: '30px'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid className={classes.logoWrapper} item xs={12}>
            <img src={sageLogo} className={classes.sageLogo} alt="logo" />
          </Grid>
          <Grid item xs={12}>
            <img src={salonImg} className={classes.salonImg} alt="logo" />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
