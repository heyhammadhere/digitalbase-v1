const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2();

const getChannelData = async (req, res) => {
  try {
    const tokens = req.body.tokens;
    oAuth2Client.setCredentials(tokens);
    const youtubeAnalytics = google.youtubeAnalytics({
      version: "v2",
      auth: oAuth2Client,
    });
    const reports = await youtubeAnalytics.reports.query({
      endDate: "2022-09-01",
      ids: "channel==MINE",
      metrics: "views,subscribersGained,subscribersLost,likes",
      startDate: "2012-08-01",
      dimensions: "day",
    });

    if (Object.keys(reports?.data).length) {
      console.log(reports?.data);
      res.status(200).send(reports.data);
    } else {
      res.status(404).send({ message: "Reports Not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const channelVideoData = async (req, res) => {
  try {
    const tokens = req.body.tokens;
    oAuth2Client.setCredentials(tokens);

    // Youtube Data Api Instance
    const youtubeDataInstance = google.youtube({
      version: "v3",
      auth: oAuth2Client,
    });

    // Fetching User's Channel Details
    const channelDetails = await youtubeDataInstance.channels.list({
      part: "snippet,statistics,contentDetails",
      maxResults: 50,
      mine: true,
    });

    // Got the PlayList Id from channelDetails to fetch the latest uploaded videos
    const playList = await youtubeDataInstance.playlistItems.list({
      part: "snippet",
      playlistId:
        channelDetails.data.items[0].contentDetails.relatedPlaylists.uploads,
      maxResults: 50,
    });

    // Getting the IDs of all the videos returned from the playList and Storing them in an Array
    const videosArray = playList.data.items.map((video) => {
      return video.snippet.resourceId.videoId;
    });

    // Getting the video List of Stored IDs
    const mostViewedVideo = await youtubeDataInstance.videos.list({
      part: "snippet,statistics",
      maxResults: 50,
      id: videosArray.join(","),
      order: "viewCount",
    });

    // Sorting the video Array based on ViewCount
    const sortedTopVideo = mostViewedVideo.data.items.sort((a, b) => {
      if (Number(a.statistics.viewCount) > Number(b.statistics.viewCount))
        return -1;
      if (Number(a.statistics.viewCount) < Number(b.statistics.viewCount))
        return 1;
      return 0;
    });

    // Storing the three latest videos uploaded in topThreeVideos
    const topThreeVideos = playList.data.items.splice(0, 3).map((video) => {
      return {
        videoId: video.snippet.resourceId.videoId,
        channelTitle: video.snippet.channelTitle,
        videoTitle: video.snippet.title,
      };
    });

    const sortedData = mostViewedVideo.data.items.sort((a, b) => {
      if (Number(a.statistics.viewCount) > Number(b.statistics.viewCount))
        return -1;
      if (Number(a.statistics.viewCount) < Number(b.statistics.viewCount))
        return 1;
      return 0;
    });

    const thumbnailsData = sortedData.map((video) => {
      return {
        views: video.statistics.viewCount,
        likes: video.statistics.likeCount,
        title: video.snippet.title,
        thumbnails: video.snippet.thumbnails.high.url,
      };
    });

    if (
      Object.keys(topThreeVideos).length ||
      Object.keys(sortedTopVideo).length ||
      Object.keys(thumbnailsData).length
    ) {
      res.status(200).json({
        latestVideos: topThreeVideos,
        mostViewedVideo: Object.keys(sortedTopVideo).length
          ? {
              videoId: sortedTopVideo[0].id,
              channelTitle: sortedTopVideo[0].snippet.channelTitle,
              videoTitle: sortedTopVideo[0].snippet.title,
              views: sortedTopVideo[0].statistics.viewCount,
            }
          : [],
        bestThumbnails: thumbnailsData.splice(0, 3),
        topThreeKeywords: sortedTopVideo[0]?.snippet?.tags
          ? sortedTopVideo[0].snippet?.tags?.splice(0, 3)
          : [],
      });
    } else {
      res.status(404).send({
        message: "Video not found",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getChannelData,
  channelVideoData,
};
