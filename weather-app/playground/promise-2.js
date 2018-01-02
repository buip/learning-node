const request = require('request');

let geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		const encodedAddress = encodeURIComponent(address)
		request({
			url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		}, (error, response, body) => {
			if(error) {
				reject('error');
			} else if (body.status === 'ZERO_RESULTS') {
				reject('Unable to find the address');
			} else if (body.status === 'OK') {
				resolve({
					address: body.results[0].formatted_address,
					longtitude: body.results[0].geometry.location.lng,
					latitude: body.results[0].geometry.location.lat
				});
			}
		});
	});
};

geocodeAddress('34240').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
	console.log(error);
});