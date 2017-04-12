const users = require('./../controllers/users.js');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.post('/contact', users.contact)

};
