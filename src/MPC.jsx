import React from 'react';

import mpc from "./assets/icon-mnp.jpg";
import { Link } from 'react-router-dom';

import "./App.css";

function MPC (){
    return (
        <>
          <div className="container">
            <img src={mpc} alt="Coronal Mass Ejection" className="image" />
    
            <div className="description">
              <h2>Magnetopause Crossings (MPCs)</h2>
              
              <p>
              Magnetopause crossings occur when the Earth's magnetosphere comes into contact with the boundary of the solar wind, known as the magnetopause. These crossings can result in changes in the Earth's magnetic field and particle dynamics.              </p>
            </div>
          </div>
          <Link className="white-link" to="/">Return to Start</Link>

        </>
      );
}
  
export default MPC;