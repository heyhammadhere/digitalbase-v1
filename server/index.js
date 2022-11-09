const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const youtubeRouter = require("./routes/youtubeRoutes");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    statusText: "ok",
  });
});

app.use("/youtube", youtubeRouter);

app.listen(5500);
