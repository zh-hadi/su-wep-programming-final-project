const express = require('express')
const router = express.Router();
const path = require('path')


router.get("/login", (req, res)=> {
    let filepath = path.join(__dirname + "/../../frontend/login.html")
    res.sendFile(filepath)
})


router.get("/register", (req, res) => {
    let filepath = path.join(__dirname + "/../../frontend/register.html")
    res.sendFile(filepath)
})


router.get("/dashboard", (req, res) => {
    let filepath = path.join(__dirname + "/../../frontend/dashboard.html")
    res.sendFile(filepath)
})



module.exports = router