const mariadb = require("mariadb");
const dbConfig = require("../config/db.config");

// Create a connection to the database
const connection = mariadb.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// test MariaDB connection
connection.then(conn => {
    console.log("connected ! connection id is " + conn.threadId);
  })
  .catch(err => {
    console.log("not connected due to error: " + err);
  });


module.exports = connection;