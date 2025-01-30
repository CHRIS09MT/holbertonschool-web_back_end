const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');  // Este debería retornar un objeto con los estudiantes

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
        // Aquí estructuramos la respuesta para incluir las estadísticas requeridas
        const totalStudents = students.CS.length + students.SWE.length;
        const csStudents = students.CS.join(', ');
        const sweStudents = students.SWE.join(', ');

        res.write(`Number of students: ${totalStudents}\n`);
        res.write(`Number of students in CS: ${students.CS.length}. List: ${csStudents}\n`);
        res.write(`Number of students in SWE: ${students.SWE.length}. List: ${sweStudents}\n`);
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
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
