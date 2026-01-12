const fs = require('fs');
const http = require('http');

const database = process.argv[2]; // the filename type after node 5-http.js

const app = http.createServer((req, res) => { // create server that require and response
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    fs.readFile(database, 'utf8', (error, data) => { // read file, copy everything from here to end from file 3
      if (error) { // if error reject and return
        res.end('Cannot load the database');
        return;
      }
      // remove empty lines at start/end and break text into lines using \n
      const lines = data.trim().split('\n');

      // remove first line which is the header
      const students = lines.slice(1);

      res.write(`Number of students: ${students.length}\n`);

      const fields = {}; // empty object to store students by field

      // go thorugh each student. line is one row from the csv
      students.forEach((line) => {
        const [firstname, , , field] = line.split(','); // ignore everything in between first name and field and only split by first name and field
        if (!fields[field]) { // if field doesn't exist yet
          fields[field] = []; // create an empty array for the field
        }
        fields[field].push(firstname); // add name to the correct field
      });

      // // oop through each field and format the list of student names
      Object.keys(fields).forEach((field) => {
        const list = fields[field].join(', '); // convert the fields[field] array into 1 string using , . without this, js auto convert array into string but default separator is comma only and would be missing space after commas so it wouldn't look like the eg shown in the exercise
        res.write(
          `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`,
        );
      });
      res.end();
    });
  }
});

app.listen(1245);
module.exports = app;
