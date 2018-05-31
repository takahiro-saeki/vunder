const babel = require('@babel/core');
const fs = require('fs');
const checkPath = require('./checkPath');
const mkdirp = require('mkdirp');
const readFile = require('./readFile');

const options = {"presets": ["env"]}

const compile = async (input, output) => {
  await mkdirp(checkPath(output))
  const code = await readFile(input);
  const newCode = await babel.transform(code, options).code
  await fs.writeFileSync(output, newCode);
}

module.exports = compile