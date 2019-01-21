const express = require('express');
const router = express.Router();

// import { db } from '../db/mockDb'
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
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Tiny URL',
    db,
    data: req.body,
  });
});

router.post('/', function (req, res, next) {
  const shortUrl = makeId()

  db[shortUrl] = {
    longUrl: req.body.longUrl,
    shortUrl
  }

  res.redirect('/')
});

module.exports = router;
