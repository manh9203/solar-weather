import express from "express"; // importing the module
import bodyParser from "body-parser";
import cors from "cors";

// Insert API Key here
const API_KEY = null;

const app = express(); // creating an Express app
const { PORT = 3000 } = process.env;
app.use(bodyParser.json()).use(cors());

// API_KEY needs to exist
app.use("/", (request, response, next) => {
  if (API_KEY === null)
    response.status(500).json({ error: "Missing API key. Oh no." });
  else next();
});

app.get("/", (request, response) => response.send("Space Weather!"));

app.get("/current", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(aWeekAgo.getDate() - 7); // go back 1 week

  const url = `https://api.nasa.gov/DONKI/notifications?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(
    url
  )
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occured", err);
      response.json({ error: "shit" });
    });
});

// Listen on Port
app.listen(
  PORT,
  () => console.log(`Hello World, I'm listening on port ${PORT}!`) //confirmation of listening
);
