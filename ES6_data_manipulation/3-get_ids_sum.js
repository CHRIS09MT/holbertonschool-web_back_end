export default function getStudentIdsSum(students) {
  const sum = students.reduce((accumulator, students) => accumulator + students.id, 0);
  return (sum);
}
