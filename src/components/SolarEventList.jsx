import { useEffect, useState } from "react";

function SolarEventList({ startDate, endDate }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchSolarEvents = async () => {

      
      const eventTypes = ['CME', 'GST', 'IPS', 'FLR', 'SEP', 'MPC', 'RBE', 'HSS'];
      const API_KEY = 'YOUR_API_KEY';
      const promises = eventTypes.map((eventType) => {
        const url = `https://api.nasa.gov/DONKI/${eventType}?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${API_KEY}`;
        return fetch(url).then((response) => response.json());
      });

      const eventResponses = await Promise.all(promises);
      const allEvents = eventResponses.reduce((acc, response) => [...acc, ...response], []);
      setEvents(allEvents);
    };

    fetchSolarEvents();
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