const fs = require('fs');
const CHAR_CODE = 'utf-8';

const readFile = path => fs.readFileSync(path, CHAR_CODE)

module.exports = readFile;