var http = require('http')  
 , async = require('async')
 , fs = require('fs');
 
async.waterfall([
  (cb) => {
    let file = process.argv[2];
    fs.readFile(file, (err, url) => {
      if (err) {
        cb(err)
      }
      cb(null, url.toString());
    });
  },
  (url, cb) => {
    let body = '';
    http.get(url, (res) => {
      res.on('data', (chunk) => {
        body += chunk.toString();
      });
      res.on('end', () => {
        cb(null, body);
      });
    }).on('error', (err) => {
      cb(err);
    });
  }
  ], (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(res);
  }
);