const express = require('express')
const mysql = require('mysql')
const path = require('path')
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

app.get("/users", (req, res)=> {

    let query = "select * from users";
    let data = db.query(query, (err, result)=> {
        console.log(result)
        res.json(result);
    })

    // res.send({
    //     "name" : "hadiuzzaman",
    //     "age" : 25,
    // });
});

app.get("/login", (req, res) => {
    let filepath = path.join(__dirname + "/../frontend/login.html")
    res.sendFile(filepath)
})

app.listen(port, () => {
    console.log(`Project app port: ${port}`)
})