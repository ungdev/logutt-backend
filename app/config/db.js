const mariadb = require('mysql');

// Create a connection to the database
const connection = mariadb.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// test DB connection
connection.connect((error) => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

module.exports = connection;
