var mysql = require('mysql');

var pool = mysql.createPool({

  host: "splitwisedb2.cbcmbjvjxysq.us-east-2.rds.amazonaws.com", // ip address of server running mysql
    user: 'admin',
    password: 'admin12345',
    database: 'spliwise',    
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



