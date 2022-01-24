const knexConfig = require('./db/knexfile');
//initialize knex
// const knex = require('knex')(knexConfig[process.env.NODE_ENV])
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});