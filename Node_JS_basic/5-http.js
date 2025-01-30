const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');  // Este debe devolver un objeto con las listas de estudiantes

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true).pathname;

  if (reqUrl === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(databaseFile)
      .then((students) => {
        // Asegurémonos de que los estudiantes se estructuren correctamente
        const totalStudents = students.CS.length + students.SWE.length;
        const csStudents = students.CS.join(', ');
        const sweStudents = students.SWE.join(', ');

        // Ahora formateamos la salida correctamente
        res.write(`Number of students: ${totalStudents}\n`);
        res.write(`Number of students in CS: ${students.CS.length}. List: ${csStudents}\n`);
        res.write(`Number of students in SWE: ${students.SWE.length}. List: ${sweStudents}\n`);
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end('Error reading the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
