const express = require('express')
const routes = express.Router();

const bazarController = require('../controllers/bazar.controller');

routes.get('/bazars', bazarController.index);
routes.get('/bazars/:id', bazarController.show);
routes.post('/bazars', bazarController.store);
routes.put('/bazars/update/:id', bazarController.update);

module.exports = routes


