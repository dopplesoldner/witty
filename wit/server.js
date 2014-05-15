var express = require('express');
var http = require('http');
var wit = require('./wit');
var url = require('url');

var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  app.use('/bower_components',  express.static(__dirname + '/bower_components'));
  app.use(express.bodyParser());              // pull information from html in POST
});

app.get('*', function(req, res){
	// if (req.url === '/favicon.ico') {
	// 	return;
	// }
	// var queryObject = url.parse(req.url,true).query;
	// var wit_request = wit.request_wit(queryObject.Body);

	// wit_request.when(function(err, response) {
 //    if (err) console.log(err); // handle error here
 //    res.writeHead(200, {'Content-Type': 'application/json'});
 //    res.end(JSON.stringify(response));
 //  });
  res.sendfile('./public/index.html');
});

var server = app.listen(8080, function() {
	console.log('Listening on port %d', server.address().port);
});