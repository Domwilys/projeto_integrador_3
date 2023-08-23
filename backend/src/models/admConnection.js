const mysql = require('mysql2');

const admConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "admins"
});

module.exports = admConnection;