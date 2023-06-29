const eventRoutes = [
  "CMEAnalysis",
  "GST",
  "IPS",
  "FLR",
  "SEP",
  "MPC",
  "RBE",
  "HSS",
];
const API_KEY = "0r5TseDvW7S8F18sATetudOEigdxpkY1bekN9Vc3";

async function callAPIs(startDate, endDate) {
  const parseStartDate = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;
  const parseEndDate = `${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;

  let routes = eventRoutes.map(
    (x) =>
      `https://api.nasa.gov/DONKI/${x}?startDate=${parseStartDate}&endDate=${parseEndDate}&api_key=${API_KEY}`
  );
  const responses = await Promise.all(
    routes.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) return []; //Most likely too many requests lol
      let data = await response.text();
      data = data ? JSON.parse(data) : [];
      return data;

    })
  );
  return responses;
}

export default callAPIs;
