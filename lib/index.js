const compile = require('./parser/compile')
const localServer = require('./localServer')
const ejsCompiler = require('./template/ejsCompiler');
const path = require('path')

var watch = require('node-watch');

const config = require(process.argv[2])

compile(config)

ejsCompiler(config)

localServer(config)

//console.log(path.join(__dirname, '..'))

/*
watch(path.join(__dirname, '..'), { recursive: true }, (evt, name) => {
  compile(config)
  console.log('%s changed.', name);
  console.log('evt', evt);
});
*/
