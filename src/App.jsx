import { useEffect, useState } from "react";
import "./App.css";
import SunLogo from "./assets/sun-svgrepo-com.svg";

import PropTypes from "prop-types";
const monthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function DateHeader({ time }) {
  return (
    <span data-testid="dateHead">
      UTC: {time.getUTCDate()} {monthArr[time.getUTCMonth()]}{" "}
      {time.getUTCFullYear()}
    </span>
  );
}

DateHeader.propTypes = {
  time: PropTypes.object,
};

function App() {
  const [date, setDate] = useState(new Date());
  const weekAgo = structuredClone(date);
  weekAgo.setDate(weekAgo.getDate() - 7);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <img src={SunLogo} alt="sun" />
        <h1>Space Weather</h1>
        <h3>
          Time now is: <DateHeader time={date} /> {date.toUTCString()}
        </h3>
        <h3>Time a week ago is: {weekAgo.toUTCString()}</h3>
      </div>
    </>
  );
}

export default App;
