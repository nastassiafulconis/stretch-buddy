var Videos = require('./db/videos.js');

exports.createOne = (req, res) => {
  Videos.create(req.body)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error('error adding a video: ', err);
      res.sendStatus(500);
    });
};

exports.retrieveOne = (req, res) => {
  Videos.find(req.params)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error('error retrieving a video: ', err);
      res.sendStatus(500);
    });
};