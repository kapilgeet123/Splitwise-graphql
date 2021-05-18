var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 100,
  host: "graphql.cbcmbjvjxysq.us-east-2.rds.amazonaws.com", // ip address of server running mysql
    user: 'admin',
    password: 'admin12345',
    database: 'spliwise', 
    port: 3306,  
    debug: false,
    multipleStatements: true 
});

module.exports = pool;


// var mysql = require('mysql');

// var pool= mysql.createConnection({

//   host: "splitwisedb2.cbcmbjvjxysq.us-east-2.rds.amazonaws.com", // ip address of server running mysql
//     user: 'admin',
//     password: 'admin12345',
//     database: 'spliwise',    
// });

// module.exports = pool;



