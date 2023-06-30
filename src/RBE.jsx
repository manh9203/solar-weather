import React from 'react';
import { Link } from 'react-router-dom';

import rbe from "./assets/icon-rbe.png";
import "./App.css";

function RBE (){
    return (
        <>
          <div className="container">
            <img src={rbe} alt="Coronal Mass Ejection" className="image" />
    
            <div className="description">
              <h2>Radiation Belt Enhancements (RBEs)</h2>
              
              <p>
              Radiation belt enhancements are temporary increases in the number and intensity of energetic charged particles trapped in the Earth's radiation belts. These enhancements can be caused by various solar events, such as geomagnetic storms or high-speed streams.              </p>
            </div>
          </div>
          <Link className="white-link" to="/">Return to Start</Link>

        </>
      );
}
  
export default RBE;