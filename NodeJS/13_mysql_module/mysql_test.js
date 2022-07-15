import mysql from 'mysql';

var connectServer = function () {
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "" });
    //var conn = mysql.createConnection({host: "localhost", user: "root", password: "", database:'test1'});
    conn.connect(function (err) {
        if (!err) {
            console.log("Connected!");
        }
        else {
            throw err;
        }
    });
    conn.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
}

var displayDatabases = function () {
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query("show databases", function (err, databases, fields) {
            if (!err) {
                console.log(databases); //use forEach loop to access database name individually
            }
            else {
                throw err;
            }
        });
    });
};

var createNewDatabase = function (dbName) {
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(`CREATE DATABASE ${dbName}`, function (err, result, fields) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
}

var dropDatabase = function (dbName) {
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(`DROP DATABASE ${dbName}`, function (err, result, fields) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
}

// Table Management
var createTable = function () {
    let sql = `CREATE TABLE IF NOT EXISTS persons(
        pid int primary key,
        name varchar(50) not null,
        address varchar(50) not null
    )`;
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "test" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, function (err, result, fields) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
}

var insertRecord = function (values) {
    let sql = `INSERT INTO persons(pid, name, address) VALUES(?)`;
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "test" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, [values], function (err, result) {
            if (!err) {
                console.log(result.affectedRows);
            }
            else {
                throw err;
            }
        });
    });
};

var displayRecords = function () {
    let sql = `SELECT * FROM persons`;
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "test" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, function (err, result) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
}

var searchRecord = function (pid) {
    let sql = `SELECT * FROM persons WHERE pid=?`;
    let values = [pid,];
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "test" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, values, function (err, result) {
            if (!err) {
                console.log(result);
            }
            else {
                throw err;
            }
        });
    });
};

var updateRecord = function (values) {
    let sql = `UPDATE persons SET name=?, address=? WHERE pid=?`;
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "test" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, values, function (err, result) {
            if (!err) {
                console.log(result.affectedRows);
            }
            else {
                throw err;
            }
        });
    });
}

var deleteRecord = function (pid) {
    let sql = `DELETE FROM persons WHERE pid=?`;
    let values = [pid,];
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "test" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, values, function (err, result) {
            if (!err) {
                console.log(result.affectedRows);
            }
            else {
                throw err;
            }
        });
    });
}

// connectServer();
// displayDatabases();
// createNewDatabase("test2");
// displayDatabases();
// dropDatabase("test2");
// displayDatabases();

// createTable();
// display all the tables of a database

// let values = [2, 'Kiran', 'Lat'];
// insertRecord(values);

// displayRecords();
// searchRecord(2);

// let values = ['Rita Bhatta', 'Lalitpur', 1];
// updateRecord(values);
// displayRecords();

// deleteRecord(1);
// displayRecords();
