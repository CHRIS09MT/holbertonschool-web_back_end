import fs from 'fs/promises';

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.trim().split('\n');
        const students = {};
        
        for (let i = 1; i < lines.length; i++) {
            const [firstname, , , field] = lines[i].split(',');
            if (!students[field]) {
                students[field] = [];
            }
            students[field].push(firstname);
        }
        return students;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

export default readDatabase;
