import React from 'react';
// import { connect } from 'react-redux';
import Location from './components/location/index'
import Weather from './components/weather/index'
import Map from './components/mapboxAndReact/index'


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
            <Map />
          </div>
        </div >
      </div >
    </div >
  );
}

export default App;