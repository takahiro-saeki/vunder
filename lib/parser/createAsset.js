const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const {transformFromAst} = require('babel-core');
const extension = require('./extension');
const contentEval = require('./contentEval');

global.VUNDER_INTERNAL_ID = 0;

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
    presets: ['env']
  })

  return {
    id,
    filename,
    dependencies,
    code,
  };
}

module.exports = createAsset