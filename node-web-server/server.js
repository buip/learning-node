const fs = require('fs');
const express = require('express');
const hbs = require('hbs');

let app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	let now = new Date().toString();
	let log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log(err);
		}
	});
	next();
});

app.use((req, res, next) => {
	res.render('maintainance.hbs', {
		pageTitle: 'Maintainance',
		maintainanceMessage: 'The site is being updated'
	});
});

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to our site',
		currentYear: new Date().getFullYear()
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
})

app.get('/bad', (req, res) => {
	res.send({
		error: {
			message: 'Bad request'
		}
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});