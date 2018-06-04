const fs = require('fs')

const checkFiles = filename => {
  try {
    const asyncFetch = fs.readFileSync(filename, 'utf-8');
    return asyncFetch
  } catch(err) {
    return false
  }
}

module.exports = checkFiles;