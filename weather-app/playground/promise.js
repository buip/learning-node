let somePromise = new Promise((resolve, reject) => {
	// resolve('It works');
	reject('It does not work')
});

somePromise.then((message) => {
	console.log(message);
}, (error) => {
	console.log(error);
});