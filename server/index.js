const knexConfig = require('./server/db/knexfile');
const knex = require('knex')(knexConfig);
const express = require('express');
const app = express();
const port = process.env.port || 8000;


// Not sure if I need these two
console.log("delete the code below before handing in ");
// const axios = require('axios');
// const bodyParser = require('body-parser');


app.use(express.json());

// Endpoint for specific fund
app.get('/:fundId', (req, res) => {
  knex.select(*).from(":fundId")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send("error getting fund data");
    })
});

// Endpoint for specific company
app.get('/:companyId', (req, res) => {
  knex.select(*).from(":companyId")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send("error getting company data");
    })
});

// Endpoint for charts --- can i just fetch an array of arrays of objects??
app.get('/charts', (req, res) => {
  knex.select(*).from("charts")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send("error getting charts data");
    })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});