export default function getListStudentIds(list) {
    if (!Array.isArray(list)) {
        return [];
    }
// use map to go through each item in array student and get student.id
    return list.map((student) => student.id);
}