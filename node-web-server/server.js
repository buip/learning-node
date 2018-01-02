const express = require('express');

let app = express();

app.get('/', (req, res) => {
	//res.send('Hello Preston');
	res.send({
		name: 'Phuong',
		age: 20
	});
});

app.get('/bad', (req, res) => {
	res.send({
		error: {
			message: 'Bad request'
		}
	});
});

app.listen(3000);