import { useState } from "react";
import SolarEventList from "./components/SolarEventList";
import "./App.css";
import PropTypes from "prop-types";
import SetDate from "./components/SetDate";
import sunLogo from "./assets/sun-svgrepo-com.svg"

function App({ name, testMode }) {

  const tempCall = () => console.log("Calling API!")

  let x = new Date();
  x.setDate(x.getDate() - 7);
  const [startDate, setStartDate] = useState(x);
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <header>
        <img src={sunLogo} alt="Sun Logo" width={75}/>
        <h1>{name}</h1>
      </header>

      <div className="useInfo">
        <p>Ever wonder what space weather is like? Wonder no more!</p>
        <p>Display any 7 days of Space Weather Information.</p>
      </div>

      <SetDate
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        callAPI={tempCall}
      />
      <SolarEventList />
      {!testMode ? null : (
        <div>
          <h6>Start Date: {startDate ? startDate.toDateString() : null}</h6>
          <h6>End Date: {endDate ? endDate.toDateString() : null}</h6>
        </div>
      )}
    </>
  );
}
App.propTypes = {
  name: PropTypes.string,
  testMode: PropTypes.bool,
};

export default App;
