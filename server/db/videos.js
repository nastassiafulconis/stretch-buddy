const db = require("./index.js");
const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
  query: String,
  videoId: String
});

const Videos = mongoose.model('Videos', videosSchema);

module.exports = Videos;