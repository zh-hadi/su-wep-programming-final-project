const express = require('express')
const mysql = require('mysql')
const path = require('path')
const app = express()
const port = 3000

const pagesRouters = require('./routes/pages.routes')
const authRoutes = require('./routes/auth.routes')

app.use(express.json())
app.use("/", pagesRouters)
app.use("/auth/", authRoutes)


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



app.listen(port, () => {
    console.log(`Project app port: ${port}`)
})