const mysql = require('mysql');

const config = {
    host: '127.0.0.1',
      user: 'root',
      password: 'rootroot',
      database: '13f_filings'
};

const connection =mysql.createConnection(config); //added the line
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});

module.exports ={
     connection : mysql.createConnection(config) 
} 