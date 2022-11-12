const router = require("express").Router();
const {
  getChannelData,
  topVideo,
  latestVideos,
} = require("../controllers/youtube");

router.post("/channelData", getChannelData);
router.post("/topVideo", topVideo);
router.post("/latestVideos", latestVideos);

module.exports = router;
