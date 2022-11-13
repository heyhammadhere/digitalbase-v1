const BASE_URL = "/api/v1";

const METRICS = [
  //
  "annotationImpressions",
  "annotationClickableImpressions",
  "annotationClicks",
  "annotationClickThroughRate",
  "annotationClosableImpressions",
  "annotationCloses",
  "annotationCloseRate",
  //
  "estimatedMinutesWatched",
  "estimatedRedMinutesWatched",
  "averageViewDuration",
  "averageViewPercentage",
  //
  "comments",
  "likes",
  "dislikes",
  "shares",
  "subscribersGained",
  "subscribersLost",
  "videosRemovedFromPlaylists",
  //
  "estimatedMinutesWatched",
  "estimatedRedMinutesWatched",
  "averageViewDuration",
  "averageViewPercentage",
  //
  "views",
  "redViews",
  //
  "cardImpressions",
  "cardClicks",
  "cardClickRate",
  "cardTeaserImpressions",
  "cardTeaserClicks",
  "cardTeaserClickRate",
];

module.exports = {
  BASE_URL,
  METRICS,
};
