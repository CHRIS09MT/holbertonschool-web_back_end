const http = require('http');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Helper function to read CSV and parse students
function readCSV(filePath) {
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

// HTTP server logic
const app = http.createServer(async (req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const dbFilePath = process.argv[2]; // File passed in the command line
    if (!dbFilePath) {
      res.statusCode = 400;
      return res.end('Database file not provided');
    }

    try {
      const students = await readCSV(dbFilePath);

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.CS.length + students.SWE.length}\n`);
      res.write(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}\n`);
      res.end();
    } catch (error) {
      res.statusCode = 500;
      res.end('Error reading the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
