import React from 'react';

import hss from "./assets/icon-hss.jpg";
import { Link } from 'react-router-dom';

import "./App.css";

function HSS (){
    return (
        <>
          <div className="container">
            <img src={hss} alt="Coronal Mass Ejection" className="image" />
    
            <div className="description">
              <h2>High-Speed Streams (HSSs)</h2>
              
              <p>
              High-speed streams are fast-moving streams of solar wind that emanate from coronal holes on the Sun's surface. When these streams interact with the Earth's magnetosphere, they can trigger geomagnetic activity.              </p>
            </div>
          </div>
          <Link className="white-link" to="/">Return to Start</Link>

        </>
      );
}
  
export default HSS;