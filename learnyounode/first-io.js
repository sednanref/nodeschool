var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var content = buffer.toString();
content = content.split('\n');
console.log(content.length - 1);
