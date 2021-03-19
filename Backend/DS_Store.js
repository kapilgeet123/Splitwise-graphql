var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 0,
  host: "splitwisedb2.cbcmbjvjxysq.us-east-2.rds.amazonaws.com", // ip address of server running mysql
    user: 'admin',
    password: 'admin12345',
    database: 'spliwise',    
});

module.exports = pool;