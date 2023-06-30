import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SolarEventDetails.css"; 
import { Link } from "react-router-dom";

const urlArray = new Map([
  ["CME", { url: "CMEAnalysis", id: "associatedCMEID" }],
  ["FLR", { url: "FLR", id: "flrID" }],
  ["GST", { url: "GST", id: "gstID" }],
  ["HSS", { url: "HSS", id: "hssID" }],
  ["IPS", { url: "IPS", id: "activityID" }],
  ["MPC", { url: "MPC", id: "mpcID" }],
  ["RBE", { url: "RBE", id: "rbeID" }],
  ["SEP", { url: "SEP", id: "sepID" }],
]);
const API_KEY = "0r5TseDvW7S8F18sATetudOEigdxpkY1bekN9Vc3";

function SolarEventDetails() {
  const { type, time, id } = useParams();
  let startDate = new Date(time);
  let endDate = new Date(time);
  // Do the following to minimize error from time zones
  startDate.setDate(startDate.getDate() - 1);
  endDate.setDate(endDate.getDate() + 1);
  const apiURL = `https://api.nasa.gov/DONKI/${urlArray.get(type).url}?startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`;
  const [data, setData] = useState({});
  const [link, setLink] = useState("");
  const longType = type === "CME"
  ? "Coronal Mass Ejection (CME)"
  : type === "FLR"
  ? "Solar Flare (FLR)"
  : type === "GST"
  ? "Geomagnetic Storm (GST)"
  : type === "HSS"
  ? "High Speed Stream (HSS)"
  : type === "IPS"
  ? "Interplanetary Shock (IPS)"
  : type === "MPC"
  ? "Magnetopause Crossing (MPC)"
  : type === "RBE"
  ? "Radiation Belt Enhancement (RBE)"
  : type === "SEP"
  ? "Solar Energetic Particle (SEP)"
  : "";

  useEffect(() => {
    let subscribed = true;

    async function callAPI(url) {
      const response = await fetch(url);
      if (!response.ok) return []; //Most likely too many requests lol
      let data = await response.text();
      data = data ? JSON.parse(data) : [];
      data = data.filter((x) => x[urlArray.get(type).id] === id);
      const [entry] = data;
      setData(entry);
      setLink(entry.link);
    }
    if (subscribed) callAPI(apiURL);
    return () => (subscribed = false);
  }, [apiURL, type, id]);

  return (
    <div className="solar-event-details">
      <h2>Solar Event Details</h2>
      <div className="event-info">
        <p>
          <span className="info-label">Solar Event Type:</span> {longType}
        </p>
        <p>
          <span className="info-label">Date:</span> {time}
        </p>
        <p>
          <span className="info-label">ID:</span> {id}
        </p>
      </div>
      {link && (
        <div className="more-info">
          <p>Click below to go to the official site for more information</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="nasa-link">
            More Information
          </a>
        </div>
      )}
        <Link className="nasa-link back" to="/">Return to Start</Link>
    </div>
  );
}

export default SolarEventDetails;
