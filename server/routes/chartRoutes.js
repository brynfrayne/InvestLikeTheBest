const express = require("express");
const router = express.Router();
const connection = require('../connection');
const apicache = require('apicache');

const cache = apicache.middleware;


router.get('/topStocks', cache('60 minutes'), function (_req, res) {
    connection.query('select cusip,name,shares,sum(value) as stockvalue from aggregate_holdings where period_of_report = "Q3-21" group by cusip', 
    function (error, result, _fields) { 
       if (error) throw error;
       res.send((result));
     });
 });


module.exports = router;
