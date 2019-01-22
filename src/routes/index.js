const express = require('express');

const urlRouter = express.Router();

const urlsController = require('../controllers/urlsController')

urlRouter.get('/', urlsController.listUrls);
urlRouter.get('/u/:shortUrl', urlsController.redirect);
urlRouter.post('/', urlsController.createUrl)
urlRouter.post('/:id/delete', urlsController.deleteUrl)

module.exports = urlRouter;
