var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list) { 
	var newlist = list.filter(function (item){
		return (path.extname(item) == ('.'+process.argv[3]));
	});
	for (var i = 0; i < newlist.length; i++){
		console.log(newlist[i]);
	}
});
