const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Eliminar líneas vacías
      if (lines.length < 2) throw new Error('Cannot load the database');

      const students = lines.slice(1).map((line) => line.split(','));
      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach(([firstname, lastname, age, field]) => {
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
