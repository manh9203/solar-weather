import React from 'react';
import { Link } from 'react-router-dom';

import sep from "./assets/icon-sep.jpg";
import "./App.css";

function SEP (){
    return (
        <>
          <div className="container">
            <img src={sep} alt="Coronal Mass Ejection" className="image" />
    
            <div className="description">
              <h2>Solar Energetic Particles (SEPs)</h2>
              
              <p>
              Solar energetic particles are highly energetic charged particles, primarily protons and electrons, that are accelerated by solar flares or shock waves associated with coronal mass ejections. These particles can pose a radiation hazard to astronauts and can also affect satellite operations.              </p>
            </div>
          </div>
          <Link className="white-link" to="/">Return to Start</Link>

        </>
      );
}
  
export default SEP;