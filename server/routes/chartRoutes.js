const express = require("express");
const router = express.Router();
const connection = require('../connection');



router.get('/', function (_req, res) {
    connection.query('select * from 13f_table', function (error, result, _fields) {
       if (error) throw error;
       res.send((result));
     });
 });


module.exports = router;
