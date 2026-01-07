// filter get a smaller list from a bigger one (array to array). reduce combine everything into one final result
// the eg below has input array and output is anything
// syntax array.reduce((accumulator, currentItem) => {
// return updatedAccumulator;
// }, initialValue);

export default function getStudentIdsSum(listOfStudents) {
    return listOfStudents.reduce((accumulator, student) => accumulator + student.id, 0);
}

// without the shorthand it would look like
//export default function getStudentIdsSum(listOfStudents) {
// return listOfStudents.reduce(function (accumulator, student) {
//     const newTotal = accumulator + student.id;
//     return newTotal;
// }, 0);
// }
