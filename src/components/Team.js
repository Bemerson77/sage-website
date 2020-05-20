import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import '../App.scss';
import salonImg from '../img/SageSalon117.jpg';
import brittanyImg from '../img/SageSalon24.jpg';
import katieImg from '../img/SageSalon34.jpg';
import alliImg from '../img/SageSalon45.jpg';
import sageImg from '../img/SageSalon62.jpg';
import amberImg from '../img/SageSalon17.jpg';
import tonyaImg from '../img/SageSalon08.jpg';
import mimiImg from '../img/SageSalon51.jpg';
import carmenImg from '../img/SageSalon06.jpg';
import hollyImg from '../img/SageSalon83.jpg';
import maryImg from '../img/SageSalon38.jpg';
import BannerComponent from './Banner';

function TeamComponent (){


 return (
  <div>
    <BannerComponent imgPath={salonImg} />
    <div className="stylist-outer">
      <StylistComponent />
    </div>
  </div>

 )
}


function StylistComponent() {

  return (
    <div>
      <Container maxWidth="md">
        <Grid container direction={'row'}>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${hollyImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Holly Chapman</h1>
                <h3 className="team-title"> Owner and Stylist</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${sageImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Sage Chapman</h1>
                <h3 className="team-title">Stylist and Makeup Artist</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${brittanyImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Brittany Porter</h1>
                <h3 className="team-title">Stylist</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${alliImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Alli Taylor</h1>
                <h3 className="team-title">Stylist and Makeup Artist</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${katieImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Katie Broome</h1>
                <h3 className="team-title">Stylist</h3>
              </div>
            </div>
          </div>
        </Grid>
        
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${amberImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Amber Trull</h1>
                <h3 className="team-title">Stylist</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${mimiImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Mimi Nguyen</h1>
                <h3 className="team-title">Lash Artist and Stylist</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${tonyaImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Tonya Taylor</h1>
                <h3 className="team-title">Receptionist and Spray Tans</h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="stylist-img-outer">
          <div className="team-member-outer">
            <div className="team-member" style={{ background: `url(${carmenImg}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>
              <div className="txt-wrapper">
                <h1 className="team-name">Carmen Lopez</h1>
                <h3 className="team-title">Lash Artist</h3>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      </Container>

    </div>
  )
}

export default TeamComponent;
