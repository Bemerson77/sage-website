import React, { Component } from 'react';

import '../App.scss';
import salonImg from '../img/SageSalon108.jpg';
import BannerComponent from './Banner';

function ServicesComponent (){
  return (
    <div>
      <BannerComponent imgPath={salonImg} />
    </div>

  )
}

export default ServicesComponent;
