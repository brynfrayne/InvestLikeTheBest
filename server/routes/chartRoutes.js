const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const fs = require("fs");


router.get('/', function (_req, res) {
    connection.query('select * from 13f_table', function (error, result, _fields) {
       if (error) throw error;
       res.send((result));
     });
 });


module.exports = router;
