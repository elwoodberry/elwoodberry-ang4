// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 

// Express
var app = express(); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Route
// app.get('/', function(req, res){res.send('working');});
app.use(express.static(path.join(__dirname, 'client/dist')));

app.listen();

console.log('Port Is Available...');