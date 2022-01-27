// const knexConfig = require('./db/knexfile.js');
const knex = require('knex')
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.port || 8000;
// Load the MySQL pool connection
// const pool = require('./config');
// const http = require('http');

const connection = mysql.createConnection({
  host: '127.0.0.1',
    user: 'root',
    password: 'rootroot',
    database: '13f_filings'
});


connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})


// Not sure if I need these two
console.log("delete the code below before handing in ");
// const axios = require('axios');
// const bodyParser = require('body-parser');
app.use(express.json());
// Display all users


//rest api to get all holdings
app.get('/filings', function (_req, res) {
   connection.query('select * from 13f_table', function (error, result, _fields) {
	  if (error) throw error;
    console.log(result);
	  res.send((result));
	});
});




// // Endpoint for specific fund
// app.get('/:fundId', (req, res) => {
//   knex.select(*).from(":fundId")
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).send("error getting fund data");
//     })
// });

// // Endpoint for specific company
// app.get('/:companyId', (req, res) => {
//   knex.select(*).from(":companyId")
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).send("error getting company data");
//     })
// });

// // Endpoint for charts --- can i just fetch an array of arrays of objects??
// // probably will need to make a routes file for this as there will be multiple distinct get request
// app.get('/charts', (req, res) => {
//   knex.select(*).from("charts")
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).send("error getting charts data");
//     })
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});