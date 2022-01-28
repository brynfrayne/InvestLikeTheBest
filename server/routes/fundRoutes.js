const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const fs = require("fs");

// get specific fund info -- 
router.get('/:CIK', function (_req, res) {
    // const CIK = req.params.CIK;
    connection.query(`select * from aggregate_holdings where CIK='0000783412'`, function (error, result, _fields) {
       if (error) throw error;
       res.send((result));
     });
 });


module.exports = router;
