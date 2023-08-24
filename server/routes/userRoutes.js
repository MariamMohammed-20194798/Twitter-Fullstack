const express = require("express");
const authController = require("../controllers/authController");
const userController = require("./../controllers/userController");
const tweetController = require("./../controllers/tweetController");
const tweetsRouter = require("./tweetRouter");
const router = express.Router();

const { signup, login, logout, protect } = authController;

const { getAllTweets, addTweet } = tweetController;

const {
  getMe,
  getUser,
  deleteMe,
  updateMe,
  updateUser,
  deleteUser,
  getAllUsers,
  uploadUserPhoto,
  resizeUserPhoto,
} = userController;

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.use("/:username/tweets", tweetsRouter);

router.delete("/deleteMe", protect, deleteMe);
router.route("/me").get(protect, getMe, getUser);
router.route("/getalluser").get(getAllUsers);
router.patch("/updateMe", protect, uploadUserPhoto, resizeUserPhoto, updateMe);

router.route("/getAllTweets").get(getAllTweets);

router.route("/addTweet").post(protect, addTweet);
router.route("/:id").patch(updateUser).delete(deleteUser);

module.exports = router;
