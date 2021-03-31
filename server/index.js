const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const morgan = require("morgan");
const videoRouter = require("./router.js");

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/videos', videoRouter);

app.listen(port, () => {
  console.log(`Activity-Buddy server listening at http://localhost:${port}`)
});