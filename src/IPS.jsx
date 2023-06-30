import React from 'react';

import ips from "./assets/icon-ips.jpg";
import { Link } from 'react-router-dom';

import "./App.css";

function IPS (){
    return (
        <>
          <div className="container">
            <img src={ips} alt="Coronal Mass Ejection" className="image" />
    
            <div className="description">
              <h2>Interplanetary Shocks (IPSs)</h2>
              
              <p>
              Interplanetary shocks are sudden changes in the solar wind's speed, density, and magnetic field that result from various solar phenomena, such as coronal mass ejections or solar flares. These shocks can cause disturbances in the Earth's magnetosphere.              </p>
            </div>
          </div>
          <Link className="white-link" to="/">Return to Start</Link>

        </>
      );
}
  
export default IPS;