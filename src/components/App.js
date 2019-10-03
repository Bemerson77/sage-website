import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import salonImg from '../img/SageSalon105.jpg';
import '../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  salonImg: {
    height: '60vmin'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={salonImg} className={classes.salonImg} alt="logo" />
          </Grid>
          <Grid item xs={12}>
            <h1 className="coming-soon-txt">Coming Soon!</h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
