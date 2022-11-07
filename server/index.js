const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
  response.json({
    statusCode: 200,
    statusText: "ok",
  });
});

app.listen();
