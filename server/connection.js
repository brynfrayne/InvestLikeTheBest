const mysql = require('mysql');
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.database,
    'root',
    process.env.password,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 8000,
    },
  );
}

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//       user: 'root',
//       password: process.env.password,
//       database: process.env.database
//   });

  module.exports = connection;