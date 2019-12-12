import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import '../App.scss';
import salonImg from '../img/SageSalon101.jpg';
import BannerComponent from './Banner';

function HomeComponent (){
  let imgPath = "homeBanner";
  console.log(window.location.pathname);
  return (
    <div>
      <BannerComponent imgPath={salonImg} />
      <div className="home-body">

          <AboutComponent />

      </div>
    </div>
  )
}

function AboutComponent() {
  return (
    <div className="about-outer">
      <Container maxWidth="md">
        <Grid container direction={'row'} className="home-body-inner">
          <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="about-inner">
                <h1 className="about-title">About Sage</h1>
                <p className="about-body">At Sage Salon we pride ourselves on a relaxed, fun environment for all to enjoy. We have a warm and welcoming staff of talented professionals, who have been serving the Upstate for many years. <br/><br/><br/>

                Our goal is to work with you to provide you with the best look possible.
                </p>
              </div>
              <h1 className="about-title">Contact</h1>
              <div className="info-wrapper">
                <h3>Sage Salon</h3>
                <a href='https://www.google.com/maps/place/730+S+Pleasantburg+Dr+Suite+M,+Greenville,+SC+29607/data=!4m2!3m1!1s0x88582fc1d5fa241d:0x8955f0c0780fa530?sa=X&ved=2ahUKEwjxmaC9u4HlAhUOCKwKHcMJD-EQ8gEwAHoECAoQAQ' rel="noopener noreferrer" target='_blank'>
                  <h4>
                    730 South Pleasantburg Dr <br/>
                  Greenville, SC 29607
                  </h4>
                </a>
                <a href="Tel: 864-349-1309">
                  <h4>864-349-1309</h4>
                </a>
                <a href='mailto:sagesalon730@gmail.com'>
                  <h4>sagesalon730@gmail.com</h4>
                </a>
              </div>
              <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13101.523218912014!2d-82.369853!3d34.8215169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9cf42b40f39f29c1!2sSage%20Salon!5e0!3m2!1sen!2sus!4v1576131884519!5m2!1sen!2sus" frameborder="0" style={{border: '0'}} allowfullscreen=""></iframe>
              </div>
              <h1 className="about-title">Hours</h1>
              <div className="hours-wrapper">
                <p>Sunday Closed</p>
                <p>Monday 9AM–6PM</p>
                <p>Tuesday 9AM–6PM</p>
                <p>Wednesday 9AM–6PM</p>
                <p>Thursday 9AM–6PM</p>
                <p>Friday 9AM–6PM</p>
                <p>Saturday 9AM–3PM</p>
              </div>

            </Grid>
          <Grid item xs={1}></Grid>
      </Grid>
    </Container>
    </div>
  )
}

export default HomeComponent;
