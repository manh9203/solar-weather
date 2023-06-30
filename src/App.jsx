import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { Link } from "react-router-dom";

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
      <div className = "header">
        <img src={sunLogo} alt="Sun Logo" width={75} />
        <h1>{name}</h1>
      </div>

      <div className="useInfo">
        <p>Discover real-time solar weather events with Solar Weather Explorer.</p>
        <p>Stay informed about the latest occurrences within your preferred time interval.</p>
        <p>Dive deeper into each event by clicking on its icon for detailed insights.</p>
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
          <Link to="/CME" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={cme} alt="CME" width={50} height={50} />
              <p>Coronal Mass Ejection (CME)</p>
            </div>
          </Link>
          <Link to="/FLR" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={flr} alt="FLR" width={50} height={50} />
              <p>Solar Flare (FLR)</p>
            </div>
          </Link>
          <Link to="/GST" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={gms} alt="GST" width={50} height={50} />
              <p>Geomagnetic Storm (GST)</p>
            </div>
          </Link>
          <Link to="/HSS" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={hss} alt="HSS" width={50} height={50} />
              <p>High Speed Stream (HSS)</p>
            </div>
          </Link>
          <Link to="/IPS" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={ips} alt="IPS" width={50} height={50} />
              <p>Interplanetary Shock (IPS)</p>
            </div>
          </Link>
          <Link to="/MPC" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={mpc} alt="MPC" width={50} height={50} />
              <p>Magnetopause Crossing (MPC)</p>
            </div>
          </Link>
          <Link to="/RBE" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={rbe} alt="RBE" width={50} height={50} />
              <p>Radiation Belt Enhancement (RBE)</p>
            </div>
          </Link>
          <Link to="/SEP" rel="noopener noreferrer" className="eventIcon">
            <div>
              <img src={sep} alt="SEP" width={50} height={50} />
              <p>Solar Energetic Particle (SEP)</p>
            </div>
          </Link>
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
