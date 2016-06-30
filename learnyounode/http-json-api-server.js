var http = require('http');
var url = require('url');

var port = process.argv[2];

function callback(request, response){
	var str = request.url;
	access = str.split('?')[0];
	time = url.parse(str).query.split('=')[1].split('T')[1];
	date = new Date(url.parse(str).query.split('=')[1]);
	if(access == "/api/parsetime"){
		time_obj = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};
	}else if (access == "/api/unixtime"){
		utime = date.getTime();
		time_obj = {
			"unixtime": utime
		};		
	}
	response.writeHead(200, { 'Content-Type': 'application/json'});
	response.end(JSON.stringify(time_obj));
	
}

server = http.createServer(callback);

server.listen(port);
