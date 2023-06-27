import { useState } from "react";
import SolarEventList from "./components/SolarEventList";
import "./App.css";
import PropTypes from "prop-types";
import SetDate from "./components/SetDate";

function App({ name, testMode }) {

  const tempCall = () => console.log("Calling API!")

  let x = new Date();
  x.setDate(x.getDate() - 7);
  const [startDate, setStartDate] = useState(x);
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <h1>{name}</h1>
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
