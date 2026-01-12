// use express instead of http

const express = require('express');

const app = express();

// express has built in app.get to help handle header + auto end response handling.
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
