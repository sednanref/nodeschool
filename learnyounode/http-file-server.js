var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file_loc = process.argv[3];

function callback(request, response){
	var file_content = fs.createReadStream(file_loc, 'utf-8');
	file_content.pipe(response);
}

var server = http.createServer(callback);

server.listen(port);

