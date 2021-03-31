const mongoose = require("mongoose");
const url = 'mongodb://mongo:27017/videos';
mongoose.Promise = Promise;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch((error) => console.error(error));

const db = mongoose.connection;

module.exports = db;