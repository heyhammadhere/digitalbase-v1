const router = require("express").Router();
const { getChannelData } = require("../controllers/youtube");

router.post("/channelData", getChannelData);
module.exports = router;
