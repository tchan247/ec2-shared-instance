var express = require('express');
var app = express();
var port = 3001;

app.get('/', function(req, res) {
	console.log("Hello from app 2!");
});

app.listen(port, function() {
  console.log("listening on port: " + port);
});

