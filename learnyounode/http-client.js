var http = require('http');

var url = process.argv[2];

http.get(url, function(res){
	str_res = res.setEncoding('utf8');
	res.on('data', function (chunk){
		console.log(chunk);
	});
});
