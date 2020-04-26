const mysql = require('mysql');

//Database Connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'volleytest'
  });

db.connect((err)=>{
    if(err) throw err;
    console.log("Mysql connected");
});

module.exports = db;