let http = require('http');
let async = require('async');
 
let urls = [process.argv[2], process.argv[3]];

async.each(urls, (url, done) => {
    let body = '';  
    http.get(url, (res) => {
      res.on('data', (chunk) => {
      });
      res.on('end', () => {
        return done();
      });
    });
  }, 
  (err) => {
    if (err) return console.log(err);
  }
);
