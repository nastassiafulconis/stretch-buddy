const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`Activity-Buddy server listening at http://localhost:${port}`)
});