import React, { Component } from 'react';

import '../App.scss';
import salonImg from '../img/SageSalon117.jpg';
import maryImg from '../img/SageSalon38.jpg';
import BannerComponent from './Banner';

function TeamComponent (){


 return (
  <div>
    <BannerComponent imgPath={salonImg} />
    <StylistComponent />
  </div>

 )
}


function StylistComponent() {

  return (
    <h1>hello</h1>
  )
}

export default TeamComponent;
