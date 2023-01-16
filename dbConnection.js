const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "sql11.freesqldatabase.com", // HOST NAME
    user: "sql11591185", // USER NAME
    database: "sql11591185", // DATABASE NAME
    password: "G3rQl2FXIr", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;