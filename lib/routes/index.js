const express = require('express');
// const router = express.Router();
const urlRouter = express.Router();

const Url = require('../models/Url');

import { makeId } from '../helper/makeId'

/* GET home page. */
urlRouter.get('/', function (req, res, next) {
  Url.find({}, function(err, urls) {
    res.render('index', {
      title: 'Tiny URL',
      urls
    });
  })
});

urlRouter.get('/u/:shortUrl', function (req, res, next) {
  const { shortUrl } = req.params
  Url.find({
    shortUrl
  })
  .then(doc => {
    const longUrl = doc[0]['longUrl']
    console.log(longUrl)
    res.redirect(`http://${longUrl}`)
  })
  .catch(err => {
    res.status(400).send("unable to retrieve document from db")
    console.info("unable to retrieve document from db: ", err)
  })
  // res.redirect(`${longUrl}`)
});

urlRouter.post('/', function (req, res, next) {
  const { longUrl } = req.body
  const shortUrl = makeId()

  const url = new Url({
    longUrl,
    shortUrl
  }) // url = document, Url = instance of the collection Urls
  url.save()
    .then(url => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(400).send("unable to save URL to db")
      console.info("unable to save URL to db: ", err)
    })
})

urlRouter.post('/:id/delete', function(req, res, next) {
  console.log(req.params)
  Url.deleteOne({
    _id: req.params.id
  })
    .then(url => {
      console.log('url', url)
      res.redirect('/')
    })
    .catch(err => {
      res.status(400).send("unable to delete url")
      console.info("unable to delete url: ", err)
    })
})

module.exports = urlRouter;
