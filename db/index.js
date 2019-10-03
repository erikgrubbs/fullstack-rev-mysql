var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hrla32students'
});

connection.connect();

module.exports = connection;