// Update with your config settings.
const { config } = require('dotenv');
require("dotenv").config();

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'rootroot',
      database: '13f_filings',
      charset: 'utf8',
  },
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      charset: 'utf8'
    }
  }
}
