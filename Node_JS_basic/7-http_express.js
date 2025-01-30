const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1).map((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          return {
            firstname,
            lastname,
            age,
            field,
          };
        });

        const totalStudents = students.length;
        const csStudents = students.filter((student) => student.field === 'CS');
        const sweStudents = students.filter((student) => student.field === 'SWE');

        let result = `Number of students: ${totalStudents}\n`;
        result += `Number of students in CS: ${csStudents.length}. List: ${csStudents.map((s) => s.firstname).join(', ')}\n`;
        result += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((s) => s.firstname).join(', ')}`;
        resolve(result);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.send('This is the list of our students\nCannot load the database');
    return;
  }

  try {
    const result = await countStudents(databasePath);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
