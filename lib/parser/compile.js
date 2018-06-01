const babel = require('@babel/core');
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


const options = {"presets": ["env"]}

const isMinify = (flag = false, code) => {
  if(flag) {
    return UglifyJS.minify(code).code
  }
  return code
}

const compile = async ({entry, output, minify}) => {
  await mkdirp(checkPath(output))

  const graph = await createGraph(entry);
  const result = await bundle(graph);
  await fs.writeFileSync(output, result);
  
  const stats = await fs.statSync(output).size
  const calcSize = filesize.partial({standard: "iec"});
  await console.log(`[${chalk.white.bold(output)}]: ${chalk.cyan(calcSize(stats))} ${chalk.green('[built]')}`)
}

module.exports = compile