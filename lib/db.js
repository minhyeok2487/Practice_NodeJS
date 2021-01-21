var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alsgur11',
    database: 'opentutorials',
    port: 3307
  });
db.connect();

module.exports=db;