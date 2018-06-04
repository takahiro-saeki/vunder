const checkFiles = require('./checkFiles');
const checkNodeModules = require('./checkNodeModules');

const contentEval = filename => {
  const evalFile = checkFiles(filename);
  if(evalFile) {
    return evalFile
  }
  return checkNodeModules(filename)
}

module.exports = contentEval;