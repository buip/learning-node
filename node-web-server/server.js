const express = require('express');
const hbs = require('hbs');

let app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to our site',
		currentYear: new Date().getFullYear()
	})
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