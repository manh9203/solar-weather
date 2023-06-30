import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../Details.css";

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
  const apiURL = `https://api.nasa.gov/DONKI/${
    urlArray.get(type).url
  }?startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`;
  const [data, setData] = useState({});

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
    }
    if (subscribed) callAPI(apiURL);
    return () => (subscribed = false);
  }, [apiURL, type, id]);

  return (
    <>
      <div className="header">
        <h1>{type} Event</h1>
        <h2>Occured {time}</h2>
      </div>
      <p>Here is what NASA has to say about it:</p>
      <div className="center">
        <table className="table">
          <tbody>
            {data ? (
              Object.entries(data).map((x, ind) => (
                <tr key={ind}>
                  <th>{x[0]}</th> <td>{JSON.stringify(x[1])}</td>
                </tr>
              ))
            ) : (
              <p>No Data Found.</p>
            )}
          </tbody>
        </table>
      </div>
      <Link to="/">
        <button>Back to Start</button>
      </Link>
    </>
  );
}

export default SolarEventDetails;
