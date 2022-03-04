const mysql = require('mysql');
require("dotenv").config();

const connection = mysql.createConnection(
  // {
  //   host: '127.0.0.1',
  //     user: 'root',
  //     password: process.env.password,
  //     database: process.env.database
  // },
  {
    host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB
  });
  
  module.exports = connection;