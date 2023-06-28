import { useEffect, useState } from "react";

export default function SolarEventList() {
  const [date, setDate] = useState([]);
  useEffect(() => {});
  const [solarEvent, setSolarEvent] = useState([]);
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