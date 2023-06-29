import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

import SetDate from "./components/SetDate";
import SolarEventList from "./components/SolarEventList";

import sunLogo from "./assets/sun-svgrepo-com.svg";
import cme from "./assets/icon-cme.jpg";
import flr from "./assets/icon-flr.jpg";
import gms from "./assets/icon-gms.jpg";
import hss from "./assets/icon-hss.jpg";
import ips from "./assets/icon-ips.jpg";
import mpc from "./assets/icon-mnp.jpg";
import rbe from "./assets/icon-rbe.png";
import sep from "./assets/icon-sep.jpg";

function App({ name, testMode }) {
  let x = new Date();
  x.setDate(x.getDate() - 6);
  const [startDate, setStartDate] = useState(x);
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <header>
        <img src={sunLogo} alt="Sun Logo" width={75} />
        <h1>{name}</h1>
      </header>

      <div className="useInfo">
        <p>Ever wonder what space weather is like? Wonder no more!</p>
        <p>Display any 7 days of Space Weather Information.</p>
        <p>Click icon for more details.</p>
      </div>

      <SetDate
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      {console.log(startDate)}
      {console.log(endDate)}
      {startDate && endDate && (
        <SolarEventList startDate={startDate} endDate={endDate} /> //check start and end dates are not null
      )}

      {console.log(startDate)}
      {!testMode ? null : (
        <div>
          <h6>Start Date: {startDate ? startDate.toDateString() : null}</h6>
          <h6>End Date: {endDate ? endDate.toDateString() : null}</h6>
        </div>
      )}
      <footer className="legend">
        <h2>Icon Meanings</h2>
        <div className="legendGrid">
          <div>
            <img src={cme} alt="CME" width={50} height={50} />
            <p>Coronal Mass Ejection (CME)</p>
          </div>
          <div>
            <img src={flr} alt="FLR" width={50} height={50} />
            <p>Solar Flare (FLR)</p>
          </div>
          <div>
            <img src={gms} alt="GMS" width={50} height={50} />
            <p>Geomagnetic Storm (GMS)</p>
          </div>
          <div>
            <img src={hss} alt="HSS" width={50} height={50} />
            <p>High Speed Stream (HSS)</p>
          </div>
          <div>
            <img src={ips} alt="IPS" width={50} height={50} />
            <p>Interplanetary Shock (IPS)</p>
          </div>
          <div>
            <img src={mpc} alt="MPC" width={50} height={50} />
            <p>Magnetopause Crossing (MPC)</p>
          </div>
          <div>
            <img src={rbe} alt="RBE" width={50} height={50} />
            <p>Radiation Belt Enhancement (RBE)</p>
          </div>
          <div>
            <img src={sep} alt="SEP" width={50} height={50} />
            <p>Solar Energetic Particle (SEP)</p>
          </div>
        </div>
      </footer>
    </>
  );
}
App.propTypes = {
  name: PropTypes.string,
  testMode: PropTypes.bool,
};

export default App;
