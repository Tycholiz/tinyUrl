const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Url = new Schema({
	longUrl: {
		type: String
	},
	shortUrl: {
		type: String
	}
},
{
	collection: 'urls'
});

module.exports = mongoose.model('Url', Url);