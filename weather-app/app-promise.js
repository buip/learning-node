const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
})
.help()
.alias('help', 'h')
.argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl =  `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find the address');
	}
	let latitude = response.data.results[0].geometry.location.lat;
	let longtitude = response.data.results[0].geometry.location.lng;
	let weatherUrl = `https://api.darksky.net/forecast/ce64c9bf1dff7f600127ac47b2822f6c/${latitude},${longtitude}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);
}).then((response) => {
	let temperature = response.data.currently.temperature;
	console.log('Temperature is', temperature)
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('cannot connect to the server');
	} else {
		console.log(e.message);
	}
});
