const express = require('express');
const router = express.Router();

import { db } from '../db/mockDb'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Tiny URL',
    db,
    data: req.body,
  });
});

module.exports = router;
