import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      fields.forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      return res.status(200).send(response.trim());
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[2]);
      if (!students[major]) {
        return res.status(200).send('List: ');
      }
      return res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
