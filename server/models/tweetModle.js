const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  text: String,
  photo: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Tweet must belong to a user."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
tweetSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name username photo Bio",
  });
  next();
});
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
