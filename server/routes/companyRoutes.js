const express = require("express");
const router = express.Router();
const connection = require('../connection');


router.get('/', function (req, res) {
    connection.query(`select distinct cusip,name,shares, count(cusip) as stockCount from aggregate_holdings where period_of_report = "Q3-21" group by name`, 
    function (error, result, _fields) { 
       if (error) throw error;
       res.send((result));
     });
 });

router.get('/:cusip', function (req, res) {
    const cusip = req.params.cusip;
    connection.query(`select * from aggregate_holdings where (period_of_report = "Q3-21" and cusip = ${cusip} )order by cusip`, 
    function (error, result, _fields) { 
       if (error) throw error;
       res.send((result));
     });
 });

module.exports = router;
