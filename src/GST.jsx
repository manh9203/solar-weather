import React from 'react';

import gms from "./assets/icon-gms.jpg";
import { Link } from 'react-router-dom';

import "./App.css";

function GST (){
    return (
        <>
          <div className="container">
            <img src={gms} alt="Coronal Mass Ejection" className="image" />
    
            <div className="description">
              <h2>Geomagnetic Storms (GSTs)</h2>
              
              <p>
              Geomagnetic storms are disturbances in the Earth's magnetosphere caused by interactions with the solar wind. They can result in a variety of effects, including auroras, disruptions to satellite communications, and power grid fluctuations.              </p>
            </div>
          </div>
          <Link className="white-link" to="/">Return to Start</Link>

        </>
      );
}
  
export default GST;