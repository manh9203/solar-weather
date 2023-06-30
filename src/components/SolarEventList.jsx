import { useEffect, useState } from "react";
import callAPIs from "../utils/apiCaller";
import cleanResponse from "../utils/cleanResponse";
import { apiSample } from "../utils/sampleAPIdata";
import PropTypes from "prop-types";
import SolarEventIcon from "./SolarEventIcon";

function SolarEventList({ startDate, endDate }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let subscribed = true;
    async function update() {
      // const result = apiSample
      //   .map((entries, ind) => entries.map((x) => cleanResponse(x, ind)))
      //   .flat()
      //   .sort((a, b) => Date.parse(a.time) - Date.parse(b.time));

      const result = (await callAPIs(startDate, endDate))
        .map((entries, ind) => entries.map((x) => cleanResponse(x, ind)))
        .flat()
        .sort((a, b) => Date.parse(a.time) - Date.parse(b.time));

      setEvents(result);
    }

    if (subscribed) update();
    return () => {
      subscribed = false;
    };
  }, [startDate, endDate]);
  const formattedStartDate = startDate
    ? startDate.toISOString().split("T")[0]
    : "";
  const formattedEndDate = endDate ? endDate.toISOString().split("T")[0] : "";
  return (
    <div>
      <h2>
        Solar Weather Events from {formattedStartDate} to {formattedEndDate}
      </h2>
      {events.length === 0 ? (
        <p>No weather events found.</p>
      ) : (
        <div className="weatherList">
          {events.map((event, ind) => (
            <SolarEventIcon key={`${event.id}--ind${ind}`} {...event} />
          ))}
        </div>
      )}
    </div>
  );
}
SolarEventList.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
};
export default SolarEventList;
