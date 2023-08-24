const express = require("express");
const authController = require("../controllers/authController");
const tweetController = require("./../controllers/tweetController");

const router = express.Router({ mergeParams: true });

const { protect } = authController;

const { getTweets, uploadTweetPhoto } = tweetController;

router.route("/").get(getTweets).post(protect, uploadTweetPhoto);
module.exports = router;
