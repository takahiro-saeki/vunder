const createAsset = require('./createAsset');
const path = require('path');
const fs = require('fs')

const checkPath = require('../module/checkPath');
const mkdirp = require('mkdirp');

function createGraph(entry) {
  console.log('createGraph', entry)
  const mainAsset = createAsset(entry);
  const queue = [mainAsset];
  console.log('queue', queue)
  for (const asset of queue) {
    asset.mapping = {};
    const dirname = path.dirname(asset.filename);
    asset.dependencies.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath);
      const child = createAsset(absolutePath);
      asset.mapping[relativePath] = child.id;
      queue.push(child);
    });
  }
  return queue;
}

module.exports = createGraph