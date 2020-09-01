import React from 'react';
import Location from '../location/index'
import Weather from '../weather/index'
import Map from '../mapboxAndReact/index'


function FirstScreen() {
  return (
            <div className="wrapper-block">
              <div className="inner location-block">
                <Location />
                <Weather />
              </div>
              <div className="inner map-block">
                <Map />
              </div>
            </div >
  );
}

export default FirstScreen;