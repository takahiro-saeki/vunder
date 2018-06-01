const compile = require('./module/compile')
const path = require('path')
const localServer = require('./localServer')
const ejsCompiler = require('./template/ejsCompiler');

const config = require(process.argv[2])

compile(config)

ejsCompiler(config)

localServer(config)