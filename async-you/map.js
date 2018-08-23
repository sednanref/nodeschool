let http = require('http');
let async = require('async');
 
let urls = [process.argv[2], process.argv[3]];

async.map(urls, (url, done) => {
    let body = '';  
    http.get(url, (res) => {
      res.on('data', (chunk) => {
        body += chunk.toString();
      });
      res.on('end', () => {
        return done(null, body);
      });
    });
  }, 
  (err, res) => {
    if (err) return console.log(err);
    console.log(res);
  }
);
