const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
const { config } = require('dotenv');
const fetch = require('node-fetch');
const apicache = require('apicache');

require("dotenv").config();

const cache = apicache.middleware;

const companyRoutes = require('./routes/companyRoutes');
const fundRoutes = require('./routes/fundRoutes');
const chartRoutes = require('./routes/chartRoutes');
const userRoutes = require('./routes/userRoutes');

// Commenting the below out to try and create connection with cleardb
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//     user: 'root',
//     password: process.env.password,
//     database: process.env.database
// }); 

// created the below to connect to cleardb & used createPool as per the tutorial im following

  const db_config = {
  host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
}; 
// connection.connect();

// commented this out to try and test the connection
// connection.connect(function(err) {
//   if (err) throw err
//   console.log('You are now connected with mysql database...')
// })
var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                           // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

//  MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//  ROUTES
app.use("/funds", fundRoutes);
app.use("/company", companyRoutes);
app.use("/charts", chartRoutes);
app.use("/users", userRoutes)

// rest api to get all holdings
app.get('/filings', function (_req, res) {
   connection.query('select * from aggregate_holdings', cache('60 minutes'), function (error, result, _fields) {
	  if (error) throw error;
	  res.send((result));
	});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});