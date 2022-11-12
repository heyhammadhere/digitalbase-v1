const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2();

const getChannelData = async (req, res) => {
  const tokens = req.body.tokens;
  const matrics = req.body.matrics;
  oAuth2Client.setCredentials(tokens);
  const youtubeAnalytics = google.youtubeAnalytics({
    version: "v2",
    auth: oAuth2Client,
  });
  try {
    const reports = await youtubeAnalytics.reports.query({
      endDate: "2022-09-01",
      ids: "channel==MINE",
      metrics: matrics,
      startDate: "2011-08-01",
      dimensions: "month",
    });

    res.send(reports.data);
  } catch (error) {}
};

const topVideo = async (req, res) => {
  const tokens = req.body.tokens;
  oAuth2Client.setCredentials(tokens);

  const populerVideos = google.youtube({
    version: "v3",
    auth: oAuth2Client,
  });

  try {
    const channelDetails = await populerVideos.channels.list({
      part: "snippet,statistics,contentDetails",
      maxResults: 50,
      mine: true,
    });

    const topRankedVideo = await populerVideos.search.list({
      part: "snippet",
      maxResults: 50,
      channelId: channelDetails.data.items[0].id,
      order: "viewCount",
    });

    res.send([topRankedVideo.data.items[0]]);
  } catch (error) {
    console.log(error);
  }
};

const latestVideos = async (req, res) => {
  const tokens = req.body.tokens;
  oAuth2Client.setCredentials(tokens);

  const populerVideos = google.youtube({
    version: "v3",
    auth: oAuth2Client,
  });

  try {
    const channelDetails = await populerVideos.channels.list({
      part: "snippet,statistics,contentDetails",
      maxResults: 50,
      mine: true,
    });

    const latestVideo = await populerVideos.search.list({
      part: "snippet",
      maxResults: 50,
      channelId: channelDetails.data.items[0].id,
      order: "date",
    });

    res.send(latestVideo.data.items.splice(0, 3));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getChannelData,
  topVideo,
  latestVideos,
};
