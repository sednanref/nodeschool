var strftime = require('strftime');
var net = require('net');

var port = process.argv[2];


function listener(socket) {
	var data = strftime("%Y-%m-%d %H:%M");
	var data = data + "\n";
	socket.write(data);
	socket.end();
}

var server = net.createServer(listener);

server.listen(port);
