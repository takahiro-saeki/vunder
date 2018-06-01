const createAsset = require('./createAsset');
const path = require('path');

const checkPath = require('../module/checkPath');
const mkdirp = require('mkdirp');

function createGraph(entry, extension) {
  const mainAsset = createAsset(entry, extension);
  const queue = [mainAsset];
  console.log('test', queue)
  for (const asset of queue) {
    asset.mapping = {};
    const dirname = path.dirname(asset.filename);
    asset.dependencies.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath);
      const child = createAsset(absolutePath, extension);
      asset.mapping[relativePath] = child.id;
      queue.push(child);
    });
  }
  return queue;
}

module.exports = createGraph