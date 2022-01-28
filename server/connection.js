const mysql = require('mysql');
require("dotenv").config();


const connection = mysql.createConnection({
    host: '127.0.0.1',
      user: 'root',
      password: process.env.password,
      database: process.env.database
  });

  module.exports = connection;