const knex = require('knex')
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.port || 8000;
const companyRoutes = require('./routes/companyRoutes');
const fundRoutes = require('./routes/fundRoutes');
const chartRoutes = require('./routes/chartRoutes');
require("dotenv").config();


const connection = mysql.createConnection({
  host: '127.0.0.1',
    user: 'root',
    password: process.env.password,
    database: process.env.database
});


connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})

app.use(express.json());


//rest api to get all holdings
app.get('/filings', function (_req, res) {
   connection.query('select * from aggregate_holdings', function (error, result, _fields) {
	  if (error) throw error;
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

//  ROUTES
app.use("/funds", fundRoutes);
app.use("/companies", companyRoutes);
app.use("/charts", chartRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});