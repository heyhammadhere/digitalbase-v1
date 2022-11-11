const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2();

const getChannelData = (req, res) => {
  const tokens = req.body.tokens;
  const matrics = req.body.matrics;
  oAuth2Client.setCredentials(tokens);
  const youtubeAnalytics = google.youtubeAnalytics({
    version: "v2",
    auth: oAuth2Client,
  });

  youtubeAnalytics.reports
    .query({
      endDate: "2022-09-01",
      ids: "channel==MINE",
      metrics: matrics,
      startDate: "2011-08-01",
      dimensions: "month",
    })
    .then((data) => res.send(data.data))
    .catch((error) => {
      console.log("The API returned an error: ", error);
    });

  console.log("Authed successfully");
};

const topVideo = (req, res) => {
  const tokens = req.body.tokens;
  oAuth2Client.setCredentials(tokens);

  res.send(oAuth2Client);
  const populerVideos = google.youtube({
    version: "v3",
    auth: oAuth2Client,
  });

  // populerVideos.channels
  //   .list({
  //     part: "snippet",
  //     forUsername: "duckyBhai",
  //   })
  //   .then((data) => res.send(data.data))
  //   .catch((error) => {
  //     console.log("The API returned an error: ", error);
  //   });
};

module.exports = {
  getChannelData,
  topVideo,
};
