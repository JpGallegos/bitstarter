var express = require('express');
var fs = require('fs');

var infile = 'index.html'
var input = fs.readFileSync(infile).toString('utf-8', 0, input.length);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(input);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
