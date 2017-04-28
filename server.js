// Dependencies
var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
// var path = require('path'); 

// Routes
// var index = require('./routes/index');

// Port
// var port = 8080;

// Express


// Body Parser
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

// Static Route Angular
// app.use(express.static(path.join(__dirname, 'client/dist')));

// Routes
// app.use('/', index);


// application -------------------------------------------------------------
app.get('/', function(req, res) {
	res.sendfile('client/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// Listen to run the server
// app.listen(port, function(){
	// console.log('Available On Port: ' + port);
// });


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");