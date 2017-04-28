var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('working');
});

app.listen(3000);

console.log('Port 3000 Is Available...');