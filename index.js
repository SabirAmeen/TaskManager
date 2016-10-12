var express = require('express'),
	path = require('path'),
	http = require('http');
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html');
});



server.listen(8085);
console.log('Listening on port 8085...');