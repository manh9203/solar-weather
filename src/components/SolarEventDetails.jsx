import { useEffect, useState } from "react";
import { useParams } from "react-router";

const urlArray = new Map([
  ["CME", { url: "CMEAnalysis", id: "associatedCMEID"}],
  ["FLR", { url: "FLR", id: "flrID"}],
  ["GST", { url: "GST", id: "gstID"}],
  ["HSS", { url: "HSS", id: "hssID"}],
  ["IPS", { url: "IPS", id: "activityID"}],
  ["MPC", { url: "MPC", id: "mpcID"}],
  ["RBE", { url: "RBE", id: "rbeID"}],
  ["SEP", { url: "SEP", id: "sepID"}],
]);
const API_KEY = "0r5TseDvW7S8F18sATetudOEigdxpkY1bekN9Vc3";

function SolarEventDetails() {
  const { type, time, id } = useParams();
  const apiURL = `https://api.nasa.gov/DONKI/${urlArray.get(type).url}?startDate=${time}&endDate=${time}&api_key=${API_KEY}`;
  const [ data, setData ] = useState({});

  useEffect( () => {
    let subscribed = true;

    async function callAPI (url) {
      const response = await fetch(url);
      if (!response.ok) return []; //Most likely too many requests lol
      let data = await response.text();
      data = data ? JSON.parse(data) : [];
      data = data.filter((x) => x[urlArray.get(type).id] === id);
      const [ entry ] = data
      setData(entry);
    }
    if (subscribed) callAPI(apiURL);
    return ( () => subscribed = false)
  }, [apiURL, type, id])

  return (
    <>
      <p>{type}</p>
      <p>{time}</p>
      <p>{id}</p>
      <p>{apiURL}</p>
      {JSON.stringify(data, null, 2)}
    </>
  )
}


export default SolarEventDetails;