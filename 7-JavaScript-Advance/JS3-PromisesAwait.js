const fs = require('fs').promises;

async function readFileContents() {
  try {
    const data = await fs.readFile('example.txt', 'utf-8');
    console.log('File Contents:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readFileContents();
