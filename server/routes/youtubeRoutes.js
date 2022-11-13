const router = require("express").Router();
const { getChannelData, channelVideoData } = require("../controllers/youtube");

router.post("/channelData", getChannelData);
router.post("/videoData", channelVideoData);

module.exports = router;
