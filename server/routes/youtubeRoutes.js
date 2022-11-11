const router = require("express").Router();
const { getChannelData, topVideo } = require("../controllers/youtube");

router.post("/channelData", getChannelData);
router.post("/topVideo", topVideo);
module.exports = router;
