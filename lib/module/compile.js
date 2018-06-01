const babel = require('@babel/core');
const fs = require('fs');
const checkPath = require('./checkPath');
const mkdirp = require('mkdirp');
const readFile = require('./readFile');
const filesize = require('filesize');

const UglifyJS = require("uglify-es");
const chalk = require('chalk');

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
  const stats = await fs.statSync(output).size
  const calcSize = filesize.partial({standard: "iec"});
  await console.log(`[${chalk.white.bold(output)}]: ${chalk.cyan(calcSize(stats))} ${chalk.green('[built]')}`)
}

module.exports = compile