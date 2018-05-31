const babel = require('@babel/core');
const fs = require('fs');
const checkPath = require('./checkPath');
const mkdirp = require('mkdirp');
const readFile = require('./readFile');

const UglifyJS = require("uglify-es");

const options = {"presets": ["env"]}

const isMinify = (flag = false, code) => {
  if(flag) {
    return UglifyJS.minify(code).code
  }
  return code
}

const compile = async ({entry, output, minify}) => {
  await mkdirp(checkPath(output))
  const code = await readFile(entry);
  const newCode = await babel.transform(code, options).code
  const optimize = isMinify(minify, newCode)
  
  await fs.writeFileSync(output, optimize);
}

module.exports = compile