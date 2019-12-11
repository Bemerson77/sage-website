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
    </div>
  )
}

export default HomeComponent;
