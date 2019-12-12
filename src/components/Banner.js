import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';



function BannerComponent ({ imgPath }){
  console.log(imgPath);
  return (
    <div className="banner-outer">
      <div className="banner" style={{ background: `url(${imgPath}) center center`, backgroundSize: 'cover', backgroundColor: 'rgba(233, 232, 234, 1)' }}>

      </div>
      {/*<FontAwesomeIcon icon={Icons.faChevronDown} className="down-chevron"/>*/}
    </div>
  )
}

export default BannerComponent;
