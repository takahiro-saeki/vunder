const fs = require('fs');
const path = require('path')

const checkNodeModules = filename => {
  try {
    const basePath = path.parse(filename)
    const asyncFetch = fs.readFileSync(require.resolve(basePath.name), 'utf-8');
    return asyncFetch
  } catch(err) {
    return false
  }
}

module.exports = checkNodeModules;