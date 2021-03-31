const db = require('./index.js');
const mongoose = require('mongoose');
const Videos = require('./videos.js');
const data = require('./data.json');

const insertData = () => {
  Videos.create(data)
    .then(() => {
      console.log('success inserting data!');
    })
    .catch((err) => {
      console.error('error inserting data: ', err);
    });
};

insertData();