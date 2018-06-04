const babel = require('babel-core');
const fs = require('fs');
const checkPath = require('./checkPath');
const mkdirp = require('mkdirp');
const readFile = require('./readFile');
const filesize = require('filesize');
const chalk = require('chalk');
const bundle = require('./bundle')
const createAsset = require('./createAsset')
const createGraph = require('./createGraph')
const isMinify = require('./isMinify')

const compile = ({entry, output, minify, extension}) => {
  mkdirp(checkPath(output))
  const graph = createGraph(entry, extension);
  const result = bundle(graph);
  const optimize = isMinify(minify, result)
  fs.writeFileSync(output, optimize);
  
  const stats = fs.statSync(output).size
  const calcSize = filesize.partial({standard: "iec"});
  console.info(`[${chalk.white.bold(output)}]: ${chalk.cyan(calcSize(stats))} ${chalk.green('[built]')}`)
}

module.exports = compile