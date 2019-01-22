import { Seeder } from "mongoose-data-seed";
// import { Url } from '../src/models';
const Url = require('../src/models').Url

// console.log(Url)

const data = [
	{
		longUrl: 'harness.com',
		shortUrl: 's84nd8'
	},
	{
		longUrl: 'blameme.com',
		shortUrl: 'd93mg8'
	},
	{
		longUrl: 'lickme.com',
		shortUrl: '9k5mg9'
	},
];

// class UrlsSeeder extends Seeder {
// 	async shouldRun() {
// 		return Url.countDocuments()
// 			.exec()
// 			.then(count => count === 0);
// 	}

// 	async run() {
// 		return Url.create(data);
// 	}
// }

var UrlsSeeder = Seeder.extend({
	shouldRun: function () {
		return Url.countDocuments()
			.exec()
			.then(count => count === 0);
	},
	run: function () {
		return Url.create(data);
	},
});

export default UrlsSeeder;