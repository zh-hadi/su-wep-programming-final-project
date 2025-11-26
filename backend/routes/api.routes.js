const express = require('express')
const routes = express.Router();

const bazarController = require('../controllers/bazar.controller');
const auth = require('../middleware/auth.middleware');

routes.get('/bazars', auth, bazarController.index);
routes.get('/bazars/:id', bazarController.show);
routes.post('/bazars', bazarController.store);
routes.put('/bazars/update/:id', bazarController.update);
routes.delete('/bazars/:id', bazarController.destroy);

module.exports = routes


