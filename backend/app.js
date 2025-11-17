const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

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

app.listen(port, () => {
    console.log(`Project app port: ${port}`)
})