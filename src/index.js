import express from "express"; // importing the module
import bodyParser from "body-parser";
import cors from "cors";


// Insert API Key here
const API_KEY = 'UAMCxnwuf6K7Zh2XFXSL7OdftwkFpcMVOh0Lekkr';

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


//Grabs Coronal Mass Ejection (CME)
app.get("/CME", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/CME?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

//Grabs Geomagnetic Storm (GST)
app.get("/GST", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/GST?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

//Grabs Interplanetary Shock (IPS)
app.get("/IPS", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/IPS?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});


//Grabs Solar Flare (FLR)
app.get("/FLR", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/FLR?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

//Grabs Solar Energetic Particle (SEP)
app.get("/SEP", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/SEP?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

//Grabs Magnetopause Crossing (MPC)
app.get("/MPC", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/MPC?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

//Grabs Radiation Belt Enhancement (RBE)
app.get("/RBE", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/RBE?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

//Grabs Hight Speed Stream (HSS)
app.get("/HSS", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week 
  const url = `https://api.nasa.gov/DONKI/HSS?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

//Grabs notificaitions
app.get("/notifications", (request, response) => {
  const today = new Date();
  const aWeekAgo = new Date();
  aWeekAgo.setDate(today.getDate() - 7); // go back 1 week
  const url = `https://api.nasa.gov/DONKI/notifications?` + 
  `startDate=${aWeekAgo.getFullYear()}-${aWeekAgo.getMonth()+1}-${aWeekAgo.getDate()}` +
  `&endDate=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` +
  `&type=all&api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => response.json(data))
    .catch((err) => {
      console.log("error occurred", err);
      response.json({ error: "shit" });
    });
});

app.post('/date-range', (request, response) => {
  const { startDate, endDate } = request.body;
  // Use startDate and endDate in your logic or API calls

  // Example response
  response.json({ message: 'Date range received on the server' });
});



// Listen on Port
app.listen(
  PORT,
  () => console.log(`Hello World, I'm listening on port ${PORT}!`) //confirmation of listening
);
