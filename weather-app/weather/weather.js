const request = require('request');

let getWeather = (latitude, longtitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/ce64c9bf1dff7f600127ac47b2822f6c/${latitude},${longtitude}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			('Unable to connect to the server');
		} else if (response.statusCode === 404) {
			callback('Unable to fetch weather');
		} else if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature
			});
		} else {
			console.log('Unable to fetch weather');	
		}	
	});
};

module.exports.getWeather = getWeather;