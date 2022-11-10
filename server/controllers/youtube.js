const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2();

const getChannelData = (req, res) => {
  const tokens = req.body.tokens;
  oAuth2Client.setCredentials(tokens);
  const youtubeAnalytics = google.youtubeAnalytics({
    version: "v2",
    auth: oAuth2Client,
  });

  youtubeAnalytics.reports
    .query({
      dimensions: "day",
      endDate: "2022-09-01",
      ids: "channel==MINE",
      metrics: "views,subscribersLost,subscribersGained,likes",
      startDate: "2021-08-01",
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
