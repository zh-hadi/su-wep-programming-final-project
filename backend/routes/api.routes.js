const express = require('express')
const routes = express.Router();

const bazarController = require('../controllers/bazar.controller');

routes.post('/bazar', bazarController.store);

module.exports = routes


