const express = require('express');
// const router = express.Router();
const urlRouter = express.Router();

const Url = require('../models/Url');

import { makeId } from '../helper/makeId'

const db = {
  "s7v8e9": {
    longUrl: "facebook.com",
    shortUrl: "s7v8e9"
  },
  "k3jdl9": {
    longUrl: "google.com",
    shortUrl: "k3jdl9"
  },
  "s83mf9": {
    longUrl: "microsoft.com",
    shortUrl: "s83mf9"
  }
}

/* GET home page. */
urlRouter.get('/', function (req, res, next) {
  Url.find({}, function(err, urls) {
    res.render('index', {
      title: 'Tiny URL',
      db,
      urls
    });
  })
});

urlRouter.post('/', function (req, res, next) {
  const { longUrl } = req.body
  const shortUrl = makeId()

  const url = new Url({
    longUrl,
    shortUrl
  }) //url (const url) is a document that is being saved in the collection Url (new Url)
  url.save()
    .then(url => {
      console.log('url:', url)
      res.redirect('/')
    })
    .catch(err => {
      res.status(400).send("unable to save URL to db")
      console.info("unable to save URL to db: ", err)
    })
})

// router.post('/', function (req, res, next) {
//   const shortUrl = makeId()
//   const { longUrl } = req.body

//   db[shortUrl] = {
//     longUrl,
//     shortUrl
//   }

//   res.redirect('/')
// });

// module.exports = router;
module.exports = urlRouter;
