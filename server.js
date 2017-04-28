// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 

// Express
var app = express(); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Route
app.use(express.static(path.join(__dirname, 'client/dist')));
// app.get('/', function(req, res){
	// res.send('working');
// });

app.listen(8080);

console.log('Port 8080 Is Available...');