const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const connection = require('../connection');
const fetch = require('node-fetch');

require("dotenv").config();



router.get('/:period_of_report', function (req, res) {
  const period_of_report = req.params.period_of_report;
// console.log(period_of_report)
    connection.query(`select cusip,name,period_of_report,shares,count(distinct fund) as stockCount from aggregate_holdings where period_of_report = "${period_of_report}" group by cusip`, 

    function (error, result, _fields) { 
       if (error) throw error;
       res.send((result));
     });
 });


 
 

  router.get('/:cusip/:period_of_report', function (req, res) {
    const cusip = req.params.cusip;
    const period_of_report = req.params.period_of_report;
    connection.query(`select * from aggregate_holdings where (period_of_report = "${period_of_report}" and cusip = "${cusip}" )order by cusip`, 
    function (error, result, _fields) { 
       if (error) throw error;
       res.send((result));
     });
 });

 //  this endpoint is to fetch the ticker symbol
 router.get('/:cusip',  (req, res) => {
//   // const cusip = req.params.cusip;
//   // console.log(cusip);
//   // const api_url = 'https://api.polygon.io/v3/reference/tickers?cusip=01609W102&apiKey=NeWGfx4zVUQhyOde7S7VAGM337cpyUeW'
//   const api_url = 'https://tradestie.com/api/v1/apps/reddit';
//   // console.log(api_url);
//   const fetch_response = await fetch(api_url);
//   const json = await fetch_response.json();
//   // console.log(json);
//   res.json(json);

//  }); 
  
//   .then(response=>{
        axios.get(`https://tradestie.com/api/v1/apps/reddit}`)
      .then(response => {
       console.log(response)
       res.send(response)
      })
})

// for whatever reason this endpoint below only works in index.js ??
router.get('/reddit', async (req, res) =>  {
  const api_url = 'https://tradestie.com/api/v1/apps/reddit';
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);
  } )

module.exports = router;
 //  axios.get('https://api.polygon.io/v3/reference/tickers?cusip=01609W102&apiKey=NeWGfx4zVUQhyOde7S7VAGM337cpyUeW')
//  axios.get('https://api.polygon.io/v3/reference/tickers?cusip='+ cusip +'&apiKey='+process.env.REACT_APP_polygon_api_key)