const request = require('request');

let geocodeAddress = (address) => {
	const encodedAddress = encodeURIComponent(address)
	request({
		url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {

		if(error) {
			console.log('error');
		} else if (body.status === 'ZERO_RESULTS') {
			console.log('Unable to find the address')
		} else if (body.status === 'OK') {
			console.log(`Address: ${body.results[0].formatted_address}`);
			console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
			console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
		}
	});
}

module.exports = {
	geocodeAddress
}