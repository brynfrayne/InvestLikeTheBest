const express = require("express");
const router = express.Router();
const connection = require('../connection');



router.get('/topStocks', function (_req, res) {
    connection.query('select cusip,name,sum(value) as stockvalue from aggregate_holdings where period_of_report = "Q3-21" group by cusip', 
    function (error, result, _fields) { 
       if (error) throw error;
       res.send((result));
     });
 });


module.exports = router;
