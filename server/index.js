const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const youtubeRouter = require("./routes/youtubeRoutes");
const dotenv = require("dotenv").config();
const { google } = require("googleapis");
const oAuth2Client = new google.auth.OAuth2();
const { METRICS } = require("./constants");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// app.post("/", async (request, response) => {
//   try {
//     const { token } = request.body;
//     oAuth2Client.setCredentials(token);
//     const analytics = google.youtubeAnalytics({
//       version: "v2",
//       auth: oAuth2Client,
//     });
//     const reports = await analytics.reports.query({
//       ids: "channel==MINE",
//       startDate: "2012-01-01",
//       endDate: "2022-01-01",
//       dimensions: "month",
//       metrics: METRICS.join(),
//     });
//     response.status(200).json(reports);
//   } catch ({ message }) {
//     response.status(500).json({
//       error: "Internal Server Error",
//       message: message,
//     });
//   }
// });

app.use("/youtube", youtubeRouter);

app.listen(5500);
