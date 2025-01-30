const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }
    const students = lines.slice(1).filter((line) => line).map((line) => {
      const [firstname, , , field] = line.split(',');
      return { firstname, field };
    });

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach(({ firstname, field }) => {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error1) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;