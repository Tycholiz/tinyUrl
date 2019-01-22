// import mongooseLib from 'mongoose';

// import Urls from './seeders/urls.seeder'

// mongooseLib.Promise = global.Promise;

// // Export the mongoose lib
// export const mongoose = mongooseLib;

// // Export the mongodb url
// export const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/tinyUrl';

// /*
//   Seeders List
//   ------
//   order is important
// */
// export const seedersList = {
//   Urls,
// };



var mongooseLib = require('mongoose');

var config = require('./dbconfig');

var UrlsSeeder = require('./seeders/urls.seeder');


mongooseLib.Promise = global.Promise || Promise;

module.exports = {
  // Export the mongoose lib
  mongoose: mongooseLib,

  // Export the mongodb url
  mongoURL: config.DB,

  /*
    Seeders List
    ------
    order is important
  */
  seedersList: {
    Urls: UrlsSeeder,
  },
};