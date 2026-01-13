const express = require('express');
const fs = require('fs');

const database = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let output = 'This is the list of our students\n';

  fs.readFile(database, 'utf8', (error, data) => {
    if (error) {
      res.send(`${output}Cannot load the database`);
      return;
    }

    const lines = data.trim().split('\n');
    const students = lines.slice(1);

    output += `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    Object.keys(fields).forEach((field) => {
      output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    });

    res.send(output.trim());
  });
});

app.listen(1245);
module.exports = app;
