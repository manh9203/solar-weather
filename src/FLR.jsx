import React from 'react';
import flr from "./assets/icon-flr.jpg";
import { Link } from 'react-router-dom';
import "./App.css";

function FLR (){
    return (
        <>
          <div className="container">
            <img src={flr} alt="Coronal Mass Ejection" className="image" />
    
            <div className="description">
              <h2>Solar Flares (FLRs)</h2>
              
              <p>
              Solar flares are powerful eruptions of electromagnetic radiation from the Sun's surface. They release a tremendous amount of energy in the form of light, heat, and charged particles.</p>
            </div>
          </div>
          <Link className="white-link" to="/">Return to Start</Link>

        </>
      );
}
  
export default FLR;