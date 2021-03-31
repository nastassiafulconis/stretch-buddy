const videoRouter = require('express').Router();
const videosController = require('./videosController.js');

videoRouter.route('/:query')
  .get((req, res) => {
    videosController.retrieveOne(req, res);
  });

videoRouter.route("/")
  .post((req, res) => {
    videosController.createOne(req, res);
  });

module.exports = videoRouter;