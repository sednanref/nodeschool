var concat = require('concat-stream')
var http = require('http')

var url = process.argv[2];

http.get(url, function(res){
	res.setEncoding('utf8');
	res.pipe(concat(function(data){
		console.log(data.length);
		console.log(data);
	}));
});
