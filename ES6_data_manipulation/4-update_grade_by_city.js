export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
    return listOfStudents
        .filter((student) => student.location === city) // filter student for those with location matches city
        .map((student) => { // map each student as new obj
            const gradeObject = newGrades.find( // find within array newGrades
                (grade) => grade.studentId === student.id, // find the current grade in the array where grade matches student id
            );

            return { // construct a new student obj
                ...student, // ... Copies all properties from student, puts them into a new object, allow override/ add properties after
                grade: gradeObject ? gradeObject.grade : 'N/A', // is the same as if (gradeObject) {
            //     grade = gradeObject.grade;
            // } else {
            //     grade = 'N/A';
            // }
            };
        });
}