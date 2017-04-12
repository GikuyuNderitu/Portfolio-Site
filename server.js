'use strict'
//Import Dependencies
//Initialize express
const express = require('express');
const app = express()
const PORT = process.env.PORT || 1337

//DB stuff
require('./server/utils/mongoose');

//Start customized middleware
require('./server/utils/middleware')(app)

// Route and route logic
require('./server/utils/routes')(app)


app.listen(PORT, function () {
	console.log(`Running on the ${PORT} port!`);
})
