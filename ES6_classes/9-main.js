// import listOfStudents from "./9-hoisting.js" is essentially import { default as listOfStudents } from "./9-hoisting.js";
// in order to import the other 2 classes you say import { HolbertonClass, StudentHolberton } from "./9-hoisting.js";

import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

