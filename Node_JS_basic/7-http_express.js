const express = require('express');
const fs = require('fs');
const readline = require('readline');
const app = express();

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    const students = {
      CS: [],
      SWE: []
    };

    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      const [name, subject] = line.split(',');
      if (name && subject) {
        if (subject.trim() === 'CS') {
          students.CS.push(name.trim());
        } else if (subject.trim() === 'SWE') {
          students.SWE.push(name.trim());
        }
      }
    });

    rl.on('close', () => {
      resolve(students);
    });

    rl.on('error', (error) => {
      reject(error);
    });
  });
}

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];

  if (!databaseFile) {
    return res.status(400).send('Database file not provided');
  }

  countStudents(databaseFile)
    .then((students) => {
      const totalStudents = students.CS.length + students.SWE.length;
      const csStudents = students.CS.join(', ');
      const sweStudents = students.SWE.join(', ');

      res.status(200).send(
        `This is the list of our students\n` +
        `Number of students: ${totalStudents}\n` +
        `Number of students in CS: ${students.CS.length}. List: ${csStudents}\n` +
        `Number of students in SWE: ${students.SWE.length}. List: ${sweStudents}\n`
      );
    })
    .catch((error) => {
      res.status(500).send('Error reading the database');
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
