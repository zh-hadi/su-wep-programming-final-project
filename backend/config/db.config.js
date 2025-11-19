const mysql = require('mysql')

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'su_final_project'
});

db.connect((err) => {
    if(err) {
        console.log("Something went wrong while connecting to the database: ", err);
        throw err;
    }else {
        console.log("MySql server connected...")
    }
});

module.exports = db