// students = an array of student objects. filter(...) = goes through each student. Returns a new array(original array is unchanged)
export default function getStudentsByLocation(students, location) {
    return students.filter((object) => object.location === location);
}