const mysql = require('promise-mysql');
require('dotenv').config();

 module.exports = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.MYSQL_HOST,
    user            : process.env.MYSQL_USER,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DATABASE
});