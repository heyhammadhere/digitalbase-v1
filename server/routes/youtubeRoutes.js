const router = require("express").Router();
const {
  getChannelData,
  topVideo,
  latestVideos,
  bestThumbnails,
} = require("../controllers/youtube");

router.post("/channelData", getChannelData);
router.post("/topVideo", topVideo);
router.post("/latestVideos", latestVideos);
router.post("/bestThumbnails", bestThumbnails);

module.exports = router;
