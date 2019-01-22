const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Url = new Schema({
	longUrl: {
		type: String,
		required: true,
		maxlength: 100
	},
	shortUrl: {
		type: String,
		required: true,
		maxlength: 6
	}
},
{
	collection: 'urls'
});

// Url
// 	.virtual('url')
// 	.get(function() {
// 		return
// 	})

module.exports = mongoose.model('Url', Url);