const fs = require('fs'); // fs or filesystem is a built in node.js module. require loads this module

function countStudents(path) { // path is the filepath to the csv file
  let data; // declare variable data to store the file contents

  // Attempt to read file synchronously
  try {
    data = fs.readFileSync(path, 'utf8'); // read and save file text into data
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // remove empty lines at start/end and break text into lines using \n
  const lines = data.trim().split('\n');

  // remove first line which is the header
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

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
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${list}`,
    );
  });
}

module.exports = countStudents;
