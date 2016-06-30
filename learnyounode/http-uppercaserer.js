var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

function callback(request, response){
	if (request.method != "POST"){
		response.end("Send me a post!");
	}
	request.pipe(map(function (chunk){
				return chunk.toString().toUpperCase();
			})
	).pipe(response);	
}

var server = http.createServer(callback);

server.listen(port);
