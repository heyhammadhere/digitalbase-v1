const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const youtubeRouter = require("./routes/youtubeRoutes");
const dotenv = require("dotenv").config();
const {
  routeNotFound,
  errorHandler,
} = require("./middlewares/errorMiddleware");
const { BASE_URL } = require("./constants");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(`${BASE_URL}/youtube`, youtubeRouter);
app.use(routeNotFound);
app.use(errorHandler);
app.listen(5500);
