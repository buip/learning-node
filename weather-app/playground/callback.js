let getUser = (id, callback) => {
	let user = {
		id: id,
		name: 'Phuong'
	};
	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUser(15, (user) => {
	console.log(user);
});