const express = require("express");
const router = express.Router();
const connection = require('../connection');
const fetch = require('node-fetch');
const cors = require("cors");
const { config } = require('dotenv');
const apicache = require('apicache');

require("dotenv").config();

//  MIDDLEWARE
router.use(express.json());
// router.use(express.urlencoded());
router.use(cors());
const cache = apicache.middleware;

// fetches reddit wall street bets data
router.get('/reddit', cache('60 minutes'), async (req, res) =>  {
  const api_url = 'https://tradestie.com/api/v1/apps/reddit';
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
  } )


router.get('/:period_of_report', cache('60 minutes'), function (req, res) {
  const period_of_report = req.params.period_of_report;
    connection.query(`select cusip, name, period_of_report, shares, count(distinct fund) as stockCount from aggregate_holdings where period_of_report = "${period_of_report}" group by cusip`, 

    function (error, result, _fields) { 
       if (error) throw error;
       res.send((result));
     });
 });

   //  this endpoint is to fetch the ticker symbol
   router.get('/:cusip/ticker', cache('60 minutes'), async (req, res) => {
    const cusip = req.params.cusip; 

    const api_url = `https://api.polygon.io/v3/reference/tickers?cusip=${cusip}&apiKey=${process.env.REACT_APP_polygon_api_key}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.send(json);
   }); 
 
   // this end point will fetch the logo for the ticker
router.get('/:cusip/:ticker/logo', cache('60 minutes'), async (req, res) => {
  const ticker = req.params.ticker;
  const api_url = `https://api.twelvedata.com/logo?symbol=${ticker}&apikey=${process.env.REACT_APP_twelveData_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);
 }); 

//  this end point will fetch the stats for the company
router.get('/:ticker/stats', cache('60 minutes'), async (req, res) => {
  const ticker = req.params.ticker;
  const api_url = `https://financialmodelingprep.com/api/v3/ratios/${ticker}?period=quarter&limit=140&apikey=${process.env.REACT_APP_financial_modelling_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);  
})

//  this endpoint will fetch the earnings suprise data
router.get('/earningssuprises/:ticker', cache('60 minutes'), async (req, res) => {
  const ticker = req.params.ticker;
  const api_url = `https://financialmodelingprep.com/api/v3/earnings-surprises/${ticker}?apikey=${process.env.REACT_APP_financial_modelling_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);  
})


// this endpoint fetches the price
router.get('/:ticker/price', cache('60 minutes'), async (req,res) => {
  const ticker = req.params.ticker;
  const api_url = `https://financialmodelingprep.com/api/v3/quote-short/${ticker}?apikey=${process.env.REACT_APP_financial_modelling_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);  
})

// this endpoint fetches latest news for stock
router.get('/:ticker/news', cache('60 minutes'), async (req,res) => {
  const ticker = req.params.ticker;
  const api_url = `https://financialmodelingprep.com/api/v3/stock_news?tickers=${ticker}&limit=50&apikey=${process.env.REACT_APP_financial_modelling_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);  
})


//  this endpoint fetches all the investors who hold the stock for the period 
router.get('/:cusip/:period_of_report/institutional-ownership', cache('60 minutes'), function (req, res) {
  const cusip = req.params.cusip;
  const period_of_report = req.params.period_of_report;
  connection.query(`select * from aggregate_holdings where (period_of_report = "${period_of_report}" and cusip = "${cusip}" )order by cusip`, 
  function (error, result, _fields) { 
      if (error) throw error;
      res.send((result));
    });
 });

//  this endpoint fetches the discounted cash flow value for the specific stock
router.get('/:ticker/dcf', cache('60 minutes'), async (req, res) => {
  const ticker = req.params.ticker;
  const api_url = `https://financialmodelingprep.com/api/v3/discounted-cash-flow/${ticker}?apikey=${process.env.REACT_APP_financial_modelling_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);  
})

//  this endpoint fetches analyst buy/sell ratings
router.get('/:ticker/buy-ratings', cache('60 minutes'), async (req, res) => {
  const ticker = req.params.ticker;
  const api_url = `https://financialmodelingprep.com/api/v3/grade/${ticker}?limit=50&apikey=${process.env.REACT_APP_financial_modelling_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);  
})

// this endpoint fetches stock ratings 
router.get('/:ticker/stock-score', cache('60 minutes'), async (req, res) => {
  const ticker = req.params.ticker;
  const api_url = `https://financialmodelingprep.com/api/v3/rating/${ticker}?apikey=${process.env.REACT_APP_financial_modelling_apiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);  
}) 



module.exports = router;
 