const express = require('express')
const routes = express.Router();

const authController = require('../controllers/auth.controller');


routes.post("/login", authController.login);
routes.post("/register", authController.register);

module.exports = routes