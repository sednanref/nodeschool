var concat = require('concat-stream');
var http = require('http');

//var url1 = process.argv[2];
//var url2 = process.argv[3];
//var url3 = process.argv[4];
//var urls = [url1, url2, url3];
var urls = process.argv.slice(2);
var count = 0;
var result = [];
urls.forEach(function(url, i){
	http.get(url, function(res){
		res.setEncoding('utf8');
		res.pipe(concat(function (data){
			result[i] = data;
			count++;
		
		if (count === urls.length){
			result.forEach(function(r){
			console.log(r);
			})
		}
		}));
	})
});
