import React from 'react';
// import { connect } from 'react-redux';
import Location from './components/location/index'
import Weather from './components/weather/index'

import './App.scss';


function App() {
  return (
    <div className="main">
      <div className='container'>
        <div className="wrapper-block">
          <div className="inner location-block">
            <Location />
            <Weather />
          </div>
          <div className="inner map-block">
            right
              {/* <div class="main__map">
                <svg class="clip-svg">
                  <defs>
                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                      <path width="100%" height="100%" transform="scale(0.0045, 0.00385)" id="clip-mask" d="M34.1983772,243.81581 C35.2123618,243.81581 36.0373744,244.643759 36.0373744,245.661353 L36.0373744,260 L63.450348,244.064408 C63.7301493,243.901754 64.0488773,243.81581 64.3720879,243.81581 L233,243.81581 L233,2 L2,2 L2,243.81581 L34.1983772,243.81581 Z" />
                    </clipPath>
                  </defs>
                </svg>
                <div id="map"></div>
                <div class="location-wrapper"></div>
              </div> */}
          </div>
        </div >
      </div >
    </div >
  );
}

export default App;