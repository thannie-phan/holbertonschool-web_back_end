const http = require('http');

const app = http.createServer((req, res) => { // create server that require and response
  res.end('Hello Holberton School!'); // end response
});
app.listen(1245); // make the server listen on port 1245

module.exports = app; // export server
