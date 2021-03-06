import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';



function BannerComponent ({ imgPath }){
  console.log(imgPath);
  return (
    <div className="banner-outer">
      <div className="banner" style={{ background: `url(${imgPath}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>

      </div>
      {/*<div className="alert-outer">
        <h3 className="alert">We are closed temporarily due to COVID-19 pending an opening date per the Governor.</h3>
      </div>*/}
      {/*<FontAwesomeIcon icon={Icons.faChevronDown} className="down-chevron"/>*/}
    </div>
  )
}

export default BannerComponent;
