const mysql = require('mysql');

const config = {
    host: '127.0.0.1',
      user: 'root',
      password: 'rootroot',
      database: '13f_filings'
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;