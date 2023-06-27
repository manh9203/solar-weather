import express from "express"; // importing the module
import * as utilities from "./utils/functions";
import bodyParser from "body-parser";

import cors from "cors";



import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express(); // creating an Express app
const { PORT = 3000 } = process.env;
app.use(bodyParser.json()).use(cors());

app.get("/", (request, response) => response.send("Hello World"));


