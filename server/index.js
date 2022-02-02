const knex = require('knex')
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require("cors");
const port = process.env.port || 8000;
const companyRoutes = require('./routes/companyRoutes');
const fundRoutes = require('./routes/fundRoutes');
const chartRoutes = require('./routes/chartRoutes');
const { config } = require('dotenv');
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

//  MIDDLEWARE
app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

//rest api to get all holdings
app.get('/filings', function (_req, res) {
   connection.query('select * from aggregate_holdings', function (error, result, _fields) {
	  if (error) throw error;
	  res.send((result));
	});
});


//  ROUTES
app.use("/funds", fundRoutes);
app.use("/company", companyRoutes);
app.use("/charts", chartRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});