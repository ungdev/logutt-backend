const mariadb = require("mariadb");

// Create a connection to the database
const connection = mariadb.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// test MariaDB connection
connection.then(conn => {
    console.log("connected ! connection id is " + conn.threadId);
  })
  .catch(err => {
    console.log("not connected due to error: " + err);
  });

module.exports = connection;