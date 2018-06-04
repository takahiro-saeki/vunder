const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const {transformFromAst} = require('babel-core');
const extension = require('./extension');

global.VUNDER_INTERNAL_ID = 0

/*

 first, check filename path by fs.readFileSync
 if error occured, check inside of node_modules.

*/

const checkFiles = filename => {
  try {
    const asyncFetch = fs.readFileSync(filename, 'utf-8');
    return asyncFetch
  } catch(err) {
    return false
  }
}

const checkNodeModules = filename => {
  try {
    const asyncFetch = fs.readFileSync(require.resolve('lodash'), 'utf-8');
    return asyncFetch
  } catch(err) {
    return false
  }
}

const contentEval = filename => {
  const evalFile = checkFiles(filename);
  if(evalFile) {
    return evalFile
  }
  return checkNodeModules(filename)
}

const createAsset = (filename, ext) => {
  const ast = babylon.parse(contentEval(filename), {
    sourceType: 'module'
  });

  const dependencies = [];

  traverse(ast, {
    ImportDeclaration: ({node}) => {
      dependencies.push(node.source.value);
    }
  });

  const id = global.VUNDER_INTERNAL_ID++;
  const {code} = transformFromAst(ast, null, {
    presets: ['env'],
  });

  return {
    id,
    filename,
    dependencies,
    code,
  };
}

module.exports = createAsset