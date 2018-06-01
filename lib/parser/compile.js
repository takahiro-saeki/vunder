const babel = require('babel-core');
const fs = require('fs');
const checkPath = require('../module/checkPath');
const mkdirp = require('mkdirp');
const readFile = require('../module/readFile');
const filesize = require('filesize');

const UglifyJS = require("uglify-es");
const chalk = require('chalk');

const bundle = require('./bundle')
const createAsset = require('./createAsset')
const createGraph = require('./createGraph')

const isMinify = (flag = false, code) => {
  if(flag) {
    return UglifyJS.minify(code).code
  }
  return code
}

const compile = ({entry, output, minify, extension}) => {
  
  mkdirp(checkPath(output))
  const graph = createGraph(entry, extension);
  const result = bundle(graph);
  const optimize = isMinify(minify, result)
  fs.writeFileSync(output, optimize);
  
  const stats = fs.statSync(output).size
  const calcSize = filesize.partial({standard: "iec"});
  console.log(`[${chalk.white.bold(output)}]: ${chalk.cyan(calcSize(stats))} ${chalk.green('[built]')}`)
}

module.exports = compile