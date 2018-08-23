// Remember that this could be achieved also using an array.

let http = require('http');
let async = require('async');
 
let url1 = process.argv[2];
let url2 = process.argv[3];

async.series({
  requestOne: (done) => {
    let body = '';
    http.get(url1, (res) => {
      res.on('data', (chunk) => {
        body += chunk.toString();
      });
      res.on('end', () => {
        done(null, body);
      });
    }).on('error', (err) => {
      done(err);
    })
  },
  requestTwo: (done) => {
    let body = '';
    http.get(url2, (res) => {
      res.on('data', (chunk) => {
        body += chunk.toString();
      });
      res.on('end', () => {
        done(null, body);
      });
    }).on('error', (err) => {
      done(err);
    })
  }
},
  (err, results) => {
    if (err) {
      return console.log(err);
    }
    console.log(results);
  }
);