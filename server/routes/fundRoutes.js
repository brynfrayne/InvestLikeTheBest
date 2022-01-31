const express = require("express");
const router = express.Router();
const connection = require('../connection');

// get fund list info -- 
router.get('/', function (_req, res) {
    connection.query('select distinct investor,fund, CIK from 13f_table', function (error, result, _fields) {
       if (error) throw error;
       res.send((result));
     });
 });

// get specific fund info -- right now has all 4 quarters of data!!!
router.get('/:CIK/:period_of_report', function (req, res) {
    const CIK = req.params.CIK;
    const period_of_report = req.params.period_of_report;
    console.log(period_of_report)
    connection.query(`select * from aggregate_holdings where(CIK=${CIK} and period_of_report='${period_of_report}')`, function (error, result, _fields) {
       if (error) throw error;
       res.send((result));
     });
 });


module.exports = router;
