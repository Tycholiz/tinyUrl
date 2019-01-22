urlRouter.get('/', function (req, res, next) {
	Url.find({})
		.then(urls => {
			res.render('index', {
				title: 'Tiny URL',
				urls
			})
		})
		.catch(err => {
			res.status(400).send("unable to render /")
			console.info("unable to render /", err)
		})
});

urlRouter.get('/u/:shortUrl', function (req, res, next) {
	const { shortUrl } = req.params
	Url.find({
		shortUrl
	})
		.then(doc => {
			const longUrl = doc[0]['longUrl']
			res.redirect(`http://${longUrl}`)
		})
		.catch(err => {
			res.status(400).send("unable to retrieve document from db")
			console.info("unable to retrieve document from db: ", err)
		})
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

urlRouter.post('/:id/delete', function (req, res, next) {
	Url.deleteOne({
		_id: req.params.id
	})
		.then(url => {
			res.redirect('/')
		})
		.catch(err => {
			res.status(400).send("unable to delete url")
			console.info("unable to delete url: ", err)
		})
})