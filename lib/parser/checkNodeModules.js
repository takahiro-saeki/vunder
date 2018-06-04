const fs = require('fs');

const checkNodeModules = filename => {
  try {
    const asyncFetch = fs.readFileSync(require.resolve('lodash'), 'utf-8');
    return asyncFetch
  } catch(err) {
    return false
  }
}

module.exports = checkNodeModules;