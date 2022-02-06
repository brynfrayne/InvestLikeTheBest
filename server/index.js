const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require("cors");
const port = process.env.port || 8000;
const { config } = require('dotenv');
const fetch = require('node-fetch');
require("dotenv").config();

const companyRoutes = require('./routes/companyRoutes');
const fundRoutes = require('./routes/fundRoutes');
const chartRoutes = require('./routes/chartRoutes');

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

//  ROUTES
app.use("/funds", fundRoutes);
app.use("/company", companyRoutes);
app.use("/charts", chartRoutes);

// rest api to get all holdings
app.get('/filings', function (_req, res) {
   connection.query('select * from aggregate_holdings', function (error, result, _fields) {
	  if (error) throw error;
	  res.send((result));
	});
});


  //  this endpoint is to fetch the ticker symbol
 app.get('/:cusip', async (req, res) => {
  const cusip = req.params.cusip; 
  const api_url = `https://api.polygon.io/v3/reference/tickers?cusip=${cusip}&apiKey=${process.env.REACT_APP_polygon_api_key}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);
 }); 

// this end point will fetch the logo for the ticker
app.get('/:cusip/:ticker', async (req, res) => {
  const ticker = req.params.ticker;
  
  const api_url = `https://api.twelvedata.com/logo?symbol=${ticker}&apikey=${process.env.REACT_APP_twelveData_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);
 }); 





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});