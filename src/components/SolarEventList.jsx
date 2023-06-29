import { useEffect, useState } from "react";
import callAPIs from "../utils/apiCaller";

function SolarEventList({ startDate, endDate }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    callAPIs(startDate, endDate)
    setEvents([{messageID: 2349, messageBody: 999}])
  //   const fetchSolarEvents = async () => {
  //     const promises = eventTypes.map(async (eventType) => {
  //       const url = `https://api.nasa.gov/DONKI/${eventType}?startDate=${parseStartDate}&endDate=${parseEndDate}&type=all&api_key=${API_KEY}`;
  //       const response = await fetch(url);
  //       return await response.json()
  //     });

  //     console.log(promises)
  //     console.log(eventResponses);
  //     const allEvents = eventResponses.reduce(
  //       (acc, res) => [...acc, ...res],
  //       []
  //     );
  //     setEvents(allEvents);
  //   };

  //   fetchSolarEvents();
  }, [startDate, endDate]);

  return (
    <div>
      <h2>Weather Events:</h2>
      {events.length === 0 ? (
        <p>No weather events found.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.messageID}>{event.messageBody}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Minimum Things needed
// Coronal Mass Ejection Analysis: time21_5, associatedCMEID
// Geomagnetic Storm: startTime, gstID
// Interplanetary Shock: eventTime, activityID
// Solar Flare: beginTime, flrID
// Solar Energetic Particle: eventTIme, sepID
// Magnetopause Crossing: eventTime, mpcID
// Radiation Belt Enhancement: eventTIme, rbeID
// High Speed Stream: eventTIme, hssID

export default SolarEventList;
