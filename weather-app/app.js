const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

const address = argv.a;
geocode.geocodeAddress(address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(address);
		weather.getWeather(results.latitude, results.longtitude, (errorMessage, results) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`It's currently ${results.temperature}F`);
			}
		});
	}
});