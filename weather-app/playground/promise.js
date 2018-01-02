let asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Argument must be number');
			}
		});
	});
}

asyncAdd(3, 4).then((result) => {
	console.log('Result is', result);
	return asyncAdd(result, 3);
}).then((result) => {
	console.log('Second result is', result);
}).catch((error) => {
	console.log(error);
});


// let somePromise = new Promise((resolve, reject) => {
// 	// resolve('It works');
// 	reject('It does not work')
// });

// somePromise.then((message) => {
// 	console.log(message);
// }, (error) => {
// 	console.log(error);
// });