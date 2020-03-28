import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import axios from "axios";

import pkg from "../../app/package.json";

import config from "./config";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("(づ｡◕‿‿◕｡)づ");
});

/* Passthrough GET requests to bypass CORS */
app.get("/fetchResource", async (req, res, next) => {
  try {
    const { url, responseType } = req.query;
    const response = await axios.get(url);

    if (responseType === "json") {
      res.json(response.data);
    } else {
      res.send(response.data);
    }
  } catch (error) {
    next(error);
  }
});

// TODO: custom error handling

app.set("port", config.port);

// Run HTTP server
app.listen(app.get("port"), function() {
  console.info("Server running at http://localhost:" + app.get("port"));
});
