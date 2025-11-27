const express = require('express')
const router = express.Router();
const path = require('path')
const auth = require('../middleware/auth.middleware');


router.get("/login", (req, res)=> {
    let filepath = path.join(__dirname + "/../../frontend/login.html")
    res.sendFile(filepath)
})


router.get("/register", (req, res) => {
    let filepath = path.join(__dirname + "/../../frontend/register.html")
    res.sendFile(filepath)
})
router.get("/", (req, res) => {
    return res.redirect("/dashboard");
});

router.get("/dashboard", auth, (req, res) => {
    let filepath = path.join(__dirname + "/../../frontend/dashboard.html")
    res.sendFile(filepath)
})

router.get("/add-bazar", auth, (req, res) => {
    let filepath = path.join(__dirname + "/../../frontend/add-bazar.html")
    res.sendFile(filepath)
})

router.get("/bazars", auth, (req, res) => {
    let filepath = path.join(__dirname + "/../../frontend/bazars.html")
    res.sendFile(filepath)
})

router.get("/edit-bazar/:id", auth, (req, res) => {
    let filepath = path.join(__dirname + "/../../frontend/edit-bazar.html")
    res.sendFile(filepath)
})


module.exports = router