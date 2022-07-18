//connection
//insert
//select all

// npm install mysql
import mysql from 'mysql';

// connection test
/*
// var conn = mysql.createConnection({host: "localhost", user: "root", password: ""});
var conn = mysql.createConnection({host: "localhost", user: "root", password: "", database:'mern7'});
conn.connect(function(err) {
    if (!err) {
        console.log("Connect with database successfully.");
    }
    else{
        throw err;
    }    
});
conn.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection successfully.');
});
*/

//let values = ['Raj Rai', 'raj@gmail.com', 'test1', 'message1'];

var insertQuery=function (values){
  var res = false;
  console.log(values);
  let sql = `INSERT INTO queries(name, email, subject, message ) VALUES(?)`;
  //let values = ['Raj Rai', 'raj@gmail.com', 'test1', 'message1'];
  var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mern7" });
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(sql, [values], function (err, result) {
      if (!err) {
        //console.log(result.affectedRows);
        console.log("Insert record successfully");
        res=true;
      }
      else {
        res=false;
        throw err;
      }
    });
  });
  return res;
}
export {insertQuery};