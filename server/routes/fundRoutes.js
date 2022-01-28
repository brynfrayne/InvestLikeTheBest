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

// get specific fund info -- 
router.get('/:CIK', function (_req, res) {
    // const CIK = req.params.CIK;
    connection.query(`select * from aggregate_holdings where CIK='0000783412'`, function (error, result, _fields) {
       if (error) throw error;
       res.send((result));
     });
 });


module.exports = router;
