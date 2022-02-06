const express = require("express");
const router = express.Router();
const connection = require('../connection');
const fetch = require('node-fetch');
const cors = require("cors");
const { config } = require('dotenv');

require("dotenv").config();

//  MIDDLEWARE
// router.use(express.json());
// router.use(express.urlencoded());
router.use(cors());

// fetches reddit wall street bets data
router.get('/reddit', async (req, res) =>  {
  const api_url = 'https://tradestie.com/api/v1/apps/reddit';
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
  } )


router.get('/:period_of_report', function (req, res) {
  const period_of_report = req.params.period_of_report;
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




module.exports = router;
 