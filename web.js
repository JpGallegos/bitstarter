var express = require('express');
var fs = require('fs');

var infile = 'index.html'
var input = fs.readFileSync(infile);

console.log("Read: " + input + "\nFrom: " + infile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(input.toString('utf-8', 0, input.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
