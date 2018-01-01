const request = require('request');

let geocodeAddress = (address, callback) => {
	const encodedAddress = encodeURIComponent(address)
	request({
		url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {

		if(error) {
			callback('error');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find the address');
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				longtitude: body.results[0].geometry.location.lng,
				latitude: body.results[0].geometry.location.lat
			});
		}
	});
}

module.exports.geocodeAddress = geocodeAddress;