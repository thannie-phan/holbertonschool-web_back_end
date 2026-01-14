// reads the CSV file and organizes students by their field.

import fs from 'fs'; // import module so Node can open and read file

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const lines = data.trim().split('\n');
    lines.shift(); // remove header

    const studentsByField = {};

    for (const line of lines) {
      const [firstname, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }

    resolve(studentsByField);
  });
});

export default readDatabase;
