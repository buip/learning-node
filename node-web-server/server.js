const fs = require('fs');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

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
	res.render('home.hbs', {
		pageTitle: 'Maintainance',
		message: 'The site is being updated',
		currentYear: new Date().getFullYear()
	});
});

app.use(express.static(__dirname + '/public'));

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

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});