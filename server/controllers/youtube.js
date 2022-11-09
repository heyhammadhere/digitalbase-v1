const { google } = require("googleapis");

const CLIENT_ID = process.env.client_id;
const CLIENT_SECRET = process.env.client_secret;
const REDIRECT_URL = process.env.redirect_uri;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

const getChannelData = (req, res) => {
  const tokens = req.body.tokens;
  oAuth2Client.setCredentials(tokens);
  console.log(tokens);
  const youtubeAnalytics = google.youtubeAnalytics({
    version: "v2",
    auth: oAuth2Client,
  });

  youtubeAnalytics.reports
    .query({
      dimensions: "day",
      endDate: "2022-09-01",
      ids: "channel==MINE",
      metrics: "views,subscribersLost",
      startDate: "2019-08-01",
      dimensions: "month",
    })
    .then((data) => res.send(data.data))
    .catch((error) => {
      console.log("The API returned an error: ", error);
    });

  console.log("Authed successfully");
};

module.exports = {
  getChannelData,
};
